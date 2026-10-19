import { spawn } from 'child_process';
import os from 'os';

async function testDesktop() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9355;
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

    await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
    await send("Page.navigate", { url: "http://localhost:3000/" });

    for (let i = 0; i < 20; i++) {
      const chk = await send("Runtime.evaluate", {
        expression: `!!document.getElementById("sequence")`
      });
      if (chk?.result?.value) break;
      await new Promise(r => setTimeout(r, 500));
    }
    await new Promise(r => setTimeout(r, 1000));

    const evalRes = await send("Runtime.evaluate", {
      expression: `(() => {
        const seq = document.getElementById("sequence");
        const sticky = seq ? seq.querySelector(".sticky-wrap, div:first-child") : null;
        const dots = document.querySelector(".hero-stage-indicator");
        const canvas = document.getElementById("hero-canvas");
        const wwdImgWrap = document.querySelector(".what-we-do-image-wrap");
        const about = document.getElementById("about");

        function r(el) {
          if (!el) return null;
          const s = window.getComputedStyle(el);
          const b = el.getBoundingClientRect();
          return {
            height: Math.round(b.height),
            display: s.display,
            position: s.position,
            sticky: s.position === "sticky" || s.position === "-webkit-sticky"
          };
        }

        return {
          sequenceHeight: seq?.style?.height || window.getComputedStyle(seq).height,
          stickyWrap: r(sticky),
          dots: r(dots),
          canvas: r(canvas),
          wwdImgWrap: r(wwdImgWrap),
          aboutMarginTop: window.getComputedStyle(about).marginTop
        };
      })()`,
      returnByValue: true
    });

    console.log("=== DESKTOP METRICS (1280px) ===");
    console.log(JSON.stringify(evalRes.result.value, null, 2));

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

testDesktop();
