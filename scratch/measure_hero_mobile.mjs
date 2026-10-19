import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9339;
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
    await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
    await send("Page.navigate", { url: "http://localhost:3000/" });
    await new Promise(r => setTimeout(r, 3500));

    const s1 = await send("Runtime.evaluate", {
      expression: `(() => {
        const card1 = document.querySelector('.hero-glass-card');
        const r1 = card1 ? card1.getBoundingClientRect() : null;
        const st1 = card1 ? window.getComputedStyle(card1) : null;
        return {
          r1: r1 ? { width: r1.width, height: r1.height, top: r1.top, left: r1.left } : null,
          pad: st1 ? st1.padding : null,
          margin: st1 ? st1.margin : null
        };
      })()`,
      returnByValue: true
    });
    console.log("Card 1:", JSON.stringify(s1.result.value, null, 2));

    // click dot 2
    await send("Runtime.evaluate", {
      expression: `(() => {
        const dots = document.querySelectorAll('.hero-stage-dot');
        if (dots[1]) dots[1].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));

    const s2 = await send("Runtime.evaluate", {
      expression: `(() => {
        const card2 = document.querySelector('.what-we-do-left');
        const r2 = card2 ? card2.getBoundingClientRect() : null;
        const st2 = card2 ? window.getComputedStyle(card2) : null;
        const row = document.querySelector('.what-we-do-cards');
        const rRow = row ? row.getBoundingClientRect() : null;
        const cards = Array.from(document.querySelectorAll('.solution-card')).map(c => {
          const r = c.getBoundingClientRect();
          return { width: r.width, height: r.height, top: r.top, left: r.left };
        });
        return {
          r2: r2 ? { width: r2.width, height: r2.height, top: r2.top, left: r2.left } : null,
          pad: st2 ? st2.padding : null,
          margin: st2 ? st2.margin : null,
          rowRect: rRow ? { width: rRow.width, height: rRow.height, top: rRow.top, left: rRow.left } : null,
          cards
        };
      })()`,
      returnByValue: true
    });
    console.log("Card 2 & Explore Row:", JSON.stringify(s2.result.value, null, 2));

    const snap2 = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync("scratch/mobile_slide2_snap.png", Buffer.from(snap2.data, "base64"));
    console.log("Saved scratch/mobile_slide2_snap.png");

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

run();
