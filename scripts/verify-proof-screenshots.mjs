import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9555;
const USER_DATA = "C:\\Users\\amalr\\.gemini\\antigravity\\brain\\68058f7f-3d23-4994-8318-6b2557a7b977\\scratch\\cprof-proof";
const ARTIFACT_DIR = "C:\\Users\\amalr\\.gemini\\antigravity\\brain\\68058f7f-3d23-4994-8318-6b2557a7b977";

const delay = ms => new Promise(r => setTimeout(r, ms));
const getJson = url => new Promise((ok, err) => http.get(url, r => { let d=''; r.on('data', c=>d+=c); r.on('end', ()=>ok(JSON.parse(d))); }).on('error', err));
const putJson = url => new Promise((ok, err) => {
  const u = new URL(url);
  const req = http.request({ hostname: u.hostname, port: u.port, path: u.pathname+u.search, method:'PUT' }, r => { let d=''; r.on('data', c=>d+=c); r.on('end', ()=>ok(JSON.parse(d))); });
  req.on('error', err); req.end();
});

async function run() {
  console.log("Starting Chrome on port", PORT);
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

    const setViewport = async (width, height, isMobileDevice = false) => {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: isMobileDevice,
      });
      await ev(`window.dispatchEvent(new Event('resize'));`);
      await delay(200);
    };

    await send('Page.enable');
    await send('Runtime.enable');

    console.log("Navigating to http://localhost:3000/?debug=1 ...");
    await send('Page.navigate', { url: 'http://localhost:3000/?debug=1' });

    let trackFound = false;
    for (let i = 0; i < 40; i++) {
      await delay(400);
      trackFound = await ev(`(() => {
        const track = document.getElementById('hero-track');
        return !!track && track.offsetHeight > 0;
      })()`);
      if (trackFound) break;
    }

    if (!trackFound) throw new Error("Could not find hero-track");

    // ── 1. Desktop Tests (1880x810) ──────────────────────────────────────────
    console.log("\n=== Testing Desktop at 1880x810 ===");
    await setViewport(1880, 810, false);
    await delay(300);

    const desktopFramesToTest = [1, 30, 60, 90, 120, 150, 180, 210, 225, 245, 260, 290];

    for (const f of desktopFramesToTest) {
      // Scroll directly to the exact target position for frame f
      await ev(`(() => {
        const track = document.getElementById('hero-track');
        const scrollRange = track.offsetHeight - window.innerHeight;
        const targetP = (${f} - 1) / 299;
        window.scrollTo(0, targetP * scrollRange);
      })()`);

      // Allow 350ms for rAF lerp loop to settle
      await delay(350);

      const status = await ev(`(() => {
        const hud = document.querySelector('aside');
        return hud ? hud.innerText.replace(/\\n/g, ' | ') : 'no hud';
      })()`);

      const filename = `hero_desktop_frame_${String(f).padStart(3, '0')}.png`;
      await screenshot(filename);
      console.log(`Frame ${f}: ${status}`);
    }

    // ── 2. Reverse Scroll Check (Upwards) ────────────────────────────────────
    console.log("\n=== Testing Reverse Scroll (Upwards) ===");
    const reverseFrames = [245, 180, 90, 1];
    for (const f of reverseFrames) {
      await ev(`(() => {
        const track = document.getElementById('hero-track');
        const scrollRange = track.offsetHeight - window.innerHeight;
        const targetP = (${f} - 1) / 299;
        window.scrollTo(0, targetP * scrollRange);
      })()`);
      await delay(350);
      const status = await ev(`(() => {
        const hud = document.querySelector('aside');
        return hud ? hud.innerText.replace(/\\n/g, ' | ') : 'no hud';
      })()`);
      const filename = `hero_desktop_reverse_frame_${String(f).padStart(3, '0')}.png`;
      await screenshot(filename);
      console.log(`Reverse Frame ${f}: ${status}`);
    }

    // ── 3. Mobile Tests (390x844) ────────────────────────────────────────────
    console.log("\n=== Testing Mobile at 390x844 ===");
    await setViewport(390, 844, true);
    await delay(400);

    const mobileFramesToTest = [1, 50, 90, 130, 180, 230, 270];
    for (const f of mobileFramesToTest) {
      await ev(`(() => {
        const track = document.getElementById('hero-track');
        const scrollRange = track.offsetHeight - window.innerHeight;
        const targetP = (${f} - 1) / 299;
        window.scrollTo(0, targetP * scrollRange);
      })()`);
      await delay(350);
      const status = await ev(`(() => {
        const hud = document.querySelector('aside');
        return hud ? hud.innerText.replace(/\\n/g, ' | ') : 'no hud';
      })()`);
      const filename = `hero_mobile_frame_${String(f).padStart(3, '0')}.png`;
      await screenshot(filename);
      console.log(`Mobile Frame ${f}: ${status}`);
    }

    console.log("\nAll verification proof screenshots captured successfully!");
    ws.close();
  } finally {
    chrome.kill();
  }
}

run().catch(err => {
  console.error("Proof script error:", err);
  process.exit(1);
});
