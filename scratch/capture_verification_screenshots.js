const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\amalr\\.gemini\\antigravity-ide\\brain\\4987dcde-89ce-4900-8303-1f452b6f4a07';

async function getWsUrl(port) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const data = await res.json();
      if (Array.isArray(data) && data[0] && data[0].webSocketDebuggerUrl) {
        return data[0].webSocketDebuggerUrl;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error('Could not connect to Chrome debugger page target');
}

async function capture(url, width, height, outputFile) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9444;
  const userDir = `C:\\Users\\amalr\\AppData\\Local\\Temp\\chrome_shot_${Date.now()}`;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDir}`,
    '--disable-gpu',
    '--no-sandbox',
    `--window-size=${width},${height}`
  ]);

  try {
    const wsUrl = await getWsUrl(port);
    const WebSocket = globalThis.WebSocket || require('ws');
    const ws = new WebSocket(wsUrl);

    let id = 1;
    const callbacks = new Map();
    ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        callbacks.get(data.id)(data);
        callbacks.delete(data.id);
      }
    });

    await new Promise(res => {
      if (ws.readyState === 1) res();
      else ws.addEventListener('open', res);
    });

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        callbacks.set(curId, resolve);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: width < 600,
    });

    console.log(`Navigating to ${url} at ${width}x${height}...`);
    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, 2500));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const imgData = shot.result ? shot.result.data : (shot.data || '');
    if (!imgData) {
      throw new Error('No image data in CDP response');
    }
    fs.writeFileSync(outputFile, Buffer.from(imgData, 'base64'));
    console.log(`Saved screenshot to ${outputFile}`);

    ws.close();
  } finally {
    try { chrome.kill(); } catch {}
  }
}

async function main() {
  const desktopOut = path.join(ARTIFACT_DIR, 'flow_computer_1440px.png');
  const mobileOut = path.join(ARTIFACT_DIR, 'flow_computer_375px.png');

  await capture('http://localhost:3000/service/flow-computer-configuration/', 1440, 900, desktopOut);
  await capture('http://localhost:3000/service/flow-computer-configuration/', 375, 812, mobileOut);
  console.log('All verification screenshots captured successfully!');
}

main().catch(err => {
  console.error('Screenshot error:', err);
  process.exit(1);
});
