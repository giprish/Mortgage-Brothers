const fs = require("fs");
const path = require("path");

(async () => {
  const html = await (
    await fetch(
      "https://azmortgagebrothers.com/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/"
    )
  ).text();
  fs.writeFileSync(
    path.join(__dirname, "trends-live.html"),
    html
  );

  // Extract main content headings and paragraphs
  const main =
    (html.match(/<article[\s\S]*?<\/article>/i) ||
      html.match(/et_pb_post_content[\s\S]*?(?=<footer|et_pb_section fb_built="1"[\s\S]*footer)/i) ||
      [])[0] || html;

  const headings = [...main.matchAll(/<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) =>
    m[2]
      .replace(/<[^>]+>/g, "")
      .replace(/&#8217;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim()
  );

  const texts = [...main.matchAll(/<(p|li)[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map((m) =>
      m[2]
        .replace(/<[^>]+>/g, " ")
        .replace(/&#8217;/g, "'")
        .replace(/&rsquo;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter((t) => t.length > 40);

  console.log(
    JSON.stringify(
      {
        title: (html.match(/<title>([^<]+)/) || [])[1],
        headings: headings.slice(0, 30),
        paraCount: texts.length,
        sample: texts.slice(0, 25),
      },
      null,
      2
    )
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
