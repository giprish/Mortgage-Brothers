/**
 * Full-site Lighthouse audit (Mobile + Desktop).
 *
 *   npm run build && npm start
 *   node scripts/lighthouse-all.mjs
 *
 * Env: BASE_URL, LH_CONCURRENCY, LH_LIMIT, LH_FORM_FACTORS, LH_THRESHOLD
 */
import { spawn } from "child_process";
import {
  mkdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { join, relative, sep } from "path";

const BASE_URL = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const CONCURRENCY = Math.max(1, Number(process.env.LH_CONCURRENCY || 2));
const LIMIT = Number(process.env.LH_LIMIT || 0);
const FORM_FACTORS = (process.env.LH_FORM_FACTORS || "mobile,desktop")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const THRESHOLD = Number(process.env.LH_THRESHOLD || 95);
const OUT_DIR = join(process.cwd(), "lighthouse-reports");

mkdirSync(OUT_DIR, { recursive: true });

const CITIES_BY_COUNTY = {
  "maricopa-county-az": [
    "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale", "Tempe", "Peoria",
    "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Fountain Hills",
    "Paradise Valley", "Cave Creek", "Carefree", "Anthem", "Sun City", "Sun City West",
    "Litchfield Park", "Wickenburg", "Apache Junction", "Guadalupe", "El Mirage",
    "Tolleson", "Youngtown", "Gila Bend",
  ],
  "pima-county-az": [
    "Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley", "Catalina Foothills", "South Tucson",
  ],
  "pinal-county-az": [
    "Casa Grande", "Maricopa", "San Tan Valley", "Florence", "Coolidge", "Eloy", "Apache Junction", "Superior", "Kearny", "Mammoth",
  ],
  "yavapai-county-az": [
    "Prescott", "Prescott Valley", "Sedona", "Cottonwood", "Chino Valley", "Camp Verde", "Dewey-Humboldt", "Clarkdale", "Jerome",
  ],
  "coconino-county-az": ["Flagstaff", "Sedona", "Williams", "Page", "Fredonia", "Tusayan"],
  "navajo-county-az": ["Show Low", "Pinetop-Lakeside", "Holbrook", "Taylor", "Snowflake", "Winslow"],
  "apache-county-az": ["St. Johns", "Eagar", "Springerville", "Chinle", "Window Rock"],
  "gila-county-az": ["Payson", "Globe", "Miami", "Star Valley", "Hayden"],
  "cochise-county-az": ["Sierra Vista", "Douglas", "Bisbee", "Benson", "Willcox", "Tombstone", "Huachuca City"],
  "graham-county-az": ["Safford", "Thatcher", "Pima"],
  "greenlee-county-az": ["Clifton", "Duncan", "Morenci"],
  "santa-cruz-county-az": ["Nogales", "Rio Rico", "Tubac", "Patagonia"],
  "mohave-county-az": ["Lake Havasu City", "Kingman", "Bullhead City", "Fort Mohave", "Golden Valley", "Colorado City"],
  "la-paz-county-az": ["Parker", "Quartzsite", "Salome"],
  "yuma-county-az": ["Yuma", "San Luis", "Somerton", "Wellton"],
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function discoverStaticPagePaths(appDir) {
  const results = [];
  function walk(dir) {
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry === "component" || entry === "api" || entry.startsWith(".")) continue;
      const fullPath = join(dir, entry);
      let stats;
      try {
        stats = statSync(fullPath);
      } catch {
        continue;
      }
      if (stats.isDirectory()) {
        if (entry.startsWith("[") || entry.startsWith("_")) continue;
        walk(fullPath);
        continue;
      }
      if (!/^page\.(tsx|ts|jsx|js)$/.test(entry)) continue;
      const rel = relative(appDir, dir);
      if (!rel || rel === ".") {
        results.push("/");
        continue;
      }
      const segments = rel.split(sep).filter((s) => !(s.startsWith("(") && s.endsWith(")")));
      if (segments.some((s) => s.startsWith("["))) continue;
      results.push(`/${segments.join("/")}`);
    }
  }
  walk(appDir);
  return results;
}

