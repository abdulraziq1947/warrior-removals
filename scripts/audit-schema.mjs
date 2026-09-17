import fs from "node:fs";

function graphFrom(file) {
  const html = fs.readFileSync(file, "utf8");
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error("no jsonld in " + file);
  return JSON.parse(match[1]);
}

function summarize(file) {
  const data = graphFrom(file);
  const types = data["@graph"].map((n) => ({
    type: n["@type"],
    id: n["@id"],
    extra: {
      additionalType: n.additionalType,
      hasMap: n.hasMap,
      identifier: n.identifier,
      parentOrganization: n.parentOrganization,
      mainEntity: n.mainEntity,
      mainEntityOfPage: n.mainEntityOfPage,
      serviceArea: Boolean(n.serviceArea),
      areaServedOnService: n["@type"] === "Service" ? Boolean(n.areaServed) && !n.serviceArea : undefined,
      hasOfferCatalog: Boolean(n.hasOfferCatalog),
      nestedCatalogs: n.hasOfferCatalog?.itemListElement?.map((x) => x.name),
      speakable: n.speakable?.cssSelector,
      searchAction: n.potentialAction?.["@type"],
    },
  }));
  return types;
}

const home = summarize("dist/index.html");
const service = summarize("dist/house-removals-wigan/index.html");
const faq = summarize("dist/faq/index.html");
console.log(JSON.stringify({ home, service, faq }, null, 2));

const homeHtml = fs.readFileSync("dist/index.html", "utf8");
console.log("home has emdash", homeHtml.includes("\u2014"));
console.log("home has HD postcode", /HD postcode/.test(homeHtml));
console.log("T&Cs still has en-dash heading", fs.readFileSync("dist/terms-and-conditions/index.html", "utf8").includes("Warrior Removals") && fs.readFileSync("dist/terms-and-conditions/index.html", "utf8").includes("Terms and Conditions"));
