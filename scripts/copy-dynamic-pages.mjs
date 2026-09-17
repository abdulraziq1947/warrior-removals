import fs from "node:fs";
import path from "node:path";

const srcRoot = "D:/0B - Removals/Huddersfield Removals/src/pages";
const destRoot = "D:/0B - Removals/Warrior Removals/src/pages";

const files = [
  "[serviceSlug].astro",
  "areas/[slug].astro",
  "routes/[slug].astro",
  "blog/[slug].astro",
  "guides/[slug].astro",
];

const pairs = [
  ["house-removals-huddersfield", "house-removals-wigan"],
  ["office-removals-huddersfield", "office-removals-wigan"],
  ["student-removals-huddersfield", "student-removals-wigan"],
  ["/piano-removals/", "/piano-removals-wigan/"],
  ["Huddersfield Removals", "Warrior Removals"],
  ["Kirklees Council", "Wigan Council"],
  ["Kirklees", "Wigan borough"],
  ["West Yorkshire", "Greater Manchester"],
  ["01484 212450", "01942 565786"],
  ["Belmont Close", "Standishgate"],
  ["Belmont Cl", "Standishgate"],
  ["HD1 5DA", "WN1 1AH"],
  ["HD1", "WN1"],
  ["Huddersfield to ", "Wigan to "],
  ["from Huddersfield", "from Wigan"],
  ["in Huddersfield", "in Wigan"],
  ["Huddersfield", "Wigan"],
];

for (const rel of files) {
  const from = path.join(srcRoot, rel);
  const to = path.join(destRoot, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  let text = fs.readFileSync(from, "utf8");
  for (const [a, b] of pairs) text = text.split(a).join(b);
  fs.writeFileSync(to, text);
  console.log("wrote", rel);
}
