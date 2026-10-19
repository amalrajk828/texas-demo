const res = await fetch('http://localhost:3000/service/flow-computer-configuration/');
const html = await res.text();
console.log('Includes Flow Computer?', html.includes('Flow Computer'));
console.log('Includes flow-computer?', html.includes('flow-computer'));
console.log('Includes Configuration?', html.includes('Configuration'));
console.log('Includes {stat.label}?', html.includes('{stat.label}'));
console.log('Includes {" "}?', html.includes('{" "}'));
const h1Idx = html.indexOf('<h1');
if (h1Idx !== -1) {
  console.log('H1 snippet:', html.slice(h1Idx, h1Idx + 300));
} else {
  console.log('No <h1 found');
}
const subIdx = html.indexOf('{stat.label}');
if (subIdx !== -1) {
  console.log('{stat.label} snippet:', html.slice(Math.max(0, subIdx - 100), subIdx + 100));
}
