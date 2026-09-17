import { business } from "../../data/business";
import { services } from "../../data/services";
import { absoluteUrl, siteUrl } from "../site";

// Permanent @id anchors. Do not change after first deploy (skill Principle 7).
const LOCAL_ID = `${siteUrl}/#localbusiness`;
const WEBSITE_ID = `${siteUrl}/#website`;
const ORG_ID = `${siteUrl}/#organization`;
const LOGO_ID = `${siteUrl}/#logo`;
const IMAGE_16x9_ID = `${siteUrl}/#image-16x9`;
const IMAGE_4x3_ID = `${siteUrl}/#image-4x3`;
const IMAGE_1x1_ID = `${siteUrl}/#image-1x1`;
const CATALOG_ID = `${siteUrl}/#offercatalog`;

const SCHEMA_PUBLISHED = "2026-09-17";
const SCHEMA_MODIFIED = "2026-09-17";

export type SchemaPageType =
  | "home"
  | "reviews"
  | "service"
  | "area"
  | "article"
  | "webpage"
  | "faq"
  | "guide";

export interface GraphInput {
  pageType: SchemaPageType;
  path: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
  service?: { name: string; slug: string; description: string };
  place?: { name: string; slug: string; latitude: number; longitude: number; landmark: string };
  article?: { headline: string; datePublished: string; dateModified?: string };
  image?: { src: string; alt: string; lat: number; lng: number; locationName: string };
  includeRating?: boolean;
  faqs?: { q: string; a: string }[];
  howToSteps?: { name: string; text: string }[];
  howToName?: string;
}

function openingHoursSpec() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: business.hours.days,
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  ];
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  };
}

function geoCircle() {
  return {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    geoRadius: "25000",
  };
}

const areaServedCities = [
  { "@type": "City", name: "Wigan", sameAs: "https://www.wikidata.org/wiki/Q164161" },
  { "@type": "AdministrativeArea", name: "Metropolitan Borough of Wigan", sameAs: "https://www.wikidata.org/wiki/Q208211" },
  { "@type": "AdministrativeArea", name: "Greater Manchester", sameAs: "https://www.wikidata.org/wiki/Q23099" },
  { "@type": "City", name: "Leigh", sameAs: "https://www.wikidata.org/wiki/Q2588021" },
  { "@type": "City", name: "Atherton", sameAs: "https://www.wikidata.org/wiki/Q2038660" },
  { "@type": "City", name: "Hindley", sameAs: "https://www.wikidata.org/wiki/Q2341735" },
  { "@type": "City", name: "Standish", sameAs: "https://www.wikidata.org/wiki/Q2470472" },
  { "@type": "City", name: "Ashton-in-Makerfield", sameAs: "https://www.wikidata.org/wiki/Q2043238" },
  { "@type": "City", name: "Golborne", sameAs: "https://www.wikidata.org/wiki/Q2328489" },
  { "@type": "City", name: "Orrell", sameAs: "https://www.wikidata.org/wiki/Q2346323" },
];

const CATALOG_GROUPS = [
  {
    name: "Domestic removals",
    slugs: [
      "house-removals-wigan",
      "student-removals-wigan",
      "piano-removals-wigan",
      "furniture-removals",
      "short-distance-moves",
      "long-distance-removals",
    ],
  },
  {
    name: "Office removals",
    slugs: ["office-removals-wigan"],
  },
  {
    name: "Packing and assembly",
    slugs: ["packing-services", "packing-materials", "furniture-dismantling-and-reassembly"],
  },
] as const;

function offerForService(slug: string) {
  const svc = services.find((item) => item.slug === slug);
  if (!svc) return null;
  return {
    "@type": "Offer",
    url: absoluteUrl(`/${svc.slug}/`),
    availability: "https://schema.org/InStock",
    eligibleRegion: {
      "@type": "Country",
      name: "United Kingdom",
      sameAs: "https://www.wikidata.org/wiki/Q145",
    },
    itemOffered: {
      "@type": "Service",
      name: svc.title,
      serviceType: svc.title,
      description: svc.short,
      url: absoluteUrl(`/${svc.slug}/`),
      provider: { "@id": LOCAL_ID },
      hoursAvailable: openingHoursSpec()[0],
      availableLanguage: "en-GB",
      areaServed: geoCircle(),
    },
  };
}

