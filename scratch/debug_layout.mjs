import { spawn } from 'child_process';
import os from 'os';

async function run() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9335;
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
    await new Promise(r => setTimeout(r, 2000));

    const scrollSteps = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000];
    const scrollResults = [];
    for (const sy of scrollSteps) {
      await send("Runtime.evaluate", { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 200));
      const stepRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const hs = document.getElementById("hero-screen");
          const wwd = document.getElementById("what-we-do-screen");
          const cs = document.getElementById("card-c");
          const custodyScreen = document.getElementById("custody-screen");
          const ab = document.getElementById("about");
          const ov = document.querySelector(".overlay");
          function s(el) {
            if (!el) return null;
            const cs = window.getComputedStyle(el);
            const r = el.getBoundingClientRect();
            return { top: Math.round(r.top), bottom: Math.round(r.bottom), height: Math.round(r.height), opacity: cs.opacity, visibility: cs.visibility };
          }
          return {
            scrollY: window.scrollY,
            overlay: s(ov),
            heroScreen: s(hs),
            whatWeDoScreen: s(wwd),
            cardC: s(cs),
            custodyScreen: s(custodyScreen),
            about: s(ab)
          };
        })()`,
        returnByValue: true
      });
      scrollResults.push(stepRes.result.value);
    }
    console.log(JSON.stringify(scrollResults, null, 2));
    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
  }
}

run();
