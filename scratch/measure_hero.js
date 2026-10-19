const { spawn } = require('child_process');
const http = require('http');

async function measure() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9333;
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=' + require('os').tmpdir() + '\\chrome-measure-' + Date.now(),
    'about:blank'
  ]);

  // wait for port
  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetsRes = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found');

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

    const viewports = [390, 768, 1024, 1280, 1440, 1920, 2560];
    const results = {};

    for (const w of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: w,
        height: 900,
        deviceScaleFactor: 1,
        mobile: w <= 768
      });

      await send('Page.navigate', { url: 'http://localhost:3000/' });
      await new Promise(r => setTimeout(r, 2000));

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const heroScreen = document.querySelector('.hero-screen') || document.getElementById('hero-screen');
          const heroMainRow = document.querySelector('.hero-main-row');
          const glassCard = document.querySelector('.hero-glass-card');
          const showcaseCard = document.querySelector('.hero-showcase-card');
          const statsStrip = document.querySelector('.hero-stats-strip');
          const statItems = document.querySelectorAll('.stat-strip-item');
          const firstStat = statItems.length > 0 ? statItems[0] : null;
          const lastStat = statItems.length > 0 ? statItems[statItems.length - 1] : null;
          const stageDots = document.querySelector('.hero-stage-indicator');

          function box(el) {
            if (!el) return null;
            const r = el.getBoundingClientRect();
            const cs = window.getComputedStyle(el);
            return {
              left: Math.round(r.left * 10) / 10,
              right: Math.round(r.right * 10) / 10,
              width: Math.round(r.width * 10) / 10,
              maxWidth: cs.maxWidth,
              paddingLeft: cs.paddingLeft,
              paddingRight: cs.paddingRight,
              marginLeft: cs.marginLeft,
              marginRight: cs.marginRight,
            };
          }

          return {
            windowWidth: window.innerWidth,
            heroScreen: box(heroScreen),
            heroMainRow: box(heroMainRow),
            glassCard: box(glassCard),
            showcaseCard: box(showcaseCard),
            statsStrip: box(statsStrip),
            firstStat: box(firstStat),
            lastStat: box(lastStat),
            stageDots: box(stageDots),
          };
        })()`,
        returnByValue: true
      });

      results[w] = evalRes.result ? evalRes.result.value : null;
    }

    console.log(JSON.stringify(results, null, 2));
    ws.close();
  } finally {
    chrome.kill();
  }
}

measure().catch(console.error);
