const fs = require("fs");
const path = require("path");
const out = path.join(__dirname);

(async () => {
  const html = await (await fetch("https://azmortgagebrothers.com/author/eddie-knoell/")).text();
  fs.writeFileSync(path.join(out, "eddie-author-page.html"), html);

  const title = (html.match(/<title>([^<]+)/) || [])[1];
  const desc = (html.match(/name="description" content="([^"]+)/) || [])[1];
  const og = (html.match(/property="og:image" content="([^"]+)/) || [])[1];
  const h1 = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "")
    .replace(/<[^>]+>/g, "")
    .trim();

  const entries = [
    ...html.matchAll(
      /class="[^"]*entry-title[^"]*"[^>]*>[\s\S]*?<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi
    ),
  ].map((m) => ({
    href: m[1].replace("https://azmortgagebrothers.com", ""),
    title: m[2].replace(/<[^>]+>/g, "").trim(),
  }));

  // Divi blog titles
  const divi = [
    ...html.matchAll(
      /et_pb_post[^>]*>[\s\S]*?<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi
    ),
  ].map((m) => ({
    href: m[1].replace("https://azmortgagebrothers.com", ""),
    title: m[2].replace(/<[^>]+>/g, "").trim(),
  }));

  const excerpts = [
    ...html.matchAll(/class="[^"]*post-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi),
  ]
    .slice(0, 12)
    .map((m) => m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 220));

  const avatars = [...html.matchAll(/https:\/\/secure\.gravatar\.com\/avatar\/[^"'\s]+/g)].slice(
    0,
    5
  );
  const pagination = [
    ...new Set([...html.matchAll(/author\/eddie-knoell\/page\/(\d+)/g)].map((m) => m[1])),
  ];

  // WP posts by author
  const posts = [];
  let page = 1;
  while (page <= 20) {
    const res = await fetch(
      `https://azmortgagebrothers.com/wp-json/wp/v2/posts?author=4&per_page=100&page=${page}&_fields=slug,title,date,excerpt,link`
    );
    if (!res.ok) break;
    const arr = await res.json();
    if (!arr.length) break;
    for (const p of arr) {
      posts.push({
        slug: p.slug,
        title: p.title.rendered.replace(/<[^>]+>/g, ""),
        date: p.date,
        excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
        href: "/" + p.slug + "/",
      });
    }
    if (arr.length < 100) break;
    page++;
  }

  const meta = {
    title,
    desc,
    og,
    h1,
    entries: entries.length ? entries : divi,
    excerpts,
    avatars,
    pagination,
    postCount: posts.length,
    posts: posts.slice(0, 30),
  };
  fs.writeFileSync(path.join(out, "eddie-author-meta.json"), JSON.stringify(meta, null, 2));
  fs.writeFileSync(path.join(out, "eddie-author-posts.json"), JSON.stringify(posts, null, 2));
  console.log(
    JSON.stringify(
      {
        title,
        desc,
        h1,
        entryCount: (entries.length ? entries : divi).length,
        sample: (entries.length ? entries : divi).slice(0, 10),
        avatars,
        pagination,
        postCount: posts.length,
      },
      null,
      2
    )
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
