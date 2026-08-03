import fs from 'fs';
import path from 'path';

function findFaqSections(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== '.next') {
      findFaqSections(fullPath);
    } else if (entry.name.endsWith('.tsx')) {
      const src = fs.readFileSync(fullPath, 'utf8');
      const lines = src.split('\n');
      
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes('frequently asked question') || line.toLowerCase().includes('faq')) {
          // Print surrounding context
          if (line.includes('<h2') || line.includes('<h3') || line.includes('id=') || line.includes('FAQ')) {
            console.log(`\n${fullPath}:${index + 1}`);
            lines.slice(Math.max(0, index - 2), index + 12).forEach((l, i) => {
              console.log(`  ${Math.max(0, index - 2) + i + 1}: ${l}`);
            });
          }
        }
      });
    }
  }
}

findFaqSections('app');
