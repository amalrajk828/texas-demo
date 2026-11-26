import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9556;
const USER_DATA = "C:\\Users\\amalr\\.gemini\\antigravity\\brain\\68058f7f-3d23-4994-8318-6b2557a7b977\\scratch\\cprof-retake";
const ARTIFACT_DIR = "C:\\Users\\amalr\\.gemini\\antigravity\\brain\\68058f7f-3d23-4994-8318-6b2557a7b977";

const delay = ms => new Promise(r => setTimeout(r, ms));
const getJson = url => new Promise((ok, err) => http.get(url, r => { let d=''; r.on('data', c=>d+=c); r.on('end', ()=>ok(JSON.parse(d))); }).on('error', err));
const putJson = url => new Promise((ok, err) => {
  const u = new URL(url);
  const req = http.request({ hostname: u.hostname, port: u.port, path: u.pathname+u.search, method:'PUT' }, r => { let d=''; r.on('data', c=>d+=c); r.on('end', ()=>ok(JSON.parse(d))); });
  req.on('error', err); req.end();
});

async function run() {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA}`,
    '--window-size=1880,810',
    '--no-first-run',
    '--disable-gpu'
  ], { stdio: 'ignore' });

  for (let i = 0; i < 30; i++) {
    await delay(200);
    try {
      const v = await getJson(`http://127.0.0.1:${PORT}/json/version`);
      if (v) break;
    } catch(e) {}
  }

  try {
    const tab = await putJson(`http://127.0.0.1:${PORT}/json/new`);
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    const send = (m, p={}) => new Promise((res, rej) => {
      const id = Math.random()*1e6|0;
      const h = e => {
        const msg = JSON.parse(e.data);
        if (msg.id === id) {
          ws.removeEventListener('message', h);
          msg.error ? rej(msg.error) : res(msg.result);
        }
      };
      ws.addEventListener('message', h);
      ws.send(JSON.stringify({id, method: m, params: p}));
    });

    const ev = async code => {
      const r = await send('Runtime.evaluate', { expression: code, returnByValue: true, awaitPromise: true });
      if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
      return r.result?.value;
    };

    const screenshot = async (filename) => {
      const res = await send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(ARTIFACT_DIR, filename);
      fs.writeFileSync(outPath, Buffer.from(res.data, 'base64'));
      console.log(`Saved screenshot: ${filename}`);
      return outPath;
    };

    await send('Page.enable');
    await send('Runtime.enable');

    await send('Page.navigate', { url: 'http://localhost:3000/?debug=1' });

    // Wait until track and debug overlay are rendered
    for (let i = 0; i < 40; i++) {
      await delay(300);
      const ready = await ev(`(() => {
        const hud = document.querySelector('aside');
        const canvas = document.getElementById('hero-canvas');
        return !!hud && !!canvas;
      })()`);
      if (ready) break;
    }

    await delay(500);

    // Frame 1
    await ev(`window.scrollTo(0, 0);`);
    await delay(400);
    const hud1 = await ev(`document.querySelector('aside')?.innerText.replace(/\\n/g, ' | ')`);
    console.log(`Frame 1: ${hud1}`);
    await screenshot("hero_desktop_frame_001.png");

    // Frame 30
    await ev(`(() => {
      const track = document.getElementById('hero-track');
      const scrollRange = track.offsetHeight - window.innerHeight;
      window.scrollTo(0, (29/299) * scrollRange);
    })()`);
    await delay(400);
    const hud30 = await ev(`document.querySelector('aside')?.innerText.replace(/\\n/g, ' | ')`);
    console.log(`Frame 30: ${hud30}`);
    await screenshot("hero_desktop_frame_030.png");

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(console.error);
