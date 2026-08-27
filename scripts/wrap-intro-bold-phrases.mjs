/**
 * Wrap live-synced SEO bold phrases in longDescriptions with ** markers.
 * Run: node scripts/wrap-intro-bold-phrases.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../lib/liveCityPageContent.ts");
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(/\*\*As experienced \*\*/g, "As experienced ");
content = content.replace(
  /we \*\*compare programs from multiple wholesale lenders, giving clients access to competitive \*\*([A-Za-z.'-]+(?: [A-Za-z.'-]+)* mortgage options)/g,
  "we compare programs from multiple wholesale lenders, giving clients access to competitive $1",
);
// Fix prior run that bolded "dependable mortgages in …" — live only bolds "mortgages in …".
content = content.replace(
  /\*\*dependable (mortgages in [^*]+)\*\*/g,
  "dependable **$1**",
);
content = content.replace(
  /\*\*dependable (mortgage loans in [^*]+)\*\*/g,
  "dependable **$1**",
);
content = content.replace(
  /\*\*reliable (mortgage loans in [^*]+)\*\*/g,
  "reliable **$1**",
);

function wrapPhrase(text, regex) {
  return text.replace(regex, (...args) => {
    const match = args[0];
    const captureGroups = args.slice(1, -2);
    const phrase = captureGroups[captureGroups.length - 1];
    if (!phrase || match.includes("**")) return match;
    return match.replace(phrase, `**${phrase}**`);
  });
}

function boldIntroPhrases(text) {
  let result = text;

  const p1Patterns = [
    /(As experienced )(mortgage brokers in [^,]+, AZ)/,
    /(As experienced )(mortgage lenders in [^,]+ AZ)/,
    /(As experienced )(mortgage lenders serving [^,]+ AZ)/,
    /(Looking for experienced )(mortgage brokers in [^?]+)(?=\?)/,
    /(As experienced )([A-Z][A-Za-z.'-]+(?: [A-Z][A-Za-z.'-]+)* mortgage brokers)/,
    /(As experienced )(mortgage brokers in [A-Za-z.'-]+(?: [A-Za-z.'-]+)*)(?=,)/,
  ];

  const p2Patterns = [
    /(help you secure dependable )(mortgages in .+?)(?= with)/,
    /(our team helps you secure dependable )(mortgage loans in .+?)(?= with)/,
    /(help you secure dependable )(mortgage loans in .+?)(?= with)/,
    /(help you secure reliable )(mortgage loans in .+?)(?= with)/,
    /(access flexible )(home loans in [^,]+, AZ)/,
    /(access flexible )(mortgage loans in [^,]+, AZ)/,
    /(secure flexible )(mortgage loans in [^,]+, AZ)/,
    /(secure flexible )(home loans in [^,]+, AZ)/,
    /(helping buyers and homeowners secure flexible )(home loans in [^,]+, AZ)/,
    /(helping buyers, homeowners, and seniors access flexible )(mortgage loans in [^,]+, AZ)/,
    /(helping buyers, homeowners, and retirees access flexible )(mortgage loans in [^,]+, AZ)/,
    /(helping buyers, homeowners, and retirees secure flexible )(mortgage loans in [^,]+, AZ)/,
    /(compare programs from multiple wholesale lenders, giving clients access to competitive )([A-Za-z.'-]+(?: [A-Za-z.'-]+)* mortgage options)/,
  ];

  for (const pattern of p1Patterns) {
    if (
      pattern.test(result) &&
      !result.includes("**mortgage brokers") &&
      !result.includes("**mortgage lenders")
    ) {
      result = wrapPhrase(result, pattern);
      break;
    }
  }

  for (const pattern of p2Patterns) {
    result = wrapPhrase(result, pattern);
  }

  return result;
}

const stringPattern =
  /"(?:As experienced[^"]*|Looking for experienced[^"]*|Whether[^"]*|Buying[^"]*|Mortgage Brothers[^"]*|At Mortgage Brothers[^"]*|Gilbert[^"]*|With experience[^"]*)"/g;

let changeCount = 0;
content = content.replace(stringPattern, (quoted) => {
  const inner = quoted.slice(1, -1);
  const updated = boldIntroPhrases(inner);
  if (updated !== inner) changeCount++;
  return `"${updated}"`;
});

fs.writeFileSync(filePath, content);
console.log(`Updated ${changeCount} longDescription strings with ** bold markers.`);