function getCityPaths() {
  return Object.entries(CITIES_BY_COUNTY).flatMap(([county, cities]) =>
    cities.map((city) => `/service-areas/${county}/${slugify(city)}`),
  );
}

const EXCLUDED = new Set([
  "/thank-you",
  "/term-condition",
  "/fha-loans",
  "/loan-programs-detail",
  "/arizona-directory-2",
  "/down-payment-calculator-1",
  "/pillar-posts",
  "/resources",
  "/resources/videos",
  "/resources/mortgage-basics",
  "/service-areas/maricopa-county-az-2",
  "/loan-programs",
]);

function normalize(path) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "");
}

function toUrl(path) {
  const p = normalize(path);
  if (p === "/") return `${BASE_URL}/`;
  return `${BASE_URL}${p}/`;
}

function collectPaths() {
  const appDir = join(process.cwd(), "app");
  const staticPaths = discoverStaticPagePaths(appDir);
  const cityPaths = getCityPaths();
  const seen = new Set();
  const out = [];
  for (const raw of [...staticPaths, ...cityPaths]) {
    const path = normalize(raw);
    if (seen.has(path)) continue;
    if (EXCLUDED.has(path)) continue;
    if (path.startsWith("/resources/mortgage-basics")) continue;
    seen.add(path);
    out.push(path);
  }
  out.sort();
  return LIMIT > 0 ? out.slice(0, LIMIT) : out;
}

