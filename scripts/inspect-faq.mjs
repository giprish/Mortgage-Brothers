import fs from 'fs';

const t = fs.readFileSync('app/arizona-mortgage-approval-process/page.tsx', 'utf8');
const lines = t.split('\n');
// Find the h3 mb-2 pattern for FAQ items
const idxs = [];
lines.forEach((l, i) => {
  if (l.includes('mb-2') && (l.includes('h3') || l.includes('font-bold'))) idxs.push(i+1);
});
console.log('Lines with mb-2 + h3 or font-bold:', idxs.slice(0, 10));

// Now find the exact FAQ section
const idx = lines.findIndex(l => l.includes('id="faq'));
console.log('id="faq line:', idx+1);
lines.slice(Math.max(0,idx-2), idx+80).forEach((l,i) => console.log(Math.max(0,idx-2)+i+1, l));
