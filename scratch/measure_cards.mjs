import { spawn } from 'child_process';
import os from 'os';

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9387;
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--user-data-dir=' + os.tmpdir() + '\\chrome-debug-' + Date.now(),
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetsRes = await fetch('http://127.0.0.1:' + port + '/json');
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise(res => ws.onopen = res);

    let id = 1;
    function send(method, params = {}) {
      return new Promise(res => {
        const msgId = id++;
        const handler = e => {
          const d = JSON.parse(e.data);
          if (d.id === msgId) {
            ws.removeEventListener('message', handler);
            res(d.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    for (const w of [360, 390, 430]) {
      await send('Emulation.setDeviceMetricsOverride', { width: w, height: 844, deviceScaleFactor: 2, mobile: true });
      await send('Page.navigate', { url: 'http://localhost:3000/' });
      await new Promise(r => setTimeout(r, 3500));

      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const card1 = document.querySelector('.hero-glass-card');
          const card2 = document.querySelector('.what-we-do-left');
          const card3 = document.getElementById('card-c');
          const s1 = document.querySelector('.hero-screen');
          const s2 = document.querySelector('.what-we-do-screen');
          const cs1 = s1 ? window.getComputedStyle(s1) : null;
          const cs2 = s2 ? window.getComputedStyle(s2) : null;
          const cs3 = card3 ? window.getComputedStyle(card3) : null;
          const r1 = card1 ? card1.getBoundingClientRect() : null;
          const r2 = card2 ? card2.getBoundingClientRect() : null;
          const r3 = card3 ? card3.getBoundingClientRect() : null;
          return {
            w: window.innerWidth,
            heroScreenPaddingTop: cs1?.paddingTop,
            whatWeDoScreenPaddingTop: cs2?.paddingTop,
            cardCTop: cs3?.top,
            card1: r1 ? { top: r1.top, bottom: r1.bottom, height: r1.height, width: r1.width, left: r1.left, right: r1.right } : null,
            card2: r2 ? { top: r2.top, bottom: r2.bottom, height: r2.height, width: r2.width, left: r2.left, right: r2.right } : null,
            card3: r3 ? { top: r3.top, bottom: r3.bottom, height: r3.height, width: r3.width, left: r3.left, right: r3.right } : null,
          };
        })()`,
        returnByValue: true
      });

      console.log("\n=== WIDTH " + w + " ===");
      console.log(JSON.stringify(res.result?.value, null, 2));
    }
  } finally {
    chrome.kill();
  }
}

run();
