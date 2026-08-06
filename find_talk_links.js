const fs = require('fs');
const path = require('path');

function findTalkToBrokerToFix(dir) {
  if (!fs.existsSync(dir)) return [];
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(findTalkToBrokerToFix(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (/talk-to-broker/i.test(line) || /talk to (a )?broker/i.test(line)) {
          let start = Math.max(0, idx - 4);
          let end = Math.min(lines.length - 1, idx + 4);
          let sub = lines.slice(start, end + 1).join('\n');
          if (sub.includes('href=') && !sub.includes('href="tel:') && !sub.includes("href='tel:")) {
            results.push({
              file: full.replace(/\\/g, '/'),
              line: idx + 1,
              matched: line.trim(),
              snippet: sub
            });
          }
        }
      });
    }
  }
  return results;
}

const list = findTalkToBrokerToFix('./app');
console.log(`Found ${list.length} places needing fix:`);
console.log(JSON.stringify(list, null, 2));
