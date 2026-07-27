const fs = require("fs");
const path = require("path");
const base = path.join(__dirname, "..");
const out = path.join(__dirname);
const home = path.join(base, "public/home");
fs.mkdirSync(out, { recursive: true });

const items = [
  {
    slug: "buying-down-your-arizona-interest-rate",
    img: "https://azmortgagebrothers.com/wp-content/uploads/2025/02/buying-down-your-arizona-interest-rate.jpg",
    imgName: "buying-down-your-arizona-interest-rate.jpg",
  },
  {
    slug: "arizona-second-mortgages",
    img: "https://azmortgagebrothers.com/wp-content/uploads/2025/02/arizona-second-mortgages.jpg",
    imgName: "arizona-second-mortgages.jpg",
  },
  {
    slug: "arizona-real-estate-capital-gains-is-back",
    img: "https://azmortgagebrothers.com/wp-content/uploads/2025/02/arizona-real-estate-capital-gains-is-back.jpg",
    imgName: "arizona-real-estate-capital-gains-is-back.jpg",
  },
];

(async () => {
  const neigh = await (
    await fetch(
      "https://azmortgagebrothers.com/wp-json/wp/v2/posts?categories=7&per_page=100&order=asc&orderby=date&_fields=slug,date"
    )
  ).json();

  for (const item of items) {
    const res = await fetch(
      `https://azmortgagebrothers.com/wp-json/wp/v2/posts?slug=${item.slug}&_fields=id,title,date,featured_media,categories,content&per_page=1`
    );
    const p = (await res.json())[0];
    if (!p) throw new Error("missing " + item.slug);
    const media = await (
      await fetch(
        `https://azmortgagebrothers.com/wp-json/wp/v2/media/${p.featured_media}?_fields=source_url,alt_text`
      )
    ).json();

    fs.writeFileSync(path.join(out, item.slug + ".json"), JSON.stringify(p, null, 2));

    const imgUrl = media.source_url || item.img;
    const ir = await fetch(imgUrl, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!ir.ok) throw new Error(ir.status + " " + imgUrl);
    const buf = Buffer.from(await ir.arrayBuffer());
    const imgName = path.basename(new URL(imgUrl).pathname) || item.imgName;
    fs.writeFileSync(path.join(home, imgName), buf);

    const html = p.content.rendered;
    const yt =
      (html.match(/youtu\.be\/([\w-]+)/) || html.match(/embed\/([\w-]+)/) || [])[1];
    const faqs = [];
    const re = /"name"\s*:\s*"([^"]+)"[\s\S]*?"text"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(html))) {
      faqs.push({
        q: m[1],
        a: m[2].replace(/\\"/g, '"').replace(/\\n/g, " "),
      });
    }
    const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((x) =>
      x[1].replace(/<[^>]+>/g, "").trim()
    );
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, "\n")
      .replace(/&nbsp;/g, " ")
      .replace(/&#8217;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    fs.writeFileSync(path.join(out, item.slug + ".txt"), text);

    const i = neigh.findIndex((x) => x.slug === item.slug);
    const meta = {
      title: p.title.rendered,
      date: p.date,
      categories: p.categories,
      yt,
      h2,
      faqs,
      alt: media.alt_text,
      imgName,
      imgUrl,
      prev: neigh[i - 1]?.slug,
      next: neigh[i + 1]?.slug,
    };
    fs.writeFileSync(path.join(out, item.slug + "-meta.json"), JSON.stringify(meta, null, 2));
    console.log("ok", item.slug, "img", imgName, buf.length, "yt", yt, "prev", meta.prev, "next", meta.next, "faqs", faqs.length);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
