import fs from "node:fs";
import path from "node:path";

const roots = ["src/lib", "src/pages", "src/components", "src/layouts"];

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|astro|css)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const files = roots.flatMap((r) => (fs.existsSync(r) ? walk(r) : []));

const pairs = [
  ["house-removals-huddersfield", "house-removals-wigan"],
  ["office-removals-huddersfield", "office-removals-wigan"],
  ["student-removals-huddersfield", "student-removals-wigan"],
  ["/piano-removals/", "/piano-removals-wigan/"],
  ["Huddersfield Removals", "Warrior Removals"],
  ["huddersfieldremoval.co.uk", "wiganremoval.co.uk"],
  ["Belmont Close", "Standishgate"],
  ["Belmont Cl", "Standishgate"],
  ["Kirklees Council", "Wigan Council"],
  ["Kirklees", "the Wigan borough"],
  ["West Yorkshire", "Greater Manchester"],
  ["01484 212450", "01942 565786"],
  ["01484212450", "01942565786"],
  ["HD1 5DA", "WN1 1AH"],
  ["HD1", "WN1"],
  ["31 area", "30 area"],
  ["31 local", "30 local"],
  ["All 31", "All 30"],
  ["31 Areas", "30 Areas"],
  ["hero-removals-huddersfield.jpg", "hero-load.jpg"],
  ["business.wikidata.huddersfield", "business.wikidata.wigan"],
  ["Q201812", "Q164161"],
  ["Q1290176", "Q208211"],
  ["Q23083", "Q23099"],
  ["Q6421330", "Q920430"],
  ['name: "Huddersfield"', 'name: "Wigan"'],
  ["Huddersfield's", "Wigan's"],
  ["Huddersfield,", "Wigan,"],
  ["Huddersfield.", "Wigan."],
  ["Huddersfield ", "Wigan "],
  [" Huddersfield", " Wigan"],
  ["in Huddersfield", "in Wigan"],
  ["from Huddersfield", "from Wigan"],
  ["to Huddersfield", "to Wigan"],
  ["across Huddersfield", "across Wigan"],
  ["@fontsource-variable/inter", "@fontsource-variable/outfit"],
  ['data-primary="1e4d7b" data-accent="e8a317"', 'data-primary="14161a" data-accent="e85d04"'],
  ["Moving West Yorkshire", "Moving Greater Manchester"],
  ["Call Huddersfield Removals", "Call Warrior Removals"],
  ["content=\"#12314e\"", "content=\"#14161a\""],
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  const orig = text;
  for (const [a, b] of pairs) text = text.split(a).join(b);
  if (text !== orig) {
    fs.writeFileSync(file, text);
    console.log("updated", file);
  }
}
