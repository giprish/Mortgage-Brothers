import fs from 'fs';
import path from 'path';

const APP_DIR = 'app';
const SKIP_DIRS = new Set(['component', '.next', 'node_modules']);

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.') || SKIP_DIRS.has(entry.name)) continue;

    const pagePath = path.join(dir, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      walkDir(path.join(dir, entry.name));
      continue;
    }

    const t = fs.readFileSync(pagePath, 'utf8');
    if (t.includes('What do lenders look for')) {
      console.log('FOUND IN:', entry.name, pagePath);
    }
  }
}

walkDir(APP_DIR);
