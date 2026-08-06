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
  [
    /inline-flex items-center gap-2\.5 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[16px\] font-semibold px-8 py-3\.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0\.5/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-3 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[16px\] lg:text-\[17px\] font-semibold px-8 py-3\.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0\.5/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-8 py-3\.5 rounded-full transition-all duration-200 inline-block shadow-lg hover:shadow-xl/g,
    "btn-primary",
  ],
  [
    /inline-block bg-\[#3fb364\] hover:bg-\[#349b55\] text-white font-bold px-8 py-3\.5 rounded-full transition-colors text-\[15px\]/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2\.5 bg-\[#3fb364\] hover:bg-\[#34a358\] text-white text-\[15px\] font-semibold px-7 py-3\.5 rounded-full shadow-lg shadow-\[#3fb364\]\/20 hover:shadow-xl hover:shadow-\[#3fb364\]\/30 transition-all duration-300 group/g,
    "btn-primary group",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14px\] font-semibold px-6 py-3 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center justify-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-7 py-3 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /inline-block bg-\[#3fb364\] hover:bg-\[#359854\] text-white font-bold px-8 py-4 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#359854\] text-white font-bold text-\[15px\] px-8 py-3\.5 rounded-full transition-all shadow-md/g,
    "btn-primary",
  ],
  [
    /w-full bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-7 py-3\.5 rounded-full transition-all/g,
    "btn-primary w-full",
  ],
  [
    /inline-block bg-\[#3fb364\] hover:bg-\[#349b55\] text-white font-semibold text-\[15px\] px-8 py-3\.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-semibold px-8 py-3\.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center justify-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14\.5px\] font-semibold px-6 py-3\.5 rounded-full transition-all duration-200/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#359854\] text-white text-\[16px\] font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0\.5/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#359854\] text-white text-\[16px\] font-bold px-8 py-4 rounded-full transition-all shadow-lg/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] text-white font-bold px-8 py-4 rounded-full inline-block/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-bold px-8 py-3\.5 rounded-full transition-all shadow-md/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14\.5px\] font-bold px-7 py-3\.5 rounded-full transition-all w-fit cursor-pointer shadow-md/g,
    "btn-primary w-fit",
  ],
  [
    /inline-flex items-center justify-center bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-bold px-7 py-3\.5 rounded-full transition-all shadow-md/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center justify-center bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[16px\] font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-\[#3fb364\]\/25/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14px\] font-semibold px-6 py-3\.5 rounded-full transition-all duration-200/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-bold px-8 py-3\.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md/g,
    "btn-primary",
  ],
  [
    /inline-flex items-center gap-2 bg-\[#6ca220\] hover:bg-\[#5b8a1a\] text-white text-\[15px\] font-semibold px-7 py-3 rounded-full transition-all/g,
    "btn-primary",
  ],
  [
    /mt-8 inline-flex items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[15px\] font-bold px-7 py-3\.5 rounded-xl transition-all shadow-lg shadow-\[#3fb364\]\/25/g,
    "btn-primary mt-8",
  ],
  [
    /inline-flex w-fit items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14px\] font-bold px-6 py-3 rounded-xl transition-all cursor-pointer/g,
    "btn-primary w-fit",
  ],
  [
    /inline-flex w-fit items-center gap-2 bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14\.5px\] font-bold px-7 py-3\.5 rounded-xl transition-all cursor-pointer/g,
    "btn-primary w-fit",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[13\.5px\] font-bold py-3 px-6 rounded-xl text-center flex items-center justify-center gap-1\.5 transition-all duration-200/g,
    "btn-primary",
  ],
  [
    /inline-block bg-\[#3fb364\] hover:bg-\[#2d9e4f\] text-white font-bold text-\[15px\] px-8 py-3\.5 rounded-xl shadow-md transition-colors/g,
    "btn-primary",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[14px\] font-semibold px-6 py-3\.5 rounded-xl transition-all shadow-md relative z-10 flex-shrink-0 cursor-pointer/g,
    "btn-primary relative z-10 flex-shrink-0",
  ],
  [
    /bg-\[#3fb364\] hover:bg-\[#349b55\] text-white text-\[13px\] font-bold py-2\.5 px-4 rounded-lg text-center flex items-center justify-center gap-1\.5 transition-all duration-200/g,
    "btn-primary-sm",
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
