const fs = require("fs");
const path = require("path");
const base = path.join(__dirname, "..");
const out = __dirname;
const home = path.join(base, "public/home");

const slug = "arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year";

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
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

(async () => {
  let type = "posts";
  let res = await fetch(
    `https://azmortgagebrothers.com/wp-json/wp/v2/posts?slug=${slug}&_fields=id,title,date,featured_media,categories,content,link,excerpt,yoast_head_json&per_page=1`
  );
  let arr = await res.json();
  if (!arr[0]) {
    type = "pages";
    res = await fetch(
      `https://azmortgagebrothers.com/wp-json/wp/v2/pages?slug=${slug}&_fields=id,title,date,featured_media,categories,content,link,excerpt,yoast_head_json&per_page=1`
    );
    arr = await res.json();
  }
  const p = arr[0];
  if (!p) {
    console.log("MISSING");
    process.exit(1);
  }
  fs.writeFileSync(path.join(out, slug + ".json"), JSON.stringify({ type, ...p }, null, 2));

  const media = await (
    await fetch(
      `https://azmortgagebrothers.com/wp-json/wp/v2/media/${p.featured_media}?_fields=source_url,alt_text`
    )
  ).json();
  const imgUrl = media.source_url;
  const ir = await fetch(imgUrl, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!ir.ok) throw new Error(ir.status + " " + imgUrl);
  const buf = Buffer.from(await ir.arrayBuffer());
  const imgName = path.basename(new URL(imgUrl).pathname);
  fs.writeFileSync(path.join(home, imgName), buf);

  const cats = [];
  if (p.categories) {
    for (const cid of p.categories) {
      const c = await (
        await fetch(
          `https://azmortgagebrothers.com/wp-json/wp/v2/categories/${cid}?_fields=name,slug`
        )
      ).json();
      cats.push(c);
    }
  }

  let prev = null;
  let next = null;
  if (type === "posts" && p.categories?.[0]) {
    const neigh = await (
      await fetch(
        `https://azmortgagebrothers.com/wp-json/wp/v2/posts?categories=${p.categories[0]}&per_page=100&order=asc&orderby=date&_fields=slug,date,title`
      )
    ).json();
    const i = neigh.findIndex((x) => x.slug === slug);
    if (i > 0)
      prev = {
        slug: neigh[i - 1].slug,
        title: decode(neigh[i - 1].title.rendered),
      };
    if (i >= 0 && i < neigh.length - 1)
      next = {
        slug: neigh[i + 1].slug,
        title: decode(neigh[i + 1].title.rendered),
      };
  }

  const html = p.content.rendered;
  const yt =
    (html.match(/youtu\.be\/([\w-]+)/) || html.match(/embed\/([\w-]+)/) || [])[1] ||
    null;
  const faqs = [];
  const re = /"name"\s*:\s*"([^"]+)"[\s\S]*?"text"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(html))) {
    faqs.push({
      q: decode(m[1]),
      a: decode(m[2].replace(/\\"/g, '"').replace(/\\n/g, " ")),
    });
  }
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((x) =>
    decode(x[1].replace(/<[^>]+>/g, "").trim())
  );
  const headings = [...html.matchAll(/title="([^"]+)"[^>]*title_level="h2/gi)].map((x) =>
    decode(x[1])
  );
  const text = decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
  fs.writeFileSync(path.join(out, slug + ".txt"), text);

  const yoast = p.yoast_head_json || {};
  const meta = {
    wpType: type,
    title: decode(p.title.rendered),
    date: p.date,
    categories: cats,
    yt,
    h2: h2.length ? h2 : headings,
    faqs,
    alt: media.alt_text || "",
    imgName,
    imgUrl,
    prev,
    next,
    seoTitle: yoast.title || decode(p.title.rendered),
    seoDesc:
      yoast.description ||
      decode((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "")).trim(),
  };
  fs.writeFileSync(path.join(out, slug + "-meta.json"), JSON.stringify(meta, null, 2));
  console.log(JSON.stringify(meta, null, 2));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
