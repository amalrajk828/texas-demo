import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9340;
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

    for (const w of [360, 390, 414, 768]) {
      await send("Emulation.setDeviceMetricsOverride", { width: w, height: 844, deviceScaleFactor: 2, mobile: true });
      await send("Page.navigate", { url: "http://localhost:3000/" });

      // Poll until hero-showcase is present in DOM
      let ready = false;
      for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 500));
        const res = await send("Runtime.evaluate", {
          expression: `Boolean(document.getElementById("hero-showcase") && !document.getElementById("next-logo"))`
        });
        if (res.result.value) {
          ready = true;
          break;
        }
      }

      // Click Metering tab (tab index 2)
      await send("Runtime.evaluate", {
        expression: `(() => {
          const tabs = document.querySelectorAll(".showcase-tab");
          if (tabs[2]) tabs[2].click();
        })()`
      });
      await new Promise(r => setTimeout(r, 500));

      const heroSnap = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(`scratch/v3_${w}_hero_metering.png`, Buffer.from(heroSnap.data, "base64"));

      // Scroll to About section (scrollY = 3000)
      await send("Runtime.evaluate", { expression: `window.scrollTo(0, 3000)` });
      await new Promise(r => setTimeout(r, 800));

      const aboutSnap = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(`scratch/v3_${w}_about_view.png`, Buffer.from(aboutSnap.data, "base64"));

      const metrics = await send("Runtime.evaluate", {
        expression: `(() => {
          const card = document.getElementById("hero-showcase");
          const heroCard = document.querySelector(".hero-glass-card");
          const stats = document.querySelector(".hero-stats-strip");
          const about = document.getElementById("about");
          return {
            w: ${w},
            cardBox: card ? { w: card.offsetWidth, h: card.offsetHeight, top: card.getBoundingClientRect().top } : null,
            heroCardBottom: heroCard ? heroCard.getBoundingClientRect().bottom : null,
            overlap: (card && heroCard) ? (heroCard.getBoundingClientRect().bottom > card.getBoundingClientRect().top) : false,
            aboutTop: about ? about.getBoundingClientRect().top : null
          };
        })()`,
        returnByValue: true
      });
      console.log(`Report for ${w}px:`, JSON.stringify(metrics.result.value));
    }

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

run();
