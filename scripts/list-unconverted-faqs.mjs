import fs from 'fs';
import path from 'path';

function getUnconvertedFaqPages() {
  const appDir = 'app';
  const unconverted = [];

  function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const f of files) {
      const full = path.join(dir, f.name);
      if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules' && f.name !== '.next') {
        walk(full);
      } else if (f.name === 'page.tsx') {
        const src = fs.readFileSync(full, 'utf8');
        // Regex matches <section ...> that contains a Heading with FAQ / Frequently Asked Questions
        const regex = /(<section[^>]*>(?:(?!<\/section>)[\s\S])*?<h[23][^>]*>(?:(?!<\/h[23]>)[\s\S])*?(?:Frequently Asked Questions|FAQs|FAQ)(?:(?!<\/h[23]>)[\s\S])*?<\/h[23]>[\s\S]*?<\/section>)/gi;
        const matches = [...src.matchAll(regex)];

        if (matches.length > 0) {
          matches.forEach((m, idx) => {
            const sectionText = m[0];
            const isAccordion = sectionText.includes('FaqAccordion') || sectionText.includes('openFaq') || sectionText.includes('onClick=');
            if (!isAccordion) {
              unconverted.push({ file: full, sectionText });
            }
          });
        }
      }
    }
  }

  walk(appDir);
  console.log(`FOUND ${unconverted.length} unconverted FAQ sections:\n`);
  unconverted.forEach(item => console.log(' -', item.file));
  return unconverted;
}

getUnconvertedFaqPages();