function runLighthouse(url, formFactor, outJson) {
  return new Promise((resolve) => {
    const chromeDir = join(OUT_DIR, `.chrome-${formFactor}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
    mkdirSync(chromeDir, { recursive: true });

    const screenEmulation =
      formFactor === "desktop"
        ? ["--preset=desktop"]
        : ["--form-factor=mobile", "--screenEmulation.mobile=true"];

    const chromeFlags = [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      `--user-data-dir=${chromeDir}`,
    ].join(" ");

    const args = [
      url,
      "--quiet",
      `--chrome-flags=${chromeFlags}`,
      "--only-categories=performance,accessibility,best-practices,seo",
      "--output=json",
      `--output-path=${outJson}`,
      ...screenEmulation,
    ];

    // Prefer local binary if present; else npx
    const lhBin = join(process.cwd(), "node_modules", ".bin", "lighthouse.cmd");
    const cmd = existsSync(lhBin) ? lhBin : "npx";
    const cmdArgs = existsSync(lhBin) ? args : ["--yes", "lighthouse", ...args];

    const child = spawn(cmd, cmdArgs, {
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
        LIGHTHOUSE_STORAGE_PATH: join(OUT_DIR, ".lh-storage"),
      },
    });

    let stderr = "";
    child.stderr.on("data", (d) => {
      stderr += d.toString();
    });

    child.on("close", (code) => {
      const hasReport = existsSync(outJson);
      // Windows/OneDrive often EPERM on chrome temp cleanup after a successful run.
      if ((!hasReport) || (code !== 0 && !hasReport)) {
        resolve({
          url,
          formFactor,
          ok: false,
          error: stderr.slice(0, 800) || `exit ${code}`,
        });
        return;
      }
      try {
        const report = JSON.parse(readFileSync(outJson, "utf8"));
        const cats = report.categories || {};
        const scores = {
          performance: Math.round((cats.performance?.score ?? 0) * 100),
          accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
          bestPractices: Math.round((cats["best-practices"]?.score ?? 0) * 100),
          seo: Math.round((cats.seo?.score ?? 0) * 100),
        };
        const failed = Object.entries(scores)
          .filter(([, v]) => v < THRESHOLD)
          .map(([k, v]) => `${k}:${v}`);

        const failedAuditIds = Object.values(report.audits || {})
          .filter(
            (a) =>
              a &&
              typeof a.score === "number" &&
              a.score < 0.9 &&
              a.scoreDisplayMode !== "informative" &&
              a.scoreDisplayMode !== "manual" &&
              a.scoreDisplayMode !== "notApplicable",
          )
          .map((a) => a.id)
          .slice(0, 20);

        resolve({
          url,
          formFactor,
          ok: true,
          scores,
          failed,
          failedAuditIds,
          pass: failed.length === 0,
        });
      } catch (e) {
        resolve({ url, formFactor, ok: false, error: String(e) });
      }
    });
  });
}

async function poolMap(items, concurrency, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

async function main() {
  // Health check
  try {
    const res = await fetch(`${BASE_URL}/`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (e) {
    console.error(`Server not reachable at ${BASE_URL}. Run: npm run build && npm start`);
    console.error(String(e));
    process.exit(2);
  }

  const paths = collectPaths();
  const jobs = [];
  for (const path of paths) {
    for (const formFactor of FORM_FACTORS) {
      jobs.push({ path, formFactor, url: toUrl(path) });
    }
  }

  console.log(`Auditing ${paths.length} pages × ${FORM_FACTORS.length} = ${jobs.length} runs`);
  console.log(`Base: ${BASE_URL} | concurrency=${CONCURRENCY} | threshold=${THRESHOLD}`);

  const started = Date.now();
  const results = await poolMap(jobs, CONCURRENCY, async (job, idx) => {
    const safe = (job.path.replace(/[\\/]/g, "_") || "home").slice(0, 120);
    const outJson = join(OUT_DIR, `${safe}__${job.formFactor}.json`);
    process.stdout.write(`[${idx + 1}/${jobs.length}] ${job.formFactor} ${job.url}\n`);
    const result = await runLighthouse(job.url, job.formFactor, outJson);
    if (result.ok) {
      const mark = result.pass ? "PASS" : "FAIL";
      console.log(
        `  ${mark} P${result.scores.performance} A${result.scores.accessibility} BP${result.scores.bestPractices} SEO${result.scores.seo}`,
      );
    } else {
      console.log(`  ERROR ${result.error}`);
    }
    return { ...result, path: job.path };
  });

  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    threshold: THRESHOLD,
    pageCount: paths.length,
    runCount: jobs.length,
    elapsedMs: Date.now() - started,
    results,
    failing: results.filter((r) => r.ok && !r.pass),
    errors: results.filter((r) => !r.ok),
  };

  const auditFreq = {};
  for (const r of summary.failing) {
    for (const id of r.failedAuditIds || []) {
      auditFreq[id] = (auditFreq[id] || 0) + 1;
    }
  }
  summary.topFailedAudits = Object.entries(auditFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40)
    .map(([id, count]) => ({ id, count }));

  writeFileSync(join(OUT_DIR, "summary.json"), JSON.stringify(summary, null, 2));
  writeFileSync(
    join(OUT_DIR, "summary.md"),
    [
      `# Lighthouse full-site report`,
      ``,
      `- Pages: ${summary.pageCount}`,
      `- Runs: ${summary.runCount}`,
      `- Threshold: ${THRESHOLD}`,
      `- Failing runs: ${summary.failing.length}`,
      `- Errors: ${summary.errors.length}`,
      `- Elapsed: ${Math.round(summary.elapsedMs / 1000)}s`,
      ``,
      `## Top failed audits`,
      ...summary.topFailedAudits.map((a) => `- \`${a.id}\` × ${a.count}`),
      ``,
      `## Failing pages`,
      ...summary.failing.map(
        (r) =>
          `- **${r.formFactor}** ${r.path} — P${r.scores.performance} A${r.scores.accessibility} BP${r.scores.bestPractices} SEO${r.scores.seo} (${r.failed.join(", ")})`,
      ),
    ].join("\n"),
  );

  console.log(`\nDone. Failing: ${summary.failing.length}/${jobs.length}`);
  console.log(`Wrote lighthouse-reports/summary.md`);
  process.exit(summary.failing.length || summary.errors.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
