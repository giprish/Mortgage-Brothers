/**
 * parse_from_cache.js
 * Reads a cached HTML file (from read_url_content) and outputs clean text to a target .txt file.
 * Usage: node parse_from_cache.js <input_content.md> <output_slug.txt>
 */
const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error('Usage: node parse_from_cache.js <input.md> <output.txt>');
  process.exit(1);
}

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

fs.writeFileSync(outputPath, filtered.join('\n'), 'utf8');
console.log(`Wrote ${filtered.length} lines to ${outputPath}`);
