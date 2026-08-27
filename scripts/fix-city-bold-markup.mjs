#!/usr/bin/env node
/**
 * Add ** bold markup ONLY within longDescriptions and getInTouchParagraphs arrays.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../lib/liveCityPageContent.ts");
const lines = fs.readFileSync(filePath, "utf8").split("\n");

const TARGET_KEYS = new Set(["longDescriptions", "getInTouchParagraphs"]);
let activeKey = null;
let arrayDepth = 0;

function boldIntroLine(text) {
  let result = text;
  result = result.replace(
    /(As experienced )(?!\*\*)(mortgage brokers in [^"]+?, AZ)/,
    "$1**$2**",
  );
  result = result.replace(
    /(Looking for )(?!\*\*)(mortgage brokers in [^"]+? AZ)\?/,
    "$1**$2**?",
  );
  result = result.replace(
    /(secure (?:dependable |reliable |flexible )?)(?!\*\*)(mortgages in [^"]+?)(?= with| and|,|\.)/,
    "$1**$2**",
  );
  result = result.replace(
    /(secure (?:dependable |reliable |flexible )?)(?!\*\*)(mortgage loans in [^"]+?(?: Arizona)?)(?= with| and|,|\.)/,
    "$1**$2**",
  );
  return result;
}

function boldServicesLine(text) {
  let result = text;
  result = result.replace(
    /(Our )(?!\*\*)([A-Za-z][A-Za-z0-9' -]* mortgage)( services)/,
    "$1**$2**$3",
  );
  result = result.replace(
    /(dependable )(?!\*\*)([A-Za-z][A-Za-z0-9' -]* mortgage)( solutions)/,
    "$1**$2**$3",
  );
  result = result.replace(
    /(multiple )(?!\*\*)([A-Za-z][A-Za-z0-9' -]* mortgage)( lenders)/,
    "$1**$2**$3",
  );
  result = result.replace(
    /(dependable )(?!\*\*)(mortgages in [^"]+?)(?= supported|\.)/,
    "$1**$2**",
  );
  return result;
}

const output = lines.map((line) => {
  const keyMatch = line.match(/^\s*(longDescriptions|getInTouchParagraphs):\s*\[/);
  if (keyMatch) {
    activeKey = keyMatch[1];
    arrayDepth = 1;
    return line;
  }

  if (activeKey) {
    arrayDepth += (line.match(/\[/g) || []).length;
    arrayDepth -= (line.match(/\]/g) || []).length;

    if (line.includes('"')) {
      const updated = TARGET_KEYS.has(activeKey)
        ? activeKey === "getInTouchParagraphs"
          ? boldServicesLine(boldIntroLine(line))
          : boldIntroLine(line)
        : line;

      if (arrayDepth <= 0) activeKey = null;
      return updated;
    }

    if (arrayDepth <= 0) activeKey = null;
  }

  return line;
});

fs.writeFileSync(filePath, output.join("\n"));
console.log("Updated longDescriptions + getInTouchParagraphs bold markup");