function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    "@id": CATALOG_ID,
    name: "Warrior Removals services",
    itemListElement: CATALOG_GROUPS.map((group) => ({
      "@type": "OfferCatalog",
      name: group.name,
      itemListElement: group.slugs.map(offerForService).filter(Boolean),
    })),
  };
}

function aggregateRatingNode() {
  return {
    "@type": "AggregateRating",
    ratingValue: business.rating.display,
    reviewCount: String(business.rating.count),
    ratingCount: String(business.rating.count),
    bestRating: "5",
    worstRating: "1",
  };
}

function localBusinessNode(includeRating: boolean) {
  const node: Record<string, unknown> = {
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": LOCAL_ID,
    name: business.name,
    legalName: business.legalName,
    additionalType: ["https://www.wikidata.org/wiki/Q2750223"],
    disambiguatingDescription: business.disambiguatingDescription,
    description:
      "Independent house, office, student and piano removal company based in Wigan WN1. Serving Wigan, Greater Manchester and the UK mainland with 3.5-tonne Luton vans, fixed written quotes, and £50,000 goods-in-transit cover per load.",
    url: siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    logo: { "@id": LOGO_ID },
    image: [{ "@id": IMAGE_16x9_ID }, { "@id": IMAGE_4x3_ID }, { "@id": IMAGE_1x1_ID }],
    priceRange: business.priceRange,
    keywords:
      "removals Wigan, house removals Wigan, office removals Wigan, piano removals, moving company WN1, Warrior Removals",
    parentOrganization: { "@id": ORG_ID },
    brand: {
      "@type": "Brand",
      name: business.name,
      logo: { "@id": LOGO_ID },
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Google Place CID",
        propertyID: "CID",
        value: business.gmbCid,
      },
    ],
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.hasMap,
    mainEntityOfPage: { "@id": `${absoluteUrl("/") }#webpage` },
    areaServed: areaServedCities,
    serviceArea: {
      ...geoCircle(),
      containsPlace: [
        { "@type": "City", name: "Wigan", sameAs: "https://www.wikidata.org/wiki/Q164161" },
        { "@type": "City", name: "Leigh", sameAs: "https://www.wikidata.org/wiki/Q2588021" },
        { "@type": "City", name: "Atherton", sameAs: "https://www.wikidata.org/wiki/Q2038660" },
        { "@type": "City", name: "Hindley", sameAs: "https://www.wikidata.org/wiki/Q2341735" },
        { "@type": "City", name: "Standish", sameAs: "https://www.wikidata.org/wiki/Q2470472" },
        { "@type": "City", name: "Ashton-in-Makerfield", sameAs: "https://www.wikidata.org/wiki/Q2043238" },
        { "@type": "City", name: "Golborne", sameAs: "https://www.wikidata.org/wiki/Q2328489" },
        { "@type": "City", name: "Orrell", sameAs: "https://www.wikidata.org/wiki/Q2346323" },
        { "@type": "City", name: "Billinge", sameAs: "https://www.wikidata.org/wiki/Q1612193" },
        { "@type": "City", name: "Newton-le-Willows", sameAs: "https://www.wikidata.org/wiki/Q1984563" },
      ],
    },
    openingHoursSpecification: openingHoursSpec(),
    currenciesAccepted: "GBP",
    paymentAccepted: ["Cash", "Bank Transfer", "Credit Card", "Debit Card"],
    publicAccess: true,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.phoneE164,
        email: business.email,
        availableLanguage: "English",
        hoursAvailable: openingHoursSpec()[0],
        areaServed: areaServedCities,
      },
    ],
    sameAs: business.sameAs,
    knowsAbout: [
      "House removals in Wigan",
      "Office removals in Wigan",
      "Student removals for Wigan and Leigh College",
      "Piano removals",
      "Furniture removals",
      "Professional packing services",
      "Furniture dismantling and reassembly",
      "Long-distance UK removals",
      "Short-distance moves in WN postcodes",
      "3.5-tonne Luton van crews",
      "Goods-in-transit insurance",
      "Wigan Council parking dispensations",
      "Moving from Wigan to Manchester",
      "Moving from Wigan to Liverpool",
      "Moving from Wigan to Bolton",
      "Moving from Wigan to Preston",
      "Moving from Wigan to Warrington",
      "Moving from Wigan to St Helens",
      "Greater Manchester removals",
      "Fixed-price removal quotes",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fixed written quotes", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free pre-move survey", value: true },
      { "@type": "LocationFeatureSpecification", name: "7-day availability", value: true },
      { "@type": "LocationFeatureSpecification", name: "Goods-in-transit insurance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Public liability insurance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Professional packing available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Furniture dismantling available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Piano removal specialist", value: true },
    ],
    hasOfferCatalog: offerCatalog(),
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: "Get a free removal quote",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/contact/`,
          inLanguage: "en-GB",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Removal booking quote",
        },
      },
      {
        "@type": "CommunicateAction",
        name: "Call Warrior Removals",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `tel:${business.phoneE164}`,
        },
      },
    ],
  };

  if (includeRating) {
    node.aggregateRating = aggregateRatingNode();
  }

  return node;
}

function imageObjects() {
  const base = `${siteUrl}/images/hero/hero-load.jpg`;
  const shared = {
    contentUrl: base,
    url: base,
    creator: { "@id": ORG_ID },
    copyrightNotice: `© ${new Date().getFullYear()} Warrior Removals`,
    caption: "Warrior Removals 3.5-tonne Luton van on a residential street in Wigan, Greater Manchester",
    contentLocation: {
      "@type": "Place",
      name: "Wigan, Greater Manchester",
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    },
  };
  return [
    { "@type": "ImageObject", "@id": IMAGE_16x9_ID, ...shared, width: "1200", height: "675" },
    { "@type": "ImageObject", "@id": IMAGE_4x3_ID, ...shared, width: "1200", height: "900" },
    { "@type": "ImageObject", "@id": IMAGE_1x1_ID, ...shared, width: "1200", height: "1200" },
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${siteUrl}/images/logo.svg`,
      contentUrl: `${siteUrl}/images/logo.svg`,
      caption: "Warrior Removals logo",
      creator: { "@id": ORG_ID },
    },
  ];
}

