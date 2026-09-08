import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const pathsFile = join(process.cwd(), ".unlighthouse/all-paths.txt");
const urls = existsSync(pathsFile)
  ? readFileSync(pathsFile, "utf8")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean)
  : undefined;

/**
 * Interactive Unlighthouse UI — desktop @ http://localhost:5679
 *
 * IMPORTANT: Unlighthouse `throttle: true` applies *mobile* Slow-4G simulation
 * even when device is desktop, which tanks FCP/LCP vs Lighthouse `--preset=desktop`
 * / PageSpeed desktop. Use LH desktop throttling instead.
 */
export default {
  site: "https://azmortgagebrothers.com",
  ...(urls?.length ? { urls } : {}),
  outputPath: ".unlighthouse/ui-desktop-live",
  cache: false,
  scanner: {
    maxRoutes: false,
    dynamicSampling: false,
    // false = don't force mobile Slow-4G; lighthouseOptions below set desktop throttle
    throttle: false,
    device: "desktop",
    crawler: false,
    sitemap: false,
    robotsTxt: false,
  },
  lighthouseOptions: {
    throttlingMethod: "simulate",
    // Matches Lighthouse --preset=desktop / PageSpeed Insights desktop
    throttling: {
      rttMs: 40,
      throughputKbps: 10 * 1024,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
  },
  server: {
    port: 5679,
    open: true,
    showURL: true,
  },
  puppeteerClusterOptions: {
    maxConcurrency: 2,
    retryLimit: 3,
    retryDelay: 3000,
    workerCreationDelay: 750,
  },
};
