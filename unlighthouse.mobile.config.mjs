import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const pathsFile = join(process.cwd(), ".unlighthouse/all-paths.txt");
const urls = existsSync(pathsFile)
  ? readFileSync(pathsFile, "utf8")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean)
  : undefined;

/** Interactive Unlighthouse UI — mobile @ http://localhost:5678 */
export default {
  site: "https://azmortgagebrothers.com",
  ...(urls?.length ? { urls } : {}),
  outputPath: ".unlighthouse/ui-mobile-live",
  cache: false,
  scanner: {
    maxRoutes: false,
    dynamicSampling: false,
    throttle: true,
    device: "mobile",
    crawler: false,
    sitemap: false,
    robotsTxt: false,
  },
  server: {
    port: 5678,
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
