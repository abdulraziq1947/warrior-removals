import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");
const extra = [path.resolve("public/llms.txt")];
const skipNames = new Set(["terms-and-conditions.astro"]);

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else if (/\.(astro|md|ts|txt)$/.test(name) && !skipNames.has(name)) out.push(full);
  }
  return out;
}

const files = [...walk(root), ...extra.filter((f) => fs.existsSync(f))];
let changed = 0;

for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  let text = before;

  // Em dashes used as clause breaks (classic AI tell)
  text = text.replace(/\s+\u2014\s+/g, ", ");
  text = text.replace(/\u2014/g, ", ");

  // En dashes to ASCII hyphens (ranges and leftover clause dashes)
  text = text.replace(/\u2013/g, "-");

  // Awkward Kirklees leftover phrasing
  text = text.replace(/the Wigan borough/g, "Wigan and the surrounding towns");

  if (text !== before) {
    fs.writeFileSync(file, text);
    changed += 1;
    console.log("updated", path.relative(process.cwd(), file));
  }
}

console.log(`changed ${changed} files`);
