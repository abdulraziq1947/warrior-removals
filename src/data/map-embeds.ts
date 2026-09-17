const KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_EMBED_KEY ?? "";
const DEST = "Warrior Removals, 61-69 Standishgate, Wigan WN1 1AH";

export const mapEmbeds = {
  "office-place":
    "https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d37928.17149212861!2d-2.6296350000000004!3d53.54865!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718de269ab1cf1%3A0xbdd8ffaf46f6e10!2sWarrior%20Removals!5e0!3m2!1sen!2sus!4v1789640481094!5m2!1sen!2sus",
} as const;

export type MapEmbedId = string;

export function directionsEmbed(origin: string): string {
  const params = new URLSearchParams({
    key: KEY,
    origin,
    destination: DEST,
    mode: "driving",
  });
  return `https://www.google.com/maps/embed/v1/directions?${params.toString()}`;
}

export function getMapEmbed(id: MapEmbedId): string {
  if (id === "office-place") return mapEmbeds["office-place"];
  if (id.startsWith("route-")) {
    const dest = id.replace(/^route-/, "").replace(/-/g, " ");
    return directionsEmbed(`${dest}, UK`);
  }
  if (id.startsWith("area-")) {
    const place = id.replace(/^area-/, "").replace(/-/g, " ");
    return directionsEmbed(`${place}, Wigan`);
  }
  return mapEmbeds["office-place"];
}

export function routeEmbedId(routeSlug: string): MapEmbedId {
  return routeSlug.replace(/^wigan-to-/, "route-");
}

export function areaEmbedId(areaSlug: string): MapEmbedId {
  return `area-${areaSlug}`;
}
