const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(walk(full));
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = walk('./app').concat(walk('./component')).concat(walk('./components'));
let totalChanged = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Direct replace of /about/#talk-to-broker and #talk-to-broker
  content = content.replace(/href="\/about\/#talk-to-broker"/g, 'href="tel:+16025352171"');
  content = content.replace(/href='#about\/#talk-to-broker'/g, "href='tel:+16025352171'");
  content = content.replace(/href="#talk-to-broker"/g, 'href="tel:+16025352171"');
  content = content.replace(/href='#talk-to-broker'/g, "href='tel:+16025352171'");

  // 2. Look for any Link or a tag around Talk to a Broker that might have another non-tel href
  // e.g. <Link href="/contact" ...>Talk to a Broker</Link>
  // Regex pattern for <Link or <a with href="..." containing 'Talk to a Broker'
  content = content.replace(/(<(?:Link|a)[^>]*href=")([^"]+)("[^>]*>\s*Talk to (?:a )?Broker\s*<\/(?:Link|a)>)/gi, (match, p1, p2, p3) => {
    if (p2.startsWith('tel:')) return match;
    return `${p1}tel:+16025352171${p3}`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalChanged++;
    console.log(`Updated: ${file.replace(/\\/g, '/')}`);
  }
});

console.log(`\nFinished! Updated ${totalChanged} files.`);
