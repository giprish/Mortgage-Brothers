import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const pathsFile = join(process.cwd(), ".unlighthouse/all-paths.txt");
const urls = existsSync(pathsFile)
  ? readFileSync(pathsFile, "utf8")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean)
  : undefined;

export default {
  site: "https://azmortgagebrothers.com",
  ...(urls?.length ? { urls } : {}),
  scanner: {
    maxRoutes: false,
    dynamicSampling: false,
    throttle: true,
    crawler: false,
    sitemap: urls?.length
      ? false
      : [
          "https://azmortgagebrothers.com/page-sitemap.xml",
          "https://azmortgagebrothers.com/post-sitemap.xml",
          "https://azmortgagebrothers.com/category-sitemap.xml",
          "https://azmortgagebrothers.com/author-sitemap.xml",
        ],
    robotsTxt: !urls?.length,
    exclude: ["/cdn-cgi/*", "/**/*.kml"],
  },
  puppeteerClusterOptions: {
    maxConcurrency: 2,
    retryLimit: 5,
    retryDelay: 5000,
    workerCreationDelay: 1000,
  },
  ci: {
    buildStatic: true,
    reporter: "csvExpanded",
  },
};
