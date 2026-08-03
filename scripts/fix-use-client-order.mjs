import fs from 'fs';
import path from 'path';

function fixUseClientOrder(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules' && f.name !== '.next') {
      fixUseClientOrder(full);
    } else if (f.name.endsWith('.tsx') || f.name.endsWith('.ts')) {
      let content = fs.readFileSync(full, 'utf8');

      if (content.includes('"use client";')) {
        // Remove all occurrences of "use client";
        const cleaned = content.replace(/^"use client";\r?\n?/gm, '').trim();
        // Place "use client"; as line 1
        const fixed = `"use client";\n\n` + cleaned;

        if (fixed !== content) {
          fs.writeFileSync(full, fixed, 'utf8');
          console.log('Fixed use client order:', full);
        }
      }
    }
  }
}

fixUseClientOrder('app');
