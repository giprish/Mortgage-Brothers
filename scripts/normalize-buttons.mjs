#!/usr/bin/env node
/**
 * Normalizes inline green CTA button classes to btn-primary across app/.
 */
import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "app");

const REPLACEMENTS = [
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-7 py-3 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-8 py-3\.5 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center justify-center gap-2 w-full bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14px\] font-semibold px-4 py-3 rounded-full transition-all/g,
    "btn-primary w-full",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-7 py-3\.5 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[16px] font-bold px-7 py-3\.5 rounded-md transition-all shadow-md/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#359854\] text-white font-bold text-\[16px\] px-8 py-4 rounded-full transition-all shadow-md inline-block/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#359854\] text-white font-bold text-\[16px\] px-8 py-4 rounded-full transition-all shadow-lg/g,
    "btn-primary",
  ],
  [
    /inline-block bg-\[#3fb364\] hover:bg-\[#2d9e4f\] text-white font-bold text-\[15px\] px-8 py-3\.5 rounded-xl transition-colors/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14\.5px\] font-bold px-6 py-3 rounded-xl transition-all duration-200 w-fit cursor-pointer shadow-md hover:shadow-lg shadow-\[#3fb364\]\/10/g,
    "btn-primary w-fit",
  ],
  [
    /w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-\[#2f8f4f\] hover:bg-\[#277a42\] text-white text-base font-semibold px-8 py-3\.5 rounded-full transition-all duration-200 shadow-lg shadow-\[#3fb364\]\/30 hover:scale-\[1\.02\]/g,
    "btn-primary w-full sm:w-auto",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[12\.5px\] xl:text-\[13px\] font-semibold px-3\.5 xl:px-4\.5 py-2 rounded-full transition-all duration-200 hover:shadow-lg shrink-0/g,
    "btn-primary-sm shrink-0",
  ],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.tsx$/.test(entry.name)) files.push(full);
  }
  return files;
}

let changedFiles = 0;
let totalReplacements = 0;

for (const file of walk(APP_DIR)) {
  let content = fs.readFileSync(file, "utf8");
  let fileChanged = false;

  for (const [pattern, replacement] of REPLACEMENTS) {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, replacement);
      totalReplacements += matches.length;
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(file, content, "utf8");
    changedFiles++;
    console.log("updated:", path.relative(process.cwd(), file));
  }
}

console.log(`\nDone: ${totalReplacements} replacements in ${changedFiles} files`);