export function buildSchemaGraph(input: GraphInput) {
  const pageUrl = absoluteUrl(input.path);
  const includeRating = input.includeRating ?? (input.pageType === "home" || input.pageType === "reviews");
  const webpageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const placeId = `${pageUrl}#place`;
  const articleId = `${pageUrl}#article`;
  const faqId = `${pageUrl}#faq`;
  const howToId = `${pageUrl}#howto`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  let primaryEntityId = LOCAL_ID;
  if (input.service) primaryEntityId = serviceId;
  else if (input.place) primaryEntityId = placeId;
  else if (input.article) primaryEntityId = articleId;
  else if (input.pageType === "faq" && input.faqs?.length) primaryEntityId = faqId;
  else if (input.pageType === "guide" && input.howToSteps?.length) primaryEntityId = howToId;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: business.name,
      legalName: business.legalName,
      url: siteUrl,
      telephone: business.phoneE164,
      email: business.email,
      address: postalAddress(),
      logo: { "@id": LOGO_ID },
      image: { "@id": IMAGE_16x9_ID },
      sameAs: business.sameAs,
      subOrganization: { "@id": LOCAL_ID },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.phoneE164,
        email: business.email,
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteUrl,
      name: business.name,
      description:
        "Warrior Removals. House, office, student and piano removals across Wigan, Greater Manchester and the UK mainland.",
      publisher: { "@id": ORG_ID },
      inLanguage: "en-GB",
    },
    ...imageObjects(),
    localBusinessNode(includeRating),
  ];

  const webPageNode: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": LOCAL_ID },
    mainEntity: { "@id": primaryEntityId },
    inLanguage: "en-GB",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".lede"],
    },
    mentions: [
      { "@type": "Place", name: "Wigan", sameAs: "https://www.wikidata.org/wiki/Q164161" },
      { "@type": "Place", name: "Metropolitan Borough of Wigan", sameAs: "https://www.wikidata.org/wiki/Q208211" },
      { "@type": "Place", name: "Greater Manchester", sameAs: "https://www.wikidata.org/wiki/Q23099" },
      { "@type": "Organization", name: "Wigan Council", sameAs: "https://www.wikidata.org/wiki/Q920430" },
    ],
    datePublished: input.article?.datePublished ?? SCHEMA_PUBLISHED,
    dateModified: input.article?.dateModified ?? SCHEMA_MODIFIED,
  };

  if (input.breadcrumbs.length) {
    webPageNode.breadcrumb = { "@id": breadcrumbId };
  }

  if (input.image) {
    const imageId = `${pageUrl}#primaryimage`;
    webPageNode.primaryImageOfPage = { "@id": imageId };
    graph.push({
      "@type": "ImageObject",
      "@id": imageId,
      url: absoluteUrl(input.image.src),
      contentUrl: absoluteUrl(input.image.src),
      caption: input.image.alt,
      creator: { "@id": ORG_ID },
      inLanguage: "en-GB",
      contentLocation: {
        "@type": "Place",
        name: input.image.locationName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: input.image.lat,
          longitude: input.image.lng,
        },
      },
    });
  }

  const hasPart: Record<string, unknown>[] = [];

  if (input.service) {
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: input.service.name,
      serviceType: input.service.name,
      description: input.service.description,
      url: pageUrl,
      provider: { "@id": LOCAL_ID },
      mainEntityOfPage: { "@id": webpageId },
      hoursAvailable: openingHoursSpec()[0],
      serviceOutput: "Completed relocation of household or commercial goods",
      availableLanguage: "en-GB",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${siteUrl}/contact/`,
        servicePhone: {
          "@type": "ContactPoint",
          telephone: business.phoneE164,
          contactType: "customer service",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Wigan",
        sameAs: `https://www.wikidata.org/wiki/${business.wikidata.wigan}`,
      },
      audience: {
        "@type": "PeopleAudience",
        audienceType: "Households and businesses relocating within or from Wigan and Greater Manchester",
        geographicArea: {
          "@type": "City",
          name: "Wigan",
          sameAs: "https://www.wikidata.org/wiki/Q164161",
        },
      },
    });
  }

  if (input.place) {
    graph.push({
      "@type": "Place",
      "@id": placeId,
      name: input.place.name,
      description: `Removal services in ${input.place.name}, Wigan, from ${input.place.landmark}.`,
      mainEntityOfPage: { "@id": webpageId },
      geo: {
        "@type": "GeoCoordinates",
        latitude: input.place.latitude,
        longitude: input.place.longitude,
      },
      containedInPlace: {
        "@type": "City",
        name: "Wigan",
        sameAs: `https://www.wikidata.org/wiki/${business.wikidata.wigan}`,
      },
    });
  }

  if (input.article) {
    graph.push({
      "@type": "BlogPosting",
      "@id": articleId,
      headline: input.article.headline,
      datePublished: input.article.datePublished,
      dateModified: input.article.dateModified ?? input.article.datePublished,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": webpageId },
      about: { "@id": LOCAL_ID },
      inLanguage: "en-GB",
    });
  }

  if (input.faqs && input.faqs.length > 0) {
    const faqNode: Record<string, unknown> = {
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: input.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };
    if (input.pageType === "faq") {
      faqNode.mainEntityOfPage = { "@id": webpageId };
      graph.push(faqNode);
    } else {
      hasPart.push(faqNode);
    }
  }

  if (input.howToSteps && input.howToSteps.length > 0) {
    const howToNode: Record<string, unknown> = {
      "@type": "HowTo",
      "@id": howToId,
      name: input.howToName ?? input.title,
      step: input.howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    };
    if (input.pageType === "guide") {
      howToNode.mainEntityOfPage = { "@id": webpageId };
      graph.push(howToNode);
    } else {
      hasPart.push(howToNode);
    }
  }

  if (hasPart.length) {
    webPageNode.hasPart = hasPart;
  }

  graph.push(webPageNode);

  if (input.breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        ...input.breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
