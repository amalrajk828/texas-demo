import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

const widths = [360, 390, 430];

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9375;
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
      await send("Emulation.setDeviceMetricsOverride", { 
        width: w, 
        height: 844, 
        deviceScaleFactor: 2, 
        mobile: true 
      });
      await send("Page.navigate", { url: "http://localhost:3000/" });
      
      // Wait for page load and loader to disappear completely
      await new Promise(r => setTimeout(r, 4000));

      // Scroll into hero section or activate slide 3
      await send("Runtime.evaluate", {
        expression: `(() => {
          // If loader still present, hide it
          const loader = document.getElementById("page-loader-root");
          if (loader) loader.style.display = "none";

          const hs = document.getElementById("hero-screen"); if (hs) { hs.style.opacity = "0"; hs.style.visibility = "hidden"; }
          const wwd = document.getElementById("what-we-do-screen"); if (wwd) { wwd.style.opacity = "0"; wwd.style.visibility = "hidden"; }
          const cardC = document.getElementById("card-c"); 
          if (cardC) { 
            cardC.style.opacity = "1"; 
            cardC.style.visibility = "visible"; 
            cardC.style.transform = "none"; 
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 800));

      // Measure layout metrics
      const metrics = await send("Runtime.evaluate", {
        expression: `(() => {
          const cardC = document.getElementById("card-c");
          const dots = document.querySelector(".hero-stage-indicator");
          const canvas = document.getElementById("hero-canvas");
          const flangeLayer = cardC ? cardC.querySelector(".card-bg-flange-layer") : null;
          const gradientOverlay = cardC ? cardC.querySelector(".card-bg-gradient-overlay") : null;

          if (!cardC) return { error: "card-c not found" };

          const cardRect = cardC.getBoundingClientRect();
          const dotsRect = dots ? dots.getBoundingClientRect() : null;
          const cardStyle = window.getComputedStyle(cardC);
          const canvasStyle = canvas ? window.getComputedStyle(canvas) : null;
          const flangeStyle = flangeLayer ? window.getComputedStyle(flangeLayer) : null;
          const gradientStyle = gradientOverlay ? window.getComputedStyle(gradientOverlay) : null;

          return {
            viewportWidth: window.innerWidth,
            cardC: {
              left: Math.round(cardRect.left),
              right: Math.round(cardRect.right),
              marginRightFromEdge: Math.round(window.innerWidth - cardRect.right),
              width: Math.round(cardRect.width),
              top: Math.round(cardRect.top),
              bottom: Math.round(cardRect.bottom),
              height: Math.round(cardRect.height),
              borderRadius: cardStyle.borderRadius,
              bg: cardStyle.backgroundColor,
              boxShadow: cardStyle.boxShadow,
              opacity: cardStyle.opacity
            },
            flangeLayerDisplay: flangeStyle ? flangeStyle.display : null,
            gradientOverlayDisplay: gradientStyle ? gradientStyle.display : null,
            canvasOpacity: canvasStyle ? canvasStyle.opacity : null,
            dots: dotsRect ? {
              right: Math.round(window.innerWidth - dotsRect.right),
              top: Math.round(dotsRect.top),
              overlapsCards: !(dotsRect.bottom < cardRect.top || dotsRect.top > cardRect.bottom || dotsRect.right < cardRect.left || dotsRect.left > cardRect.right)
            } : null
          };
        })()`,
        returnByValue: true
      });

      console.log(`\n=================== VIEWPORT ${w}px ===================`);
      console.log(JSON.stringify(metrics.result?.value || metrics, null, 2));

      // Capture screenshot
      const shot = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(`scratch/slide3_${w}px.png`, Buffer.from(shot.data, "base64"));
      console.log(`Saved screenshot: scratch/slide3_${w}px.png`);
    }

  } catch (err) {
    console.error("Test error:", err);
  } finally {
    chrome.kill();
  }
}

run();
