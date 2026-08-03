import fs from 'fs';
import path from 'path';

const APP_DIR = 'app';
const SKIP_DIRS = new Set(['component', '.next', 'node_modules', 'service-areas', 'resources']);

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.') || SKIP_DIRS.has(entry.name)) continue;

    const pagePath = path.join(dir, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      walkDir(path.join(dir, entry.name));
      continue;
    }

    const t = fs.readFileSync(pagePath, 'utf8');
    if (t.includes('FaqAccordion')) continue;
    if (t.includes('openFaq') || t.includes('setOpenFaq')) continue;

    // Count static FAQ items by different h3 patterns
    const pattern1 = (t.match(/className="text-\[#052316\] text-\[18px\] font-bold mb-2"/g) || []).length;
    const pattern2 = (t.match(/className="text-\[#052316\] text-\[20px\] font-bold mb-2"/g) || []).length;
    const pattern3 = (t.match(/className="text-\[#052316\] text-\[16px\] font-bold mb-2"/g) || []).length;
    const otherMb2 = (t.match(/font-bold mb-2"/g) || []).length;

    const hasFaqSection = t.includes('Frequently Asked') || t.includes('id="faqs"') || t.includes('id="faq');
    
    if ((pattern1 + pattern2 + pattern3 + otherMb2 > 0) && hasFaqSection) {
      console.log(`STILL NEEDS (${entry.name}): p1=${pattern1} p2=${pattern2} p3=${pattern3} other=${otherMb2}`);
      // Show the h3 line pattern
      const lines = t.split('\n');
      lines.forEach((l, i) => {
        if (l.includes('font-bold mb-2') && l.includes('<h3')) {
          console.log('  Line', i+1, ':', l.trim());
        }
      });
    }
  }
}

walkDir(APP_DIR);
console.log('Done scanning');
