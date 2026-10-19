const { spawn } = require('child_process');
const http = require('http');

async function getWsUrl(port) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      const data = await res.json();
      if (data.webSocketDebuggerUrl) return data.webSocketDebuggerUrl;
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error('Could not connect to Chrome debugger');
}

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9333;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1400,1000'
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
    await send('Runtime.enable');
    await send('DOM.enable');

    console.log('Navigating to http://localhost:3000/service/flow-measurement-solutions/ ...');
    const loadPromise = new Promise(resolve => {
      const listener = (event) => {
        const data = JSON.parse(event.data);
        if (data.method === 'Page.loadEventFired') {
          ws.removeEventListener('message', listener);
          resolve();
        }
      };
      ws.addEventListener('message', listener);
    });

    await send('Page.navigate', { url: 'http://localhost:3000/service/flow-measurement-solutions/' });
    await loadPromise;
    console.log('Page load event fired!');

    // Small delay for DOM to settle
    await new Promise(r => setTimeout(r, 1500));

    // Poll until folder cards exist
    let cardsFound = false;
    for (let attempt = 0; attempt < 15; attempt++) {
      const countRes = await send('Runtime.evaluate', {
        expression: `document.querySelectorAll('.folder-card-root').length`,
        returnByValue: true
      });
      const count = countRes?.result?.result ? countRes.result.result.value : countRes?.result?.value;
      console.log(`Attempt ${attempt + 1}: count = ${count}`);
      if (count && count > 0) {
        cardsFound = true;
        break;
      }
      await new Promise(r => setTimeout(r, 1000));
    }

    if (!cardsFound) {
      console.error('Timed out waiting for folder cards to appear');
      return;
    }

    // Scroll to folder cards
    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const cards = document.querySelectorAll('.folder-card-root');
          if (cards.length > 0) {
            cards[0].scrollIntoView({ block: 'center' });
            return Array.from(cards).map(c => {
              const r = c.getBoundingClientRect();
              return { open: c.getAttribute('data-open'), left: r.left, top: r.top, width: r.width, height: r.height };
            });
          }
          return null;
        })()
      `,
      returnByValue: true
    });

    function getVal(res) {
      return res?.result?.result ? res.result.result.value : res?.result?.value;
    }

    const evalResult = getVal(evalRes);
    console.log('Folder cards found count:', evalResult ? evalResult.length : 0);

    const cardsInfo = evalResult;
    if (!cardsInfo || cardsInfo.length === 0) {
      console.error('No folder cards found!');
      return;
    }

    // Step 1: Initial state check
    console.log('--- TEST 1: Initial State Check ---');
    console.log('Initial open states:', cardsInfo.map(c => c.open));

    // Step 2: Hover Card 1
    console.log('--- TEST 2: Hover Card 1 ---');
    const c1 = cardsInfo[0];
    const hoverX = Math.round(c1.left + c1.width / 2);
    const hoverY = Math.round(c1.top + c1.height / 2);

    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: hoverX,
      y: hoverY
    });
    await new Promise(r => setTimeout(r, 600));

    const checkHover = await send('Runtime.evaluate', {
      expression: `
        Array.from(document.querySelectorAll('.folder-card-root')).map(c => c.getAttribute('data-open'))
      `,
      returnByValue: true
    });
    console.log('Open states while hovered:', getVal(checkHover));

    // Screenshot open state
    const openScreenshot = await send('Page.captureScreenshot', { format: 'png' });
    const fs = require('fs');
    fs.writeFileSync('scratch/card_open.png', Buffer.from(openScreenshot.result.data, 'base64'));

    // Step 3: Hover Out to the side
    console.log('--- TEST 3: Hover Out (to x: 10, y: 10) ---');
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: 10,
      y: 10
    });
    await new Promise(r => setTimeout(r, 600));

    const checkLeave = await send('Runtime.evaluate', {
      expression: `
        Array.from(document.querySelectorAll('.folder-card-root')).map(c => c.getAttribute('data-open'))
      `,
      returnByValue: true
    });
    console.log('Open states after hover out:', getVal(checkLeave));

    // Screenshot closed state after leave
    const closedScreenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/card_closed_after_hover.png', Buffer.from(closedScreenshot.result.data, 'base64'));

    // Step 4: Rapid sweeps across card 1 -> card 2 -> card 3
    console.log('--- TEST 4: Sweep across cards ---');
    const c2 = cardsInfo[1];
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: Math.round(c2.left + c2.width / 2),
      y: Math.round(c2.top + c2.height / 2)
    });
    await new Promise(r => setTimeout(r, 500));
    const checkSweep = await send('Runtime.evaluate', {
      expression: `
        Array.from(document.querySelectorAll('.folder-card-root')).map(c => c.getAttribute('data-open'))
      `,
      returnByValue: true
    });
    console.log('Open states when sweeping to Card 2 (Card 1 should close, Card 2 open):', getVal(checkSweep));

    // Move out again
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: 10,
      y: 10
    });
    await new Promise(r => setTimeout(r, 500));
    const checkFinalLeave = await send('Runtime.evaluate', {
      expression: `
        Array.from(document.querySelectorAll('.folder-card-root')).map(c => c.getAttribute('data-open'))
      `,
      returnByValue: true
    });
    console.log('Open states after final leave:', getVal(checkFinalLeave));

    ws.close();
    console.log('All automated tests executed successfully.');
  } finally {
    chrome.kill();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
