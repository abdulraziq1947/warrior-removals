const BASE_KEYWORDS = [
  "Wigan removals",
  "Warrior Removals",
  "removal company Wigan",
  "Greater Manchester removals",
  "house removals",
  "office removals",
];

const PATH_KEYWORDS: Record<string, string[]> = {
  "/": ["removals Wigan", "house removals Wigan", "office removals Wigan", "piano removals", "moving company WN1"],
  "/about/": ["about Warrior Removals", "local removal company Wigan", "Standishgate WN1"],
  "/contact/": ["contact Warrior Removals", "free removal quote Wigan", "removals enquiry"],
  "/faq/": ["removals FAQ Wigan", "moving questions Wigan", "removal insurance"],
  "/reviews/": ["Warrior Removals reviews", "Google reviews Wigan removals", "customer feedback"],
  "/services/": ["removal services Wigan", "house office student removals"],
  "/areas/": ["areas covered Wigan", "Wigan removal areas", "local removals"],
  "/routes/": ["long distance removals Wigan", "UK removal routes"],
  "/guides/": ["moving guides Wigan", "house move checklist", "packing advice"],
  "/blog/": ["removals blog Wigan", "moving tips Greater Manchester"],
  "/moving-cost-calculator/": ["moving cost calculator", "removal price estimate Wigan"],
  "/privacy-policy/": ["privacy policy Warrior Removals"],
  "/terms-and-conditions/": ["removal terms and conditions", "booking terms"],
  "/house-removals-wigan/": ["house removals Wigan", "home removals WN1"],
  "/office-removals-wigan/": ["office removals Wigan", "commercial removals"],
  "/student-removals-wigan/": ["student removals Wigan", "college moves"],
  "/piano-removals-wigan/": ["piano removals Wigan", "piano moving Greater Manchester"],
  "/furniture-removals/": ["furniture removals Wigan", "sofa wardrobe moves"],
  "/packing-services/": ["packing services Wigan", "professional packing removals"],
  "/packing-materials/": ["moving boxes Wigan", "packing materials Wigan"],
  "/furniture-dismantling-and-reassembly/": ["furniture dismantling Wigan", "bed wardrobe assembly"],
  "/short-distance-moves/": ["local removals Wigan", "short distance moves"],
  "/long-distance-removals/": ["long distance removals Wigan", "UK mainland moves"],
};

function slugToLabel(slug: string): string {
  return slug.replace(/-/g, " ");
}

export function metaKeywords(path: string): string {
  if (PATH_KEYWORDS[path]) {
    return [...PATH_KEYWORDS[path], ...BASE_KEYWORDS.slice(0, 2)].slice(0, 12).join(", ");
  }

  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "areas" && segments[1]) {
    const area = slugToLabel(segments[1]);
    return [`removals ${area}`, `${area} removals`, `house removals ${area}`, "Wigan removals", "Warrior Removals"].join(", ");
  }

  if (segments[0] === "routes" && segments[1]) {
    const dest = slugToLabel(segments[1].replace(/^wigan-to-/, ""));
    return [`Wigan to ${dest} removals`, `${dest} removals from Wigan`, "long distance removals", "Warrior Removals"].join(", ");
  }

  if (segments[0] === "blog" && segments[1]) {
    return ["Wigan removals blog", slugToLabel(segments[1]), "moving tips Wigan", "Greater Manchester removals"].join(", ");
  }

  if (segments[0] === "guides" && segments[1]) {
    return ["moving guide Wigan", slugToLabel(segments[1]), "house move advice", "Wigan removals"].join(", ");
  }

  return BASE_KEYWORDS.join(", ");
}

export function trimDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}
