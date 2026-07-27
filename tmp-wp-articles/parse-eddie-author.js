const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

(async () => {
  const html = fs.readFileSync(path.join(__dirname, "eddie-author-page.html"), "utf8");
  // try without cheerio - raw extract
  const bioBlock =
    (html.match(/et_pb_text[^>]*>[\s\S]*?<h1[^>]*>Eddie Knoell<\/h1>([\s\S]*?)(?:<\/div>\s*<\/div>\s*<div class="et_pb_module|$)/i) ||
      [])[1] || "";
  const paras = [...bioBlock.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) =>
    m[1]
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&#8217;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim()
  );

  // find main author image near top
  const imgs = [...html.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/gi)]
    .map((m) => m[1])
    .filter(
      (u) =>
        !u.includes("logo") &&
        !u.includes("gravatar") &&
        !u.includes("data:image") &&
        (u.includes("eddie") || u.includes("uploads") || u.includes("wp-content"))
    )
    .slice(0, 20);

  // also look for srcset / background
  const allEddie = [...html.matchAll(/https:\/\/azmortgagebrothers\.com\/wp-content\/uploads\/[^"'\s]+/g)]
    .map((m) => m[0].replace(/&amp;/g, "&"))
    .filter((u, i, a) => a.indexOf(u) === i)
    .slice(0, 40);

  console.log(
    JSON.stringify(
      {
        paras,
        imgs,
        allEddie: allEddie.slice(0, 25),
      },
      null,
      2
    )
  );

  // page 2 titles
  const p2 = await (await fetch("https://azmortgagebrothers.com/author/eddie-knoell/page/2/")).text();
  const titles = [
    ...p2.matchAll(/et_pb_post[\s\S]*?<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi),
  ].map((m) => ({
    href: m[1].replace("https://azmortgagebrothers.com", ""),
    title: m[2].replace(/<[^>]+>/g, "").replace(/&#8217;/g, "'").replace(/&amp;/g, "&").trim(),
  }));
  console.log("page2 count", titles.length, titles.slice(0, 5));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
