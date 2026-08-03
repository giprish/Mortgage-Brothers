import fs from 'fs';
import path from 'path';

function findExactFaqSections() {
  const appDir = 'app';
  const pages = [];

  function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const f of files) {
      const full = path.join(dir, f.name);
      if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules' && f.name !== '.next') {
        walk(full);
      } else if (f.name === 'page.tsx') {
        const src = fs.readFileSync(full, 'utf8');
        // Check if file contains a heading like "Frequently Asked Questions" or "FAQs" or section id="faqs" or id="frequently-asked-questions"
        const regex = /(<section[^>]*>(?:(?!<\/section>)[\s\S])*?<h[23][^>]*>(?:(?!<\/h[23]>)[\s\S])*?(?:Frequently Asked Questions|FAQs|FAQ)(?:(?!<\/h[23]>)[\s\S])*?<\/h[23]>[\s\S]*?<\/section>)/gi;
        const matches = [...src.matchAll(regex)];

        if (matches.length > 0) {
          matches.forEach((m, idx) => {
            // Check if section contains static <h3> questions or static items not already using FaqAccordion or state
            const sectionText = m[0];
            const isAccordion = sectionText.includes('FaqAccordion') || sectionText.includes('openFaq') || sectionText.includes('onClick=');
            console.log(`\nPAGE: ${full} [Section ${idx+1}] (isAccordion: ${isAccordion})`);
            const lines = sectionText.split('\n');
            lines.slice(0, 15).forEach(l => console.log('  ', l));
            if (lines.length > 15) console.log('  ... (total lines:', lines.length, ')');
          });
        }
      }
    }
  }

  walk(appDir);
}

findExactFaqSections();
