/**
 * fetch_and_parse.js
 * Parent-agent utility: reads a list of cached HTML files (from read_url_content) 
 * and writes clean text to extracted_content/ folder.
 * 
 * Usage: node fetch_and_parse.js <slug> <path_to_content.md>
 */
const fs = require('fs');
const path = require('path');

const slug = process.argv[2];
const inputPath = process.argv[3];
const OUTPUT_DIR = path.join(__dirname, 'extracted_content');

if (!slug || !inputPath) {
  console.error('Usage: node fetch_and_parse.js <slug> <content.md path>');
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const data = fs.readFileSync(inputPath, 'utf8');
let clean = data
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<!--[\s\S]*?-->/g, '');

const decode = (s) => s
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&apos;/g, "'")
  .replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
  .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
  .replace(/&#8211;/g, '-').replace(/&#8212;/g, '--')
  .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

const results = [];
const seen = new Set();
const extract = (tag, prefix) => {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  let m;
  while ((m = re.exec(clean)) !== null) {
    const text = decode(m[1]);
    if (text.length > 3) {
      const key = prefix + ':' + text.slice(0, 100);
      if (!seen.has(key)) { seen.add(key); results.push(`[${prefix}] ${text}`); }
    }
  }
};
['h1','h2','h3','h4','h5','p','li','blockquote'].forEach((t, i) =>
  extract(t, ['H1','H2','H3','H4','H5','P','LI','QUOTE'][i]));

const filtered = results.filter(r => {
  const t = r.slice(r.indexOf('] ') + 2);
  return t.length >= 5 && !/^(skip to|copyright|all rights reserved)/i.test(t);
});

const outFile = path.join(OUTPUT_DIR, `${slug}.txt`);
fs.writeFileSync(outFile, filtered.join('\n'), 'utf8');
console.log(`OK: ${slug} — ${filtered.length} lines → ${outFile}`);
