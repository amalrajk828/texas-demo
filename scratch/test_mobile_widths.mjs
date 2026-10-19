import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

const widths = [360, 390, 414, 768];

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9338;
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

    for (const w of widths) {
      await send("Emulation.setDeviceMetricsOverride", { width: w, height: 800, deviceScaleFactor: 2, mobile: true });
      await send("Page.navigate", { url: "http://localhost:3000/" });
      await new Promise(r => setTimeout(r, 3000));

      // 1. Initial Hero view
      let snap = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(`scratch/test_${w}_hero.png`, Buffer.from(snap.data, "base64"));

      // Check card dimensions
      const metrics = await send("Runtime.evaluate", {
        expression: `(() => {
          const card = document.getElementById("hero-showcase");
          const heroCard = document.querySelector(".hero-glass-card");
          const stats = document.querySelector(".hero-stats-strip");
          const about = document.getElementById("about");
          return {
            card: card ? { w: card.offsetWidth, h: card.offsetHeight, top: card.getBoundingClientRect().top } : null,
            heroCard: heroCard ? { w: heroCard.offsetWidth, h: heroCard.offsetHeight, bottom: heroCard.getBoundingClientRect().bottom } : null,
            stats: stats ? { top: stats.getBoundingClientRect().top, bottom: stats.getBoundingClientRect().bottom } : null,
            aboutTop: about ? about.getBoundingClientRect().top : null
          };
        })()`,
        returnByValue: true
      });
      console.log(`Width ${w}px initial metrics:`, JSON.stringify(metrics.result.value));

      // Scroll to stage 2 (e.g. scrollY = 1200)
      await send("Runtime.evaluate", { expression: `window.scrollTo(0, 1200)` });
      await new Promise(r => setTimeout(r, 600));

      // Scroll past hero into About section (e.g. scrollY = 3200)
      await send("Runtime.evaluate", { expression: `window.scrollTo(0, 3200)` });
      await new Promise(r => setTimeout(r, 1000));

      const afterScrollMetrics = await send("Runtime.evaluate", {
        expression: `(() => {
          const about = document.getElementById("about");
          const aboutHeader = about ? about.querySelector("h2, .section-title, .about-eyebrow") : null;
          return {
            scrollY: window.scrollY,
            aboutTop: about ? about.getBoundingClientRect().top : null,
            aboutHeaderVisible: aboutHeader ? window.getComputedStyle(aboutHeader).opacity : null
          };
        })()`,
        returnByValue: true
      });
      console.log(`Width ${w}px scrolled metrics:`, JSON.stringify(afterScrollMetrics.result.value));

      snap = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(`scratch/test_${w}_about.png`, Buffer.from(snap.data, "base64"));
    }

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

run();
