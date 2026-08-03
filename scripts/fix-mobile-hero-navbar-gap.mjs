import fs from 'fs';
import path from 'path';

function fixSpacersInDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules' && f.name !== '.next') {
      fixSpacersInDir(full);
    } else if (f.name.endsWith('.tsx')) {
      let content = fs.readFileSync(full, 'utf8');
      let modified = false;

      // Replace h-[72px] spacer div with responsive h-[64px] sm:h-[72px] bg-[#08271B]
      if (content.includes('className="h-[72px] w-full shrink-0"')) {
        content = content.replace(
          /className="h-\[72px\] w-full shrink-0"/g,
          'className="h-[64px] sm:h-[72px] bg-[#08271B] w-full shrink-0"'
        );
        modified = true;
      }

      // Replace standalone h-[72px] aria-hidden spacer divs
      if (content.includes('className="h-[72px]"')) {
        content = content.replace(
          /className="h-\[72px\]"/g,
          'className="h-[64px] sm:h-[72px] bg-[#08271B]"'
        );
        modified = true;
      }

      // Replace pt-[72px] in <main> elements
      if (content.includes('pt-[72px]')) {
        content = content.replace(/pt-\[72px\]/g, 'pt-[64px] sm:pt-[72px]');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(full, content, 'utf8');
        console.log(`✅ Fixed spacer in: ${full}`);
      }
    }
  }
}

fixSpacersInDir('app');
