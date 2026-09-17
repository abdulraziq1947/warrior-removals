import fs from "node:fs";

const html = fs.readFileSync("scripts/terms-raw.html", "utf8");
const astro = `---
import BaseLayout from "../layouts/BaseLayout.astro";
import { buildSchemaGraph } from "../lib/schema/graph";
const path = "/terms-and-conditions/";
const title = "Terms and Conditions | Warrior Removals";
const description =
  "Full terms and conditions for Warrior Removals bookings: quotes, insurance, cancellations, payment, damage claims and your responsibilities on moving day.";
const schema = buildSchemaGraph({ pageType: "webpage", path, title, description, breadcrumbs: [{ name: "Terms", path }] });
const htmlContent = ${JSON.stringify(html)};
---
<BaseLayout {title} {description} {path} {schema}>
  <div class="page-hero">
    <div class="container">
      <h1>Terms and Conditions</h1>
      <p class="lede">The full terms that apply to every Warrior Removals booking, reproduced in full and unchanged from the current site.</p>
    </div>
  </div>
  <section class="section">
    <article class="container prose terms-content" set:html={htmlContent} />
  </section>
</BaseLayout>
`;
fs.writeFileSync("src/pages/terms-and-conditions.astro", astro);
console.log("wrote terms page", astro.length);
