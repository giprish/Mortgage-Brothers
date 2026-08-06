#!/usr/bin/env node
/**
 * Removes "use client" from page.tsx files that don't need client boundaries.
 * Skips files using React hooks or inline event handlers.
 */
import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "app");

const CLIENT_ONLY =
  /\b(useState|useEffect|useRef|useMemo|useCallback|useReducer|useContext|usePathname|useRouter|useSearchParams|useParams)\b/;

const INLINE_HANDLERS = /\bon(Click|Change|Submit|Input|KeyDown|KeyUp|Focus|Blur)=/;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === "page.tsx") files.push(full);
  }
  return files;
}

let stripped = 0;
let skipped = 0;

for (const file of walk(APP_DIR)) {
  let content = fs.readFileSync(file, "utf8");
  if (!content.startsWith('"use client"') && !content.startsWith("'use client'")) continue;

  if (CLIENT_ONLY.test(content) || INLINE_HANDLERS.test(content)) {
    skipped++;
    continue;
  }

  content = content.replace(/^["']use client["'];\s*\r?\n/, "");
  fs.writeFileSync(file, content, "utf8");
  stripped++;
  console.log("stripped:", path.relative(process.cwd(), file));
}

console.log(`\nDone: stripped ${stripped}, skipped ${skipped}`);
