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

    // Look for any FAQ section: heading + list of q/a items that are static
    const hasFaqHeading = t.includes('Frequently Asked') || t.includes('"faqs"') || t.includes('"faq"');
    const hasStaticItems = t.includes('font-bold') && (t.includes('<p>') || t.includes('<h3')) && hasFaqHeading;

    if (hasStaticItems) {
      // Show the FAQ section
      const lines = t.split('\n');
      let faqHeadingLine = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Frequently Asked') || (lines[i].includes('"faqs"') && lines[i].includes('section'))) {
          faqHeadingLine = i;
          break;
        }
      }
      if (faqHeadingLine !== -1) {
        console.log('\n=== PAGE:', entry.name, '(line', faqHeadingLine+1, ')===');
        lines.slice(faqHeadingLine, faqHeadingLine + 15).forEach((l, i) => console.log(faqHeadingLine+i+1, l));
      }
    }
  }
}

walkDir(APP_DIR);
console.log('\nDone');
