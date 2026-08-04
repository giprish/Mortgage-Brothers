const https = require('https');
const url = process.argv[2];
if (!url) { console.error('Usage: node extract_text.js <URL>'); process.exit(1); }

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Strip scripts and styles
    let clean = data
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '');

    // Extract meaningful elements
    const results = [];

    const extract = (tag, prefix) => {
      const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
      let m;
      while ((m = re.exec(clean)) !== null) {
        const text = m[1]
          .replace(/<[^>]+>/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&apos;/g, "'")
          .replace(/&#8217;/g, "'")
          .replace(/&#8220;/g, '"')
          .replace(/&#8221;/g, '"')
          .replace(/&#8211;/g, '-')
          .replace(/&#8212;/g, '--')
          .replace(/&nbsp;/g, ' ')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/\s+/g, ' ')
          .trim();
        if (text.length > 3) results.push(`[${prefix}] ${text}`);
      }
    };

    extract('h1', 'H1');
    extract('h2', 'H2');
    extract('h3', 'H3');
    extract('h4', 'H4');
    extract('h5', 'H5');
    extract('p', 'P');
    extract('li', 'LI');
    extract('th', 'TH');
    extract('td', 'TD');
    extract('blockquote', 'QUOTE');

    // Deduplicate
    const seen = new Set();
    const unique = results.filter(r => {
      const key = r.slice(0, 80);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    console.log(unique.join('\n'));
  });
}).on('error', e => { console.error('Error:', e.message); process.exit(1); });
