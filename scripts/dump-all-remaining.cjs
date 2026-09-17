const fs = require('fs');

function dumpBrief(filename, label) {
  console.log('====================================');
  console.log(label);
  const sec = JSON.parse(fs.readFileSync(filename, 'utf8'));
  function scan(n, depth = 0) {
    if (n.characters) {
      const t = n.characters.replace(/\n/g, ' ').trim();
      if (t) console.log('  '.repeat(depth) + `[${n.style?.fontSize}px ${n.style?.fontWeight}] ${n.name} => ${t}`);
    }
    if (n.children) n.children.forEach(c => scan(c, depth + 1));
  }
  scan(sec);
}

dumpBrief('scripts/s_case_studies.json', 'CASE STUDIES');
dumpBrief('scripts/s_journey.json', 'JOURNEY');
dumpBrief('scripts/s_synergy.json', 'SYNERGY');
dumpBrief('scripts/s_faq.json', 'FAQ');
