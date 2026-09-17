export interface SiteImage {
  src: string;
  alt: string;
  lat: number;
  lng: number;
  locationName: string;
}

const HQ = { lat: 53.54865, lng: -2.629635, locationName: "Wigan, Greater Manchester" };

export const images = {
  hero: {
    src: "/images/hero/hero-load.jpg",
    alt: "Warrior Removals crew loading labelled boxes into a Luton van on a Wigan street",
    ...HQ,
  },
  logo: { src: "/images/logo.svg", alt: "Warrior Removals logo", ...HQ },
  fleet: {
    src: "/images/team/fleet.jpg",
    alt: "Furniture and boxes packed inside a Warrior Removals Luton van",
    ...HQ,
  },
  wrappedArmchair: {
    src: "/images/team/wrapped-armchair.jpg",
    alt: "Household furniture packed and secured in a Warrior Removals van",
    ...HQ,
  },
  areasDefault: {
    src: "/images/areas/default.jpg",
    alt: "Packed household goods secured in a Warrior Removals van for a Wigan house move",
    ...HQ,
  },
} as const satisfies Record<string, SiteImage>;

export const serviceImages: Record<string, SiteImage> = {
  "house-removals-wigan": {
    src: "/images/services/house-removals-wigan.jpg",
    alt: "Warrior Removals crew loading boxes into a van during a Wigan house removal",
    ...HQ,
  },
  "office-removals-wigan": {
    src: "/images/services/office-removals-wigan.jpg",
    alt: "Office furniture stacked and protected inside a Warrior Removals van",
    ...HQ,
  },
  "student-removals-wigan": {
    src: "/images/services/student-removals-wigan.jpg",
    alt: "Student wardrobe and labelled boxes packed for a Wigan student removal",
    ...HQ,
  },
  "piano-removals-wigan": {
    src: "/images/services/piano-removals-wigan.jpg",
    alt: "Carefully packed load in a Warrior Removals van ready for specialist furniture moving",
    ...HQ,
  },
  "furniture-removals": {
    src: "/images/services/furniture-removals.jpg",
    alt: "Sofa and mattress loaded and secured in a Warrior Removals van",
    ...HQ,
  },
  "packing-services": {
    src: "/images/services/packing-services.jpg",
    alt: "Professionally labelled moving boxes ready for loading by Warrior Removals",
    ...HQ,
  },
  "packing-materials": {
    src: "/images/services/packing-materials.jpg",
    alt: "Stacked moving boxes and packed furniture in a Warrior Removals Luton van",
    ...HQ,
  },
  "furniture-dismantling-and-reassembly": {
    src: "/images/services/furniture-dismantling-and-reassembly.jpg",
    alt: "Mattress and bed parts packed for dismantling and reassembly on a Wigan move",
    ...HQ,
  },
  "short-distance-moves": {
    src: "/images/services/short-distance-moves.jpg",
    alt: "Fully packed Luton van for a short-distance house move in Wigan",
    ...HQ,
  },
  "long-distance-removals": {
    src: "/images/services/long-distance-removals.jpg",
    alt: "Strapped furniture load in a Warrior Removals van for a long-distance UK move",
    ...HQ,
  },
};

export function getServiceImage(slug: string): SiteImage {
  return serviceImages[slug] ?? images.hero;
}
