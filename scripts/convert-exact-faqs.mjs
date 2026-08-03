import fs from 'fs';
import path from 'path';

function convertFaqSections() {
  const appDir = 'app';
  let convertedCount = 0;

  function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const f of files) {
      const full = path.join(dir, f.name);
      if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules' && f.name !== '.next') {
        walk(full);
      } else if (f.name === 'page.tsx') {
        let src = fs.readFileSync(full, 'utf8');

        // Regex matches <section ...> that contains a Heading with FAQ / Frequently Asked Questions
        const sectionRegex = /(<section[^>]*>(?:(?!<\/section>)[\s\S])*?<h[23][^>]*>(?:(?!<\/h[23]>)[\s\S])*?(?:Frequently Asked Questions|FAQs|FAQ)(?:(?!<\/h[23]>)[\s\S])*?<\/h[23]>[\s\S]*?<\/section>)/gi;

        let modified = false;

        src = src.replace(sectionRegex, (sectionMatch) => {
          const isAccordion = sectionMatch.includes('FaqAccordion') || sectionMatch.includes('openFaq') || sectionMatch.includes('onClick=');
          if (isAccordion) return sectionMatch;

          // Extract Section ID if present
          const idMatch = sectionMatch.match(/id="([^"]+)"/);
          const sectionId = idMatch ? idMatch[1] : 'faqs';

          // Extract Title from <h2 ...> or <h3 ...>
          const titleMatch = sectionMatch.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
          let title = 'Frequently Asked Questions';
          if (titleMatch) {
            title = titleMatch[1]
              .replace(/<[^>]+>/g, '')
              .replace(/&apos;/g, "'")
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"')
              .trim();
          }

          // Extract items from <div><h3 ...>Question</h3><p ...>Answer</p></div> or <div><h3 ...>Question</h3>...children...</div>
          const itemRegex = /<div>\s*<h[34][^>]*>([\s\S]*?)<\/h[34]>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>/gi;
          const items = [];
          let m;
          while ((m = itemRegex.exec(sectionMatch)) !== null) {
            const rawQ = m[1].replace(/<[^>]+>/g, '').replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').trim();
            // Remove leading question numbers like "1. ", "1: ", "Q1: ", etc.
            const cleanQ = rawQ.replace(/^(?:\d+[\.:]\s*|Q\d+:\s*)/i, '').trim();
            const rawA = m[2].trim();
            if (cleanQ) {
              items.push({ q: cleanQ, a: rawA });
            }
          }

          if (items.length === 0) {
            return sectionMatch; // don't convert if we couldn't parse Q&As
          }

          // Build FaqAccordion JSX
          const itemsJsx = items.map(item => {
            const safeQ = JSON.stringify(item.q);
            return `                    { q: ${safeQ}, a: <>${item.a}</> }`;
          }).join(',\n');

          const accordionJsx = `<section id="${sectionId}">
                  <FaqAccordion
                    title="${title.replace(/"/g, '\\"')}"
                    items={[
${itemsJsx}
                    ]}
                  />
                </section>`;

          modified = true;
          return accordionJsx;
        });

        if (modified) {
          // Ensure FaqAccordion is imported
          if (!src.includes('import FaqAccordion')) {
            // Find component relative path
            const relPath = path.relative(path.dirname(full), path.join(appDir, 'component', 'FaqAccordion')).replace(/\\/g, '/');
            const importPath = relPath.startsWith('.') ? relPath : './' + relPath;
            src = `import FaqAccordion from "${importPath}";\n` + src;
          }

          fs.writeFileSync(full, src, 'utf8');
          console.log(`✅ CONVERTED: ${full}`);
          convertedCount++;
        }
      }
    }
  }

  walk(appDir);
  console.log(`\n🎉 Total converted: ${convertedCount}`);
}

convertFaqSections();
