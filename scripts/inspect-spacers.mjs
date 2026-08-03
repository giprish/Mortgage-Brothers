import fs from 'fs';
import path from 'path';

function inspectAllSpacers(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules' && f.name !== '.next') {
      inspectAllSpacers(full);
    } else if (f.name.endsWith('.tsx')) {
      const src = fs.readFileSync(full, 'utf8');
      if (src.includes('<Navbar')) {
        const lines = src.split('\n');
        lines.forEach((line, idx) => {
          if (
            line.includes('h-[72px]') ||
            line.includes('h-16') ||
            line.includes('h-20') ||
            line.includes('pt-[72px]') ||
            line.includes('pt-16') ||
            line.includes('pt-20') ||
            (line.includes('aria-hidden') && line.includes('shrink-0'))
          ) {
            console.log(`${full}:${idx + 1}: ${line.trim()}`);
          }
        });
      }
    }
  }
}

inspectAllSpacers('app');
