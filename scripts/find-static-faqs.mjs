import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'component') continue;

    const pagePath = path.join(dir, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      walkDir(path.join(dir, entry.name));
      continue;
    }

    const t = fs.readFileSync(pagePath, 'utf8');
    if (!t.includes('FaqAccordion') && !t.includes('openFaq') && !t.includes('setOpenFaq')) {
      // Check for static FAQ pattern: h3 with mb-2 color near font-bold
      const hasStaticFaq = t.includes('mb-2">') && t.includes('<h3') && t.includes('font-bold') && 
        (t.includes('Frequently Asked') || t.includes('id="faqs"') || t.includes('id="faq"'));
      if (hasStaticFaq) {
        console.log('NEEDS:', entry.name);
      }
    }
  }
}
walkDir('app');
