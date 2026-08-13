import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".next") continue;
      walk(p, files);
    } else if (/\.(tsx|jsx)$/.test(ent.name)) {
      files.push(p);
    }
  }
  return files;
}

/** Matches both <iframe ...></iframe> and self-closing <iframe ... /> */
const iframeBlockRe =
  /<iframe\b[\s\S]*?src=["']https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]+)[^"']*["'][\s\S]*?(?:\/>|><\/iframe>)/gi;

const files = walk("app");
let changed = 0;

for (const file of files) {
  if (file.includes("YoutubeLiteEmbed")) continue;
  const src = fs.readFileSync(file, "utf8");
  if (!/youtube(?:-nocookie)?\.com\/embed\//.test(src)) continue;

  const next = src.replace(iframeBlockRe, (match, id) => {
    const titleMatch = match.match(/title=["']([^"']*)["']/i);
    const title = (titleMatch?.[1] ?? "YouTube video")
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"');
    return `<YoutubeLiteEmbed\n                  videoId="${id}"\n                  title="${title}"\n                />`;
  });

  if (next === src) {
    console.log("no-replace", file);
    continue;
  }

  let out = next;
  if (!/from ['"]@\/app\/component\/YoutubeLiteEmbed['"]/.test(out)) {
    const lines = out.split("\n");
    let lastImport = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/^import\s/.test(lines[i])) {
        let j = i;
        while (j < lines.length && !/from\s+['"]/.test(lines[j])) j++;
        lastImport = j;
      }
    }
    const importLine = "import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';";
    if (lastImport >= 0) {
      lines.splice(lastImport + 1, 0, importLine);
      out = lines.join("\n");
    } else {
      out = `${importLine}\n${out}`;
    }
  }

  fs.writeFileSync(file, out);
  changed += 1;
  console.log("updated", file);
}

console.log("total", changed);
