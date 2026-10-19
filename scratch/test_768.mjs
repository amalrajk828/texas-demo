import { spawn } from 'child_process';
import os from 'os';
import fs from 'fs';

async function test768() {
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

    await send("Emulation.setDeviceMetricsOverride", { width: 768, height: 1024, deviceScaleFactor: 2, mobile: true });
    await send("Page.navigate", { url: "http://localhost:3000/" });

    // Poll until sequence exists
    let ready = false;
    for (let i = 0; i < 20; i++) {
      const chk = await send("Runtime.evaluate", {
        expression: `!!document.getElementById("sequence")`
      });
      if (chk?.result?.value) {
        ready = true;
        break;
      }
      await new Promise(r => setTimeout(r, 500));
    }
    console.log("Ready at 768px:", ready);
    await new Promise(r => setTimeout(r, 1000));

    const evalRes = await send("Runtime.evaluate", {
      expression: `(() => {
        const seq = document.getElementById("sequence");
        const sticky = seq ? seq.querySelector("div:first-child") : null;
        const dots = document.querySelector(".hero-stage-indicator");
        const hs = document.getElementById("hero-screen");
        const wwd = document.getElementById("what-we-do-screen");
        const wwdLeft = document.querySelector(".what-we-do-left");
        const wwdImgWrap = document.querySelector(".what-we-do-image-wrap");
        const wwdImg = document.querySelector(".what-we-do-image");
        const wwdCards = document.querySelector(".what-we-do-cards");
        const solCards = Array.from(document.querySelectorAll(".solution-card"));
        const cs = document.getElementById("custody-screen");
        const cardC = document.getElementById("card-c");
        const flangeLayer = document.querySelector(".card-bg-flange-layer");
        const flangeImg = document.querySelector(".card-bg-flange-img");
        const cardContent = document.querySelector(".card-content-wrapper");
        const about = document.getElementById("about");

        function r(el) {
          if (!el) return null;
          const b = el.getBoundingClientRect();
          const s = window.getComputedStyle(el);
          return {
            top: Math.round(b.top),
            bottom: Math.round(b.bottom),
            height: Math.round(b.height),
            width: Math.round(b.width),
            opacity: s.opacity,
            display: s.display,
            position: s.position,
            visibility: s.visibility
          };
        }

        let overlap = false;
        if (cardContent && flangeImg) {
          const cr = cardContent.getBoundingClientRect();
          const fr = flangeImg.getBoundingClientRect();
          overlap = !(cr.bottom <= fr.top || cr.top >= fr.bottom);
        }

        return {
          sequence: r(seq),
          stickyWrap: r(sticky),
          dots: r(dots),
          heroScreen: r(hs),
          whatWeDoScreen: r(wwd),
          wwdLeft: r(wwdLeft),
          wwdImgWrap: r(wwdImgWrap),
          wwdImg: r(wwdImg),
          wwdCards: r(wwdCards),
          solutionCardCount: solCards.length,
          firstCard: r(solCards[0]),
          secondCard: r(solCards[1]),
          custodyScreen: r(cs),
          cardC: r(cardC),
          flangeLayer: r(flangeLayer),
          flangeImg: r(flangeImg),
          cardContent: r(cardContent),
          textFlangeOverlap: overlap,
          about: r(about)
        };
      })()`,
      returnByValue: true
    });

    console.log("=== METRICS AT 768px ===");
    console.log(JSON.stringify(evalRes.result.value, null, 2));

    let snap = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync("scratch/v3_768_scene1_top.png", Buffer.from(snap.data, "base64"));

    await send("Runtime.evaluate", {
      expression: `(() => {
        const el = document.getElementById("what-we-do-screen");
        if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    snap = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync("scratch/v3_768_scene2_what_we_do.png", Buffer.from(snap.data, "base64"));

    await send("Runtime.evaluate", {
      expression: `(() => {
        const el = document.getElementById("custody-screen");
        if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    snap = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync("scratch/v3_768_scene3_custody.png", Buffer.from(snap.data, "base64"));

    await send("Runtime.evaluate", {
      expression: `(() => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    snap = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync("scratch/v3_768_about.png", Buffer.from(snap.data, "base64"));

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

test768();
