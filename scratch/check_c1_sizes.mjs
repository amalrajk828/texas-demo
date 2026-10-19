import { spawn } from 'child_process';
import os from 'os';

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9349;
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${port}`,
    "--user-data-dir=" + os.tmpdir() + "\\chrome-debug-" + Date.now(),
    "about:blank"
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetsRes = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === "page");
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise(res => ws.onopen = res);

    let id = 1;
    function send(method, params = {}) {
      return new Promise(res => {
        const msgId = id++;
        const handler = e => {
          const d = JSON.parse(e.data);
          if (d.id === msgId) {
            ws.removeEventListener("message", handler);
            res(d.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send("Page.enable");
    await send("Runtime.enable");

    for (const w of [360, 390, 430]) {
      await send("Emulation.setDeviceMetricsOverride", { width: w, height: 844, deviceScaleFactor: 2, mobile: true });
      await send("Page.navigate", { url: "http://localhost:3000/" });
      await new Promise(r => setTimeout(r, 3800));

      const res = await send("Runtime.evaluate", {
        expression: `(() => {
          const c1 = document.querySelector('.hero-glass-card');
          const heroScreen = document.querySelector('.hero-screen');
          return {
            c1: c1 ? {
              h: c1.offsetHeight,
              w: c1.offsetWidth,
              pad: window.getComputedStyle(c1).padding,
              rect: c1.getBoundingClientRect()
            } : null,
            heroScreenPad: heroScreen ? window.getComputedStyle(heroScreen).padding : null
          };
        })()`,
        returnByValue: true
      });
      console.log(`${w}px:`, JSON.stringify(res.result.value, null, 2));
    }

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

run();
