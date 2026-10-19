const { spawn } = require('child_process');

async function measureFrames() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9444;
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + require('os').tmpdir() + '\\chrome-frames-' + Date.now(),
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetsRes = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((res) => {
        const msgId = id++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            res(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Page.navigate', { url: 'http://localhost:3000/' });
    await new Promise(r => setTimeout(r, 1500));

    const evalRes = await send('Runtime.evaluate', {
      expression: `(async () => {
        const frames = [
          { name: "frame_001", url: "/hero-frames/frame_001.webp" },
          { name: "frame_150", url: "/hero-frames/frame_150.webp" },
          { name: "frame_300", url: "/hero-frames/frame_300.webp" },
          { name: "mobile_frame_001", url: "/hero-frames/mobile/frame_001.webp" },
          { name: "mobile_frame_150", url: "/hero-frames/mobile/frame_150.webp" },
          { name: "mobile_frame_300", url: "/hero-frames/mobile/frame_300.webp" }
        ];

        const bgR = 232, bgG = 232, bgB = 230;
        const results = {};

        for (const f of frames) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          await new Promise((res, rej) => {
            img.onload = res;
            img.onerror = rej;
            img.src = f.url;
          });

          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          const idata = ctx.getImageData(0, 0, img.width, img.height);
          const data = idata.data;
          const W = img.width;
          const H = img.height;

          let minX = W, maxX = 0, minY = H, maxY = 0;
          // Threshold for non-background: delta from bg color > 10 in any channel
          for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
              const idx = (y * W + x) * 4;
              const r = data[idx];
              const g = data[idx + 1];
              const b = data[idx + 2];
              const a = data[idx + 3];

              // check if significantly different from background #e8e8e6
              const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
              if (diff > 14 && a > 10) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
              }
            }
          }

          const meterW = maxX - minX + 1;
          const meterH = maxY - minY + 1;

          results[f.name] = {
            frameWidth: W,
            frameHeight: H,
            aspectRatio: (W / H).toFixed(3),
            minX, maxX, minY, maxY,
            meterWidth: meterW,
            meterHeight: meterH,
            // Fractions of frame
            fracLeft: (minX / W).toFixed(4),
            fracRight: ((W - maxX) / W).toFixed(4),
            fracTop: (minY / H).toFixed(4),
            fracBottom: ((H - maxY) / H).toFixed(4),
            fracWidth: (meterW / W).toFixed(4),
            fracHeight: (meterH / H).toFixed(4),
            // Background margins
            emptyLeftPx: minX,
            emptyRightPx: W - maxX,
            emptyTopPx: minY,
            emptyBottomPx: H - maxY
          };
        }

        return results;
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log(JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } finally {
    chrome.kill();
  }
}

measureFrames().catch(console.error);
