import fs from "node:fs";
import path from "node:path";

const html = fs.readFileSync(path.join(process.env.TEMP, "wr-terms.html"), "utf8");
const article = html.match(/<article[\s\S]*?<\/article>/i);
if (!article) {
  console.error("NO ARTICLE");
  process.exit(1);
}
const body = article[0].replace(/<script[\s\S]*?<\/script>/gi, "");
fs.writeFileSync(path.join("scripts", "terms-raw.html"), body);
console.log("extracted", body.length, "chars");
console.log(body.slice(0, 250));
