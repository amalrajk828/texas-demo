import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9336;
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
    await new Promise(r => setTimeout(r, 4500));

    // Switch to slide 2 ("METERING")
    await send("Runtime.evaluate", {
      expression: `(() => {
        const card = document.getElementById("hero-showcase");
        const tab2 = card.querySelectorAll(".showcase-tab")[2];
        if (tab2) tab2.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const snap = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync("scratch/mobile_hero_snap.png", Buffer.from(snap.data, "base64"));
    console.log("Screenshot saved to scratch/mobile_hero_snap.png");

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

run();
