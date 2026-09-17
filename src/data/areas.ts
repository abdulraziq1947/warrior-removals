export interface AreaEntry {
  slug: string;
  name: string;
  landmark: string;
  latitude: number;
  longitude: number;
}

export const areas: AreaEntry[] = [
  {
    "slug": "wigan-town-centre",
    "name": "Wigan Town Centre",
    "landmark": "Wigan Parish Church",
    "latitude": 53.5461,
    "longitude": -2.6326
  },
  {
    "slug": "standish",
    "name": "Standish",
    "landmark": "St Wilfrid's Church",
    "latitude": 53.586,
    "longitude": -2.664
  },
  {
    "slug": "shevington",
    "name": "Shevington",
    "landmark": "Shevington Library",
    "latitude": 53.572,
    "longitude": -2.693
  },
  {
    "slug": "hindley",
    "name": "Hindley",
    "landmark": "Hindley Town Centre",
    "latitude": 53.533,
    "longitude": -2.58
  },
  {
    "slug": "hindley-green",
    "name": "Hindley Green",
    "landmark": "Hindley Green",
    "latitude": 53.524,
    "longitude": -2.547
  },
  {
    "slug": "leigh",
    "name": "Leigh",
    "landmark": "Leigh Town Hall",
    "latitude": 53.496,
    "longitude": -2.515
  },
  {
    "slug": "atherton",
    "name": "Atherton",
    "landmark": "Atherton Market",
    "latitude": 53.523,
    "longitude": -2.49
  },
  {
    "slug": "ashton-in-makerfield",
    "name": "Ashton-in-Makerfield",
    "landmark": "Ashton Cross",
    "latitude": 53.487,
    "longitude": -2.638
  },
  {
    "slug": "golborne",
    "name": "Golborne",
    "landmark": "Golborne Park",
    "latitude": 53.476,
    "longitude": -2.596
  },
  {
    "slug": "platt-bridge",
    "name": "Platt Bridge",
    "landmark": "Platt Bridge Library",
    "latitude": 53.524,
    "longitude": -2.598
  },
  {
    "slug": "ince",
    "name": "Ince-in-Makerfield",
    "landmark": "Ince Green Lane",
    "latitude": 53.538,
    "longitude": -2.612
  },
  {
    "slug": "pemberton",
    "name": "Pemberton",
    "landmark": "Pemberton Station",
    "latitude": 53.53,
    "longitude": -2.668
  },
  {
    "slug": "orrell",
    "name": "Orrell",
    "landmark": "Orrell Library",
    "latitude": 53.532,
    "longitude": -2.709
  },
  {
    "slug": "billinge",
    "name": "Billinge",
    "landmark": "Billinge Beacon",
    "latitude": 53.514,
    "longitude": -2.708
  },
  {
    "slug": "aspull",
    "name": "Aspull",
    "landmark": "Aspull Village",
    "latitude": 53.564,
    "longitude": -2.585
  },
  {
    "slug": "winstanley",
    "name": "Winstanley",
    "landmark": "Winstanley College",
    "latitude": 53.524,
    "longitude": -2.685
  },
  {
    "slug": "scholes",
    "name": "Scholes",
    "landmark": "Scholes",
    "latitude": 53.548,
    "longitude": -2.618
  },
  {
    "slug": "beech-hill",
    "name": "Beech Hill",
    "landmark": "Beech Hill",
    "latitude": 53.558,
    "longitude": -2.648
  },
  {
    "slug": "swinley",
    "name": "Swinley",
    "landmark": "Mesnes Park",
    "latitude": 53.551,
    "longitude": -2.635
  },
  {
    "slug": "whelley",
    "name": "Whelley",
    "landmark": "Whelley",
    "latitude": 53.555,
    "longitude": -2.618
  },
  {
    "slug": "poolstock",
    "name": "Poolstock",
    "landmark": "Poolstock",
    "latitude": 53.536,
    "longitude": -2.637
  },
  {
    "slug": "goose-green",
    "name": "Goose Green",
    "landmark": "Goose Green",
    "latitude": 53.528,
    "longitude": -2.655
  },
  {
    "slug": "bryn",
    "name": "Bryn",
    "landmark": "Bryn Station",
    "latitude": 53.5,
    "longitude": -2.648
  },
  {
    "slug": "haydock",
    "name": "Haydock",
    "landmark": "Haydock Park",
    "latitude": 53.467,
    "longitude": -2.671
  },
  {
    "slug": "newton-le-willows",
    "name": "Newton-le-Willows",
    "landmark": "Newton-le-Willows Station",
    "latitude": 53.453,
    "longitude": -2.614
  },
  {
    "slug": "tyldesley",
    "name": "Tyldesley",
    "landmark": "Tyldesley Town Centre",
    "latitude": 53.514,
    "longitude": -2.467
  },
  {
    "slug": "abram",
    "name": "Abram",
    "landmark": "Abram Village",
    "latitude": 53.508,
    "longitude": -2.588
  },
  {
    "slug": "marus-bridge",
    "name": "Marus Bridge",
    "landmark": "Marus Bridge",
    "latitude": 53.518,
    "longitude": -2.655
  },
  {
    "slug": "hawkley-hall",
    "name": "Hawkley Hall",
    "landmark": "Hawkley Hall",
    "latitude": 53.526,
    "longitude": -2.652
  },
  {
    "slug": "newtown",
    "name": "Newtown",
    "landmark": "Newtown Wigan",
    "latitude": 53.541,
    "longitude": -2.655
  }
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
