const fs = require('fs');
const sec = JSON.parse(fs.readFileSync('scripts/s_how_we_work.json', 'utf8'));

function dumpNodes(n, indent = 0) {
  const pad = '  '.repeat(indent);
  let line = `${pad}- [${n.type}] "${n.name}"`;
  if (n.characters) line += ` => TEXT: "${n.characters.replace(/\n/g, ' ')}" (${n.style?.fontSize}px ${n.style?.fontWeight})`;
  if (n.fills && n.fills[0]?.color) {
    const c = n.fills[0].color;
    line += ` fill: rgb(${Math.round(c.r*255)}, ${Math.round(c.g*255)}, ${Math.round(c.b*255)})`;
  }
  console.log(line);
  if (n.children) n.children.forEach(c => dumpNodes(c, indent + 1));
}

console.log('Fills:', sec.fills);
console.log('Padding:', sec.paddingTop, sec.paddingBottom);
dumpNodes(sec);
