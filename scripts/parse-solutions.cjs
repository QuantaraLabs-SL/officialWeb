const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/node_48_30102.json', 'utf8'));

function findNodeById(curr, targetId) {
  if (curr.id === targetId) return curr;
  if (curr.children) {
    for (const c of curr.children) {
      const res = findNodeById(c, targetId);
      if (res) return res;
    }
  }
  return null;
}

const root = data.nodes['48:30102'].document;
const section = findNodeById(root, '48:30291');
fs.writeFileSync('scripts/solutions_section.json', JSON.stringify(section, null, 2));

function summarize(n, depth = 0) {
  const pad = '  '.repeat(depth);
  let line = `${pad}- [${n.type}] "${n.name}" (${n.id})`;
  if (n.characters) {
    line += ` => TEXT: "${n.characters.replace(/\n/g, ' ')}"`;
  }
  if (n.style) {
    line += ` | ${n.style.fontFamily} ${n.style.fontWeight} ${n.style.fontSize}px`;
  }
  if (n.fills && n.fills.length) {
    const f = n.fills[0];
    if (f.type === 'SOLID') {
      line += ` | fill: rgb(${Math.round(f.color.r*255)}, ${Math.round(f.color.g*255)}, ${Math.round(f.color.b*255)})`;
    } else if (f.type) {
      line += ` | fillType: ${f.type}`;
    }
  }
  console.log(line);
  if (n.children) {
    n.children.forEach(c => summarize(c, depth + 1));
  }
}

console.log('=== SUMMARY OF SOLUTIONS SECTION 48:30291 ===');
summarize(section);
