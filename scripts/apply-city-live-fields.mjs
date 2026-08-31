import { readFileSync, writeFileSync } from "fs";

const fields = JSON.parse(readFileSync("scripts/city-live-fields.json", "utf8"));
let content = readFileSync("lib/liveCityPageContent.ts", "utf8");

function cityNameFromRoute(route) {
  const slug = route.split("/")[1];
  return slug
    .split("-")
    .map((w) => (/^[a-z]{2}$/i.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ")
    .replace(/\bAz\b/g, "AZ");
}

function brandParagraph(long1, long2, route) {
  const city = cityNameFromRoute(route);
  if (!long1) return null;
  if (long1.endsWith("?") && long2) {
    const answer = long2.replace(/^AZ Mortgage Brothers\b/, "[Mortgage Brothers LLC](/)");
    return `${long1} ${answer}`;
  }
  return long1.replace(/\*\*/g, "").replace(/^AZ Mortgage Brothers\b/, "Mortgage Brothers LLC");
}

function escapeTs(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatItems(items) {
  if (!items?.length) return null;
  return items
    .map(
      (item) => `      {
        title: "${escapeTs(item.title)}",
        description: "${escapeTs(item.description)}",
      }`,
    )
    .join(",\n");
}

for (const [route, live] of Object.entries(fields)) {
  if (live.error) {
    console.warn("skip", route, live.error);
    continue;
  }

  const key = `"${route}"`;
  const start = content.indexOf(`${key}: {`);
  if (start < 0) {
    console.warn("missing entry", route);
    continue;
  }

  let depth = 0;
  let end = start;
  for (let i = content.indexOf("{", start); i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }

  const block = content.slice(start, end);
  let updated = block;

  const setField = (name, value) => {
    if (value == null || value === "") return;
    const re = new RegExp(`\\n\\s*${name}:\\s*[^,\\n]+,?`);
    const line = `\n    ${name}: ${typeof value === "string" ? `"${escapeTs(value)}"` : value},`;
    if (re.test(updated)) {
      updated = updated.replace(re, `${line}`);
    } else {
      updated = updated.replace(/: \{\n/, `: {${line}\n`);
    }
  };

  setField("heroTitle", live.heroTitle);
  setField("heroDescription", live.heroDescription);
  if (live.introTitle) setField("introTitle", live.introTitle);

  const long0 = brandParagraph(live.longDescriptions?.[0], live.longDescriptions?.[1], route);
  const long1 = live.longDescriptions?.[1]?.startsWith("AZ Mortgage Brothers")
    ? null
    : live.longDescriptions?.[1];
  if (long0) {
    const longs = [long0];
    if (long1 && !long1.startsWith("LOCAL EXPERTISE") && long1 !== long0) longs.push(long1.replace(/\*\*/g, ""));
    const longBlock = longs.map((p) => `      "${escapeTs(p)}"`).join(",\n");
    if (/longDescriptions:\s*\[/.test(updated)) {
      updated = updated.replace(/longDescriptions:\s*\[[\s\S]*?\],/, `longDescriptions: [\n${longBlock},\n    ],`);
    }
  }

  if (live.communitiesTitle) setField("communitiesTitle", live.communitiesTitle);
  const itemsBlock = formatItems(live.communities);
  if (itemsBlock && /items:\s*\[/.test(updated)) {
    updated = updated.replace(/items:\s*\[[\s\S]*?\],/, `items: [\n${itemsBlock},\n    ],`);
  }

  if (live.mortgageSolutionsTitle) setField("mortgageSolutionsTitle", live.mortgageSolutionsTitle);
  if (live.mortgageSolutionsIntro) setField("mortgageSolutionsIntro", live.mortgageSolutionsIntro);
  if (live.whyChooseTitle) setField("whyChooseTitle", live.whyChooseTitle);
  if (live.ctaTitle) setField("ctaTitle", live.ctaTitle);
  if (live.guidanceTitle && !live.guidanceTitle.includes("AZ Mortgage Brothers provides trusted")) {
    setField("guidanceTitle", live.guidanceTitle);
  }
  if (live.expectTitle) setField("expectTitle", live.expectTitle.replace(/:$/, ""));
  if (live.getInTouchTitle) setField("getInTouchTitle", live.getInTouchTitle);

  setField("heroClientRating", live.heroClientRating || "4.9/5");
  setField("faqEyebrow", live.faqEyebrow || "OUR FAQ'S");
  if (live.communitiesCtaLabel) setField("communitiesCtaLabel", live.communitiesCtaLabel);

  // Remove bold markers from getInTouch paragraphs
  updated = updated.replace(/\*\*([^*]+)\*\*/g, "$1");

  // Normalize pre-approval dash
  updated = updated.replace(/within 4-8 hours/g, "within 4–8 hours");

  if (updated !== block) {
    content = content.slice(0, start) + updated + content.slice(end);
    console.log("updated", route);
  } else {
    console.log("unchanged", route);
  }
}

writeFileSync("lib/liveCityPageContent.ts", content);
console.log("done");
