import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9558;
const USER_DATA = "C:\\Users\\amalr\\.gemini\\antigravity\\brain\\68058f7f-3d23-4994-8318-6b2557a7b977\\scratch\\cprof-mobile-clean";
const ARTIFACT_DIR = "C:\\Users\\amalr\\.gemini\\antigravity\\brain\\68058f7f-3d23-4994-8318-6b2557a7b977";

const delay = ms => new Promise(r => setTimeout(r, ms));
const getJson = url => new Promise((ok, err) => http.get(url, r => { let d=''; r.on('data', c=>d+=c); r.on('end', ()=>ok(JSON.parse(d))); }).on('error', err));
const putJson = url => new Promise((ok, err) => {
  const u = new URL(url);
  const req = http.request({ hostname: u.hostname, port: u.port, path: u.pathname+u.search, method:'PUT' }, r => { let d=''; r.on('data', c=>d+=c); r.on('end', ()=>ok(JSON.parse(d))); });
  req.on('error', err); req.end();
});

async function run() {
  console.log("Starting Chrome for Mobile on port", PORT);
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA}`,
    '--window-size=430,950',
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
      ws.send(JSON.stringify({ id, method: m, params: p }));
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
      hasTouch: true
    });
    await send('Emulation.setUserAgentOverride', {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
    });

    console.log("Navigating to http://localhost:3000/");
    await send('Page.navigate', { url: 'http://localhost:3000/' });
    await delay(3500);

    // 1. Stage 1 (Frame 1)
    await send('Runtime.evaluate', { expression: `window.__setHeroFrame(1)` });
    await delay(1200);
    let snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'mobile_stage1_clean.png'), Buffer.from(snap.data, 'base64'));
    console.log("Captured mobile_stage1_clean.png");

    // 2. Stage 2 (Frame 115) - Card 1 in front (matching Image 2 & 3)
    await send('Runtime.evaluate', { expression: `window.__setHeroFrame(115)` });
    await delay(1200);
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'mobile_stage2_card1_clean.png'), Buffer.from(snap.data, 'base64'));
    console.log("Captured mobile_stage2_card1_clean.png");

    // 3. Stage 2 (Frame 150) - Card 2 in front
    await send('Runtime.evaluate', { expression: `window.__setHeroFrame(150)` });
    await delay(1200);
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'mobile_stage2_card2_clean.png'), Buffer.from(snap.data, 'base64'));
    console.log("Captured mobile_stage2_card2_clean.png");

    // 4. Stage 3 (Frame 225) - Map scene
    await send('Runtime.evaluate', { expression: `window.__setHeroFrame(225)` });
    await delay(1200);
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'mobile_stage3_map_clean.png'), Buffer.from(snap.data, 'base64'));
    console.log("Captured mobile_stage3_map_clean.png");

    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(err => {
  console.error("Error in test run:", err);
  process.exit(1);
});
