import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

const widths = [360, 390, 430];

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9365;
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
      
      // Wait for page load and preloader to dismiss naturally
      await new Promise(r => setTimeout(r, 2500));

      // Click dot 2 to transition to Slide 2 ("Precision solutions for critical industries")
      await send("Runtime.evaluate", {
        expression: `(() => {
          const dots = document.querySelectorAll(".hero-stage-dot");
          if (dots && dots[1]) {
            dots[1].click();
          }
        })()`
      });

      // Wait 3.5 seconds for Lenis smooth-scroll & RAF easing to complete stage transition
      await new Promise(r => setTimeout(r, 3500));

      // Inspect elements
      const metrics = await send("Runtime.evaluate", {
        expression: `(() => {
          const wwdScreen = document.getElementById("what-we-do-screen");
          const topCard = document.querySelector(".what-we-do-left");
          const cardsRow = document.querySelector(".what-we-do-cards");
          const cards = Array.from(document.querySelectorAll(".solution-card"));
          const dots = document.querySelector(".hero-stage-indicator");
          const canvas = document.getElementById("hero-canvas");

          if (!wwdScreen) return { error: "what-we-do-screen not found" };

          const topCardRect = topCard ? topCard.getBoundingClientRect() : null;
          const cardsRowRect = cardsRow ? cardsRow.getBoundingClientRect() : null;
          const firstCardRect = cards[0] ? cards[0].getBoundingClientRect() : null;
          const secondCardRect = cards[1] ? cards[1].getBoundingClientRect() : null;
          const dotsRect = dots ? dots.getBoundingClientRect() : null;

          const cardsRowStyle = cardsRow ? window.getComputedStyle(cardsRow) : null;
          const firstCardStyle = cards[0] ? window.getComputedStyle(cards[0]) : null;
          const firstIcon = cards[0] ? cards[0].querySelector(".solution-icon-wrap") : null;
          const firstIconStyle = firstIcon ? window.getComputedStyle(firstIcon) : null;
          const firstTitle = cards[0] ? cards[0].querySelector(".solution-title") : null;
          const firstTitleStyle = firstTitle ? window.getComputedStyle(firstTitle) : null;
          const firstLink = cards[0] ? cards[0].querySelector(".solution-link") : null;
          const firstLinkStyle = firstLink ? window.getComputedStyle(firstLink) : null;
          const canvasStyle = canvas ? window.getComputedStyle(canvas) : null;

          return {
            viewportWidth: window.innerWidth,
            topCard: topCardRect ? {
              left: Math.round(topCardRect.left),
              right: Math.round(topCardRect.right),
              width: Math.round(topCardRect.width),
              top: Math.round(topCardRect.top),
              bottom: Math.round(topCardRect.bottom)
            } : null,
            cardsRow: cardsRowRect ? {
              left: Math.round(cardsRowRect.left),
              right: Math.round(cardsRowRect.right),
              width: Math.round(cardsRowRect.width),
              bottom: Math.round(cardsRowRect.bottom),
              bg: cardsRowStyle.backgroundColor,
              boxShadow: cardsRowStyle.boxShadow,
              border: cardsRowStyle.border,
              overflowX: cardsRowStyle.overflowX,
              gap: cardsRowStyle.gap,
              bottomSpacingToScreen: Math.round(window.innerHeight - cardsRowRect.bottom)
            } : null,
            firstCard: firstCardRect ? {
              left: Math.round(firstCardRect.left),
              width: Math.round(firstCardRect.width),
              height: Math.round(firstCardRect.height),
              padding: firstCardStyle.padding,
              borderRadius: firstCardStyle.borderRadius,
              bg: firstCardStyle.backgroundColor,
              boxShadow: firstCardStyle.boxShadow
            } : null,
            secondCard: secondCardRect ? {
              left: Math.round(secondCardRect.left),
              width: Math.round(secondCardRect.width),
              peekWidth: Math.round(window.innerWidth - secondCardRect.left)
            } : null,
            iconBadge: firstIconStyle ? {
              width: firstIconStyle.width,
              height: firstIconStyle.height
            } : null,
            title: firstTitleStyle ? {
              fontSize: firstTitleStyle.fontSize,
              fontWeight: firstTitleStyle.fontWeight,
              lineHeight: firstTitleStyle.lineHeight,
              minHeight: firstTitleStyle.minHeight,
              scrollHeight: firstTitle.scrollHeight,
              clientHeight: firstTitle.clientHeight,
              isCutOff: firstTitle.scrollHeight > firstTitle.clientHeight + 2
            } : null,
            exploreLink: firstLinkStyle ? {
              fontSize: firstLinkStyle.fontSize,
              height: firstLinkStyle.height,
              minHeight: firstLinkStyle.minHeight
            } : null,
            dots: dotsRect ? {
              right: Math.round(window.innerWidth - dotsRect.right),
              top: Math.round(dotsRect.top),
              overlapsCards: firstCardRect ? !(dotsRect.bottom < firstCardRect.top || dotsRect.top > firstCardRect.bottom || dotsRect.right < firstCardRect.left || dotsRect.left > firstCardRect.right) : false
            } : null,
            canvasMask: canvasStyle ? {
              maskImage: canvasStyle.maskImage,
              webkitMaskImage: canvasStyle.webkitMaskImage
            } : null
          };
        })()`,
        returnByValue: true
      });

      console.log(`\n=================== VIEWPORT ${w}px ===================`);
      console.log(JSON.stringify(metrics.result?.value || metrics, null, 2));

      // Capture screenshot
      const shot = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(`scratch/slide2_${w}px.png`, Buffer.from(shot.data, "base64"));
      console.log(`Saved screenshot: scratch/slide2_${w}px.png`);
    }

  } catch (err) {
    console.error("Test error:", err);
  } finally {
    chrome.kill();
  }
}

run();
