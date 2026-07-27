const fs = require("fs");
const path = require("path");

const posts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "eddie-author-posts.json"), "utf8")
);

function decode(s) {
  return s
    .replace(/&#038;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "--")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\[&hellip;\]/g, "...")
    .replace(/\u2026/g, "...");
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const out = posts.map((p) => {
  const d = new Date(p.date);
  const date =
    months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  let excerpt = decode(p.excerpt);
  if (excerpt.length > 180) excerpt = excerpt.slice(0, 177).trim() + "...";
  return {
    title: decode(p.title),
    href: p.href,
    date,
    excerpt,
  };
});

fs.writeFileSync(
  path.join(__dirname, "eddie-posts-for-page.json"),
  JSON.stringify(out, null, 2)
);
console.log("posts", out.length);
