export interface RouteEntry {
  slug: string;
  title: string;
  miles: number;
  driveTime: string;
  destinationPlace: string;
  intro: string[];
  routeNotes: string;
  preparation: string;
  faqs: { q: string; a: string }[];
}

export const routes: RouteEntry[] = [
  {
    slug: "wigan-to-manchester",
    title: "Wigan to Manchester Removals",
    miles: 20,
    driveTime: "30-50 minutes off-peak",
    destinationPlace: "Manchester, Greater Manchester, UK",
    intro: [
      "Warrior Removals runs door-to-door house and office moves from Wigan to Manchester, roughly 20 road miles via the M61 or A580 depending on where you are loading in the WN postcodes and which Manchester suburb you are heading for. The same crew wraps, loads, drives and unloads; nothing goes through a depot or changes hands mid-journey.",
      "Manchester is one of the most common routes we cover from Standishgate: Didsbury and Chorlton family moves, terraced streets in Whalley Range and Levenshulme, and city-centre apartments near Deansgate. We plan an early start from Wigan to avoid peak M61 congestion around Walkden and the M60.",
      "Your belongings travel strapped and blanket-wrapped in our 3.5-tonne Luton vans with £50,000 goods-in-transit cover per vehicle load and £1 million public liability insurance, as covered in our terms. Use the cost calculator for a rough idea, then ask for a written quote after we have seen the job.",
    ],
    routeNotes:
      "The usual route is M61 south-east from Wigan, exiting for Manchester city centre, Salford, south Manchester or Trafford depending on your postcode. Rush-hour traffic can add twenty minutes; we agree realistic arrival windows and keep you updated on the day. Manchester city-centre and university-area moves often need parking dispensations or building loading-bay slots, we factor that into planning at survey stage.",
    preparation:
      "Appliances must be disconnected, defrosted and dry before we arrive. Parking at both ends should be arranged where restricted; in Wigan we advise on dispensations via Wigan Council at wigan.gov.uk. A video or in-person survey confirms volume so the quote covers the full Manchester move in one trip where possible.",
    faqs: [
      {
        q: "Can a Wigan to Manchester move be done in one day?",
        a: "Yes. Most home moves complete in a single day with an early load in Wigan and afternoon unload in Manchester. Larger properties may need two van loads or a longer day; that is confirmed at survey.",
      },
      {
        q: "How is a Manchester move priced?",
        a: "Volume, access at both addresses and crew time drive the price. We give a fixed written quote after survey; use the calculator first for a guide range only.",
      },
      {
        q: "Do you move students from Wigan to Manchester?",
        a: "Yes. End-of-term moves to Manchester student areas are common. Tell us both addresses and tenancy dates when you enquire.",
      },
      {
        q: "Will the same crew handle the whole journey?",
        a: "Always. One crew loads in Wigan and unloads in Manchester, no warehouse transfers.",
      },
    ],
  },
  {
    slug: "wigan-to-liverpool",
    title: "Wigan to Liverpool Removals",
    miles: 22,
    driveTime: "35-55 minutes off-peak",
    destinationPlace: "Liverpool, Merseyside, UK",
    intro: [
      "We move homes and offices from Wigan to Liverpool and Merseyside, about 22 miles via the M58 or A580, with the same crew from your WN postcode address to your new door. For Aigburth, Allerton, the Baltic Triangle or Liverpool city centre, we plan loading, route and parking before moving day.",
      "Liverpool moves from Wigan are popular with graduates, families relocating, and professionals commuting between Greater Manchester and Merseyside. Our crews know both ends: terraced streets around Standishgate and the Georgian terraces, dockside apartments and student houses common across Liverpool postcodes.",
      "We send a written quote after a survey, in person or by video. Goods in transit are covered at £50,000 per vehicle load with £1 million public liability. We are a household and commercial removals company, not a waste clearance service.",
    ],
    routeNotes:
      "The M58 westbound from Wigan is the main corridor; junction choice depends on whether you are delivering to north Liverpool, the city centre or south of the river towards Aigburth. Friday afternoon and Sunday evening traffic can be heavy. Liverpool city-centre access often needs building management coordination for lifts and loading bays.",
    preparation:
      "Confirm both postcodes and floor access at survey. If you are leaving a Wigan terrace with restricted parking, apply for a Wigan Council parking dispensation in good time via wigan.gov.uk. Liverpool destination parking is checked against local restrictions for your new street.",
    faqs: [
      {
        q: "How long does Wigan to Liverpool take on moving day?",
        a: "Driving is typically 35-55 minutes off-peak. Total job time includes loading and unloading; we quote the full day, not just mileage.",
      },
      {
        q: "Can you move a full house to Liverpool in one trip?",
        a: "Most two- and three-bed homes fit in one or two Luton loads. We confirm at survey and quote accordingly.",
      },
      {
        q: "Do you offer packing for Liverpool relocations?",
        a: "Yes. Full or part packing can be added. Professionally packed fragile items are covered for breakage under our terms.",
      },
      {
        q: "Is Liverpool parking sorted on your side?",
        a: "We advise what is needed at both addresses at survey. You may need to arrange dispensations or building access at the Liverpool end.",
      },
    ],
  },
  {
    slug: "wigan-to-bolton",
    title: "Wigan to Bolton Removals",
    miles: 12,
    driveTime: "25-40 minutes",
    destinationPlace: "Bolton, Greater Manchester, UK",
    intro: [
      "Bolton is one of the shortest inter-town routes we run from Wigan, roughly 12 miles across Greater Manchester. Same crew, same van, door to door: ideal for family moves, student relocations and office transfers between the two towns.",
      "We regularly move customers from Wigan suburbs to Bolton areas such as Heaton, Astley Bridge, Farnworth and the town centre. Housing on both sides includes terraces, inter-war semis and hillside properties with tight access, all surveyed before we quote.",
      "You receive a fixed written price after survey, with £50,000 goods-in-transit and £1 million public liability cover. Use the moving cost calculator for a guide estimate first.",
    ],
    routeNotes:
      "Routes typically use the A58 or M61 depending on traffic and exact postcodes. The run is short enough that many moves stay efficient even with two loads. Bolton hill streets and Wigan terraced access around Standishgate are both planned at survey.",
    preparation:
      "Book two to three weeks ahead for month-end dates. Arrange parking dispensations if either property has Wigan Council or Bolton restrictions. Disconnect and defrost appliances before the crew arrives.",
    faqs: [
      {
        q: "Is Bolton cheaper to move to than longer routes?",
        a: "Shorter drive time usually means less total crew time than a Manchester or Liverpool move, but volume and access still matter. The calculator gives a guide; survey confirms.",
      },
      {
        q: "Do you move offices from Wigan to Bolton?",
        a: "Yes. Evening and weekend office moves are available to minimise downtime.",
      },
      {
        q: "Can you do a same-week Bolton move?",
        a: "Often, especially midweek. Call 01942 565786 and we will check the diary.",
      },
      {
        q: "Do you cover Farnworth and Horwich from Wigan?",
        a: "Yes. All Bolton district postcodes are within our removals service from Wigan.",
      },
    ],
  },
  {
    slug: "wigan-to-preston",
    title: "Wigan to Preston Removals",
    miles: 18,
    driveTime: "30-45 minutes off-peak",
    destinationPlace: "Preston, Lancashire, UK",
    intro: [
      "Wigan to Preston removals cover roughly 18 miles north via the M6, from Greater Manchester into Lancashire. We load at your WN postcode address and deliver to Preston suburbs such as Fulwood, Penwortham, Ashton-on-Ribble or the city centre with one dedicated crew.",
      "Preston's mix of terraces, newer estates and city apartments presents similar access challenges to Wigan: narrow hallways, limited parking and student houses near the university. We survey both properties so the quote reflects real carry distances and stair work.",
      "Every route move includes protective wrapping, strapped loading and fixed pricing agreed before booking. Goods in transit: £50,000 per vehicle load. Public liability: £1 million.",
    ],
    routeNotes:
      "The usual route is M6 north from Wigan, exiting for Preston inner or outer districts. Peak traffic around junction 29 and the city centre can affect arrival timing; we build sensible windows into your move plan.",
    preparation:
      "Preston city streets may need careful van positioning with shuttle carries. Confirm parking at both ends at survey. Packing services are worth considering for this route to reduce stress on moving day. Apply for a Wigan Council dispensation at the collection end via wigan.gov.uk if your street is restricted.",
    faqs: [
      {
        q: "How much does Wigan to Preston cost?",
        a: "It depends on home size and access. Use the calculator, then get a fixed quote after survey; we do not quote on mileage alone.",
      },
      {
        q: "Can you move me to the Preston university area?",
        a: "Yes. Student and graduate moves to Preston are regular work for us.",
      },
      {
        q: "Is one day enough for Preston?",
        a: "Most homes yes, with an early start. Larger houses may need two loads quoted separately.",
      },
      {
        q: "Do you return to Wigan the same day?",
        a: "Yes. Our crew completes the Preston delivery and returns to base; your price includes the full round trip and unload.",
      },
    ],
  },
  {
    slug: "wigan-to-warrington",
    title: "Wigan to Warrington Removals",
    miles: 15,
    driveTime: "25-40 minutes",
    destinationPlace: "Warrington, Cheshire, UK",
    intro: [
      "Warrington is about 15 miles south of Wigan, a popular relocation route for families and professionals leaving Greater Manchester for Cheshire. Warrior Removals handles the full journey with one crew from your current home to your Warrington address.",
      "Warrington properties range from town-centre apartments to newer estates at Great Sankey, Stockton Heath and Birchwood. Wigan sends a mix of terrace, semi and village-origin moves from Standishgate, Standish and Ashton-in-Makerfield. We plan for drive time on the A49 or M6 and agree realistic schedules so you know when to expect the van.",
      "Survey first, fixed quote in writing, £50k goods-in-transit per load. Optional packing and dismantling available. We move household belongings door to door; we do not offer storage or waste clearance.",
    ],
    routeNotes:
      "Typically A49 south or M6 depending on traffic and postcode. Warrington town-centre and Stockton Heath streets can need careful van positioning. Rush hours on the A49 and around junction 21 can extend journey time.",
    preparation:
      "Even this short inter-town run benefits from early packing and clear labelling. Warrington destination moves may need council or building management coordination; share details at survey. Wigan Council parking dispensations may be needed at the Wigan end via wigan.gov.uk.",
    faqs: [
      {
        q: "Can you move a four-bed house from Wigan to Warrington in one day?",
        a: "Often yes with an early start and efficient loading. Very large homes may need two trips, confirmed at survey.",
      },
      {
        q: "Do you know Warrington access restrictions?",
        a: "We plan from your postcode and survey photos. Narrow streets and pedestrian zones are flagged before move day.",
      },
      {
        q: "Is Warrington more expensive than Bolton from Wigan?",
        a: "Extra drive time can increase total crew hours. The calculator gives a guide; survey fixes the price.",
      },
      {
        q: "Can you store items overnight?",
        a: "We do not offer storage. Overnight holds are not part of our service; we move door to door in planned windows.",
      },
    ],
  },
  {
    slug: "wigan-to-st-helens",
    title: "Wigan to St Helens Removals",
    miles: 8,
    driveTime: "20-30 minutes",
    destinationPlace: "St Helens, Merseyside, UK",
    intro: [
      "St Helens is Wigan's nearest major neighbour, only about 8 miles across the borough boundary. Short-distance inter-town moves are among our best-value jobs: minimal motorway time, maximum effort on careful loading and placement.",
      "We move families between Wigan and St Helens areas such as Eccleston, Rainhill, Thatto Heath and the town centre regularly. Both towns share terraces, hillside streets and converted mill and warehouse flats, access patterns our crews know well from Standishgate out through Ashton-in-Makerfield.",
      "Fixed written quotes, same crew throughout, £50,000 goods-in-transit and £1 million public liability. Ideal for local relocations without the cost of a long-haul move. We relocate household belongings; we are not a waste clearance service.",
    ],
    routeNotes:
      "Routes use the A49, A571 or A580 depending on postcodes and traffic. Residential streets on both sides may suit careful van positioning. The short distance makes return trips efficient if a second load is needed.",
    preparation:
      "Even short moves benefit from a survey for parking and stairs. Wigan Council and St Helens parking restrictions may both apply; we advise per street. Declutter before moving day to keep the job to one load where possible.",
    faqs: [
      {
        q: "Is Wigan to St Helens a half-day job?",
        a: "Many one- and two-bed moves are. Larger homes can take a full day; survey confirms crew hours.",
      },
      {
        q: "Can you move me from Wigan to Rainhill or Eccleston?",
        a: "Yes. All St Helens borough destinations are covered.",
      },
      {
        q: "Do you charge less for St Helens than for Manchester?",
        a: "Shorter travel usually means lower total time than longer routes. Your fixed quote reflects volume and access, not a per-mile table.",
      },
      {
        q: "Can you do a St Helens move at short notice?",
        a: "Often midweek. Call 01942 565786; local routes are easier to slot than long-distance jobs.",
      },
    ],
  },
];

export function getRoute(slug: string) {
  return routes.find((r) => r.slug === slug);
}
