import fs from 'fs';
import path from 'path';

function findStaticFaqs(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules' && item.name !== '.next') {
      findStaticFaqs(fullPath);
    } else if (item.name.endsWith('.tsx') || item.name.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      if (content.toLowerCase().includes('frequently asked questions') || content.includes('id="faqs"') || content.includes('id="frequently-asked-questions"')) {
        const lines = content.split('\n');
        let inFaq = false;
        let faqQuestions = [];

        lines.forEach((line, idx) => {
          if (line.toLowerCase().includes('frequently asked questions') || line.includes('id="faqs"') || line.includes('id="frequently-asked-questions"')) {
            inFaq = true;
          }
          if (inFaq) {
            if (line.includes('</section>') || line.includes('</article>')) {
              // check if we exit section
            }
            if (line.includes('<h3') || (line.includes('font-bold') && line.includes('mb-2'))) {
              faqQuestions.push({ line: idx + 1, text: line.trim() });
            }
          }
        });

        if (faqQuestions.length > 0) {
          // Check if there are static H3s in the FAQ block that are NOT wrapped in FaqAccordion or state
          console.log('\n--- FILE:', fullPath);
          faqQuestions.slice(0, 10).forEach(q => console.log(`   Line ${q.line}: ${q.text}`));
        }
      }
    }
  }
}

findStaticFaqs('app');
