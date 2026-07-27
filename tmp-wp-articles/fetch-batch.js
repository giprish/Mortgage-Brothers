const fs = require("fs");
const path = require("path");
const base = path.join(__dirname, "..");
const out = __dirname;
const home = path.join(base, "public/home");

const slugs = [
  "how-does-my-car-loan-payment-affect-my-mortgage",
  "grossing-up-your-income-what-does-that-mean",
  "can-i-get-a-3rd-mortgage",
];

(async () => {
  for (const slug of slugs) {
    const res = await fetch(
      `https://azmortgagebrothers.com/wp-json/wp/v2/posts?slug=${slug}&_fields=id,title,date,featured_media,categories,content,link&per_page=1`
    );
    const arr = await res.json();
    const p = arr[0];
    if (!p) {
      console.log("MISSING", slug);
      continue;
    }
    fs.writeFileSync(path.join(out, slug + ".json"), JSON.stringify(p, null, 2));

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
    for (const cid of p.categories) {
      const c = await (
        await fetch(
          `https://azmortgagebrothers.com/wp-json/wp/v2/categories/${cid}?_fields=name,slug`
        )
      ).json();
      cats.push(c);
    }

    const neigh = await (
      await fetch(
        `https://azmortgagebrothers.com/wp-json/wp/v2/posts?categories=${p.categories[0]}&per_page=100&order=asc&orderby=date&_fields=slug,date`
      )
    ).json();
    const i = neigh.findIndex((x) => x.slug === slug);

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
    fs.writeFileSync(path.join(out, slug + ".txt"), text);

    const meta = {
      title: p.title.rendered,
      date: p.date,
      categories: cats,
      yt,
      h2,
      faqs,
      alt: media.alt_text,
      imgName,
      imgUrl,
      prev: neigh[i - 1]?.slug,
      next: neigh[i + 1]?.slug,
    };
    fs.writeFileSync(path.join(out, slug + "-meta.json"), JSON.stringify(meta, null, 2));
    console.log(
      "ok",
      slug,
      "cat",
      cats.map((c) => c.slug).join(","),
      "img",
      imgName,
      buf.length,
      "yt",
      yt,
      "prev",
      meta.prev,
      "next",
      meta.next,
      "faqs",
      faqs.length,
      "h2",
      h2.length
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
