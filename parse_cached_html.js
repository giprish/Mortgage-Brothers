/**
 * parse_cached_html.js
 * Usage: node parse_cached_html.js <path_to_content.md>
 * Extracts clean text (headings, paragraphs, lists) from raw HTML cached by read_url_content
 */
const fs = require('fs');
const path = process.argv[2];
if (!path) { console.error('Usage: node parse_cached_html.js <content.md path>'); process.exit(1); }

const data = fs.readFileSync(path, 'utf8');

// Strip scripts and styles
let clean = data
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<!--[\s\S]*?-->/g, '');

const decode = (s) => s
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&apos;/g, "'")
  .replace(/&#8217;/g, '\u2019')
  .replace(/&#8216;/g, '\u2018')
  .replace(/&#8220;/g, '\u201C')
  .replace(/&#8221;/g, '\u201D')
  .replace(/&#8211;/g, '\u2013')
  .replace(/&#8212;/g, '\u2014')
  .replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

const results = [];
const seen = new Set();

const extract = (tag, prefix) => {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  let m;
  while ((m = re.exec(clean)) !== null) {
    const text = decode(m[1]);
    if (text.length > 3) {
      const key = prefix + ':' + text.slice(0, 100);
      if (!seen.has(key)) {
        seen.add(key);
        results.push(`[${prefix}] ${text}`);
      }
    }
  }
};

extract('h1', 'H1');
extract('h2', 'H2');
extract('h3', 'H3');
extract('h4', 'H4');
extract('h5', 'H5');
extract('p', 'P');
extract('li', 'LI');
extract('blockquote', 'QUOTE');

// Filter out nav/footer garbage (short or common boilerplate)
const filtered = results.filter(r => {
  const text = r.slice(r.indexOf('] ') + 2);
  if (text.length < 5) return false;
  if (/^(home|about|contact|blog|menu|skip to|copyright|all rights|privacy|terms|cookie|sitemap)/i.test(text)) return false;
  return true;
});

console.log(filtered.join('\n'));
