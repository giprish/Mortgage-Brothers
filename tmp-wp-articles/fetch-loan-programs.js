const fs = require("fs");
const path = require("path");
const out = __dirname;
const home = path.join(__dirname, "..", "public", "home");
fs.mkdirSync(home, { recursive: true });

const slugs = [
  "conventional-home-loans-arizona",
  "fha-home-loans-arizona",
  "fha-streamline-refinance-arizona",
  "first-time-home-buyer-arizona-guide",
  "jumbo-loans-arizona",
  "private-money-lender-arizona",
  "refinancing-arizona",
  "reverse-mortgage-arizona",
  "reverse-mortgage-home-purchase-arizona",
  "va-loans-arizona",
];

function decode(html) {
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "--")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&");
}

async function fetchItem(slug) {
  for (const type of ["pages", "posts"]) {
    const res = await fetch(
      `https://azmortgagebrothers.com/wp-json/wp/v2/${type}?slug=${slug}&_fields=id,title,date,featured_media,content,excerpt,yoast_head_json,link&per_page=1`
    );
    const arr = await res.json();
    if (arr[0]) return { type, p: arr[0] };
  }
  return null;
}

(async () => {
  for (const slug of slugs) {
    const found = await fetchItem(slug);
    if (!found) {
      console.log("MISSING", slug);
      continue;
    }
    const { type, p } = found;
    fs.writeFileSync(path.join(out, "loan-" + slug + ".json"), JSON.stringify({ type, ...p }, null, 2));

    let imgName = null;
    let imgUrl = null;
    let alt = "";
    if (p.featured_media) {
      const media = await (
        await fetch(
          `https://azmortgagebrothers.com/wp-json/wp/v2/media/${p.featured_media}?_fields=source_url,alt_text`
        )
      ).json();
      imgUrl = media.source_url;
      alt = media.alt_text || "";
      if (imgUrl) {
        imgName = path.basename(new URL(imgUrl).pathname);
        const dest = path.join(home, imgName);
        if (!fs.existsSync(dest)) {
          const ir = await fetch(imgUrl, { headers: { "user-agent": "Mozilla/5.0" } });
          if (ir.ok) {
            fs.writeFileSync(dest, Buffer.from(await ir.arrayBuffer()));
            console.log("img", imgName);
          }
        }
      }
    }

    const html = p.content.rendered;
    const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((x) =>
      decode(x[1].replace(/<[^>]+>/g, "").trim())
    );
    const headings = [...html.matchAll(/title="([^"]+)"[^>]*title_level="h2/gi)].map((x) =>
      decode(x[1])
    );
    const faqs = [];
    const re = /"name"\s*:\s*"([^"]+)"[\s\S]*?"text"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(html))) {
      faqs.push({
        q: decode(m[1]),
        a: decode(m[2].replace(/\\"/g, '"').replace(/\\n/g, " ")),
      });
    }
    const text = decode(
      html
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim()
    );
    fs.writeFileSync(path.join(out, "loan-" + slug + ".txt"), text);

    const yoast = p.yoast_head_json || {};
    const meta = {
      type,
      title: decode(p.title.rendered),
      date: p.date,
      h2: h2.length ? h2 : headings,
      faqs,
      alt,
      imgName,
      imgUrl,
      seoTitle: yoast.title || decode(p.title.rendered),
      seoDesc:
        yoast.description ||
        decode((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "")).trim(),
      contentLen: text.length,
    };
    fs.writeFileSync(path.join(out, "loan-" + slug + "-meta.json"), JSON.stringify(meta, null, 2));
    console.log(
      "ok",
      slug,
      "type",
      type,
      "h2",
      meta.h2.length,
      "faqs",
      faqs.length,
      "chars",
      text.length,
      "img",
      imgName
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
