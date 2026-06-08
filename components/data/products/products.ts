// Define types for Related Products, Variations, and the Main Product
export type RelatedProduct = {
  src: string;
  name: string;
  description: string;
};

export type Variation = {
  [x: string]: string;
  src: string;
  alt: string;
};

export type Product = {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: string;
  shortdescription: string;
  category: string;
  longdescription: string;
  variations: Variation[];
  relatedproducts: RelatedProduct[];
  quantity: number;
  weight: string;
};

// Product List
export const products: Product[] = [
  {
    "id": 1,
    "src": "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
    "alt": "AKHROT GIRI",
    "title": "AKHROT GIRI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "AKHROT",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
        "alt": "AKHROT GIRI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
        "name": "BLUEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "name": "RED SEEDLESS DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KISHMISH.webp",
        "name": "PAAN KISHMISH",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 2,
    "src": "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
    "alt": "AKHROT WHOLE BIG",
    "title": "AKHROT WHOLE BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "AKHROT",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
        "alt": "AKHROT WHOLE BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/BABY LEMON.webp",
        "name": "BABY LEMON",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "name": "PINE NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "name": "KAJU LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 3,
    "src": "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
    "alt": "AKHROT WHOLE",
    "title": "AKHROT WHOLE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "AKHROT",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        "alt": "AKHROT WHOLE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
        "name": "AKHROT GIRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
        "name": "DRY GREEN PAAN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "name": "MANGO SLICE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 4,
    "src": "/dryfruite product images/Anjeer/ANJEER BIG.webp",
    "alt": "ANJEER BIG",
    "title": "ANJEER BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "ANJEER",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        "alt": "ANJEER BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/MAMRA LARGE.webp",
        "name": "MAMRA LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/LONG.webp",
        "name": "LONG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
        "name": "ROSE MALAI BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 5,
    "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
    "alt": "ANJEER JUMBO PREMIUM",
    "title": "ANJEER JUMBO PREMIUM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "ANJEER",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        "alt": "ANJEER JUMBO PREMIUM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/WATERMELON SEEDS.webp",
        "name": "WATERMELON SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ALMOND MOUTH FRESHNER.webp",
        "name": "ALMOND MOUTH FRESHNER",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/DALCHINI.webp",
        "name": "DALCHINI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 6,
    "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
    "alt": "ANJEER LARGE",
    "title": "ANJEER LARGE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "ANJEER",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "alt": "ANJEER LARGE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/CRANEBERRY KAJU.webp",
        "name": "CRANEBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KESAR BABY 1GM.webp",
        "name": "KESAR BABY 1GM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/STRAWBERRY.webp",
        "name": "STRAWBERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 7,
    "src": "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
    "alt": "ANJEER REGULAR",
    "title": "ANJEER REGULAR",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "ANJEER",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        "alt": "ANJEER REGULAR"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/CRANEBERRY KAJU.webp",
        "name": "CRANEBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "name": "ANARDANA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU MEDIUM.webp",
        "name": "KAJU MEDIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU JUMBO SPECIAL.webp",
        "name": "KAJU JUMBO SPECIAL",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 8,
    "src": "/dryfruite product images/Apricot/KHURBANI.webp",
    "alt": "KHURBANI",
    "title": "KHURBANI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "APRICOT",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Apricot/KHURBANI.webp",
        "alt": "KHURBANI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "name": "PINEAPPLE RING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
        "name": "ORANGE SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 9,
    "src": "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    "alt": "TURKEL APRICOT",
    "title": "TURKEL APRICOT",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "APRICOT",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        "alt": "TURKEL APRICOT"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Pista/PLAIN PISTA.webp",
        "name": "PLAIN PISTA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
        "name": "FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        "name": "AKHROT WHOLE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 10,
    "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
    "alt": "AMERICAN BADAM MOTI",
    "title": "AMERICAN BADAM MOTI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "alt": "AMERICAN BADAM MOTI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MIX NUTS.webp",
        "name": "MIX NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
        "name": "PAAN KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH PREMIUM SUNDEKHANI.webp",
        "name": "KISHMISH PREMIUM SUNDEKHANI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "name": "MANGO SLICE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 11,
    "src": "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
    "alt": "AMERICAN BADAM REGULAR",
    "title": "AMERICAN BADAM REGULAR",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        "alt": "AMERICAN BADAM REGULAR"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
        "name": "GRANOLA MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
        "name": "ROSE MALAI BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "name": "BLACK KISHMISH SEED BIG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 12,
    "src": "/dryfruite product images/Badam/BADAM CUTTING.webp",
    "alt": "BADAM CUTTING",
    "title": "BADAM CUTTING",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/BADAM CUTTING.webp",
        "alt": "BADAM CUTTING"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA REGULAR.webp",
        "name": "MUNNAKA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        "name": "AMERICAN BADAM REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
        "name": "SUGARLESS CRANEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 13,
    "src": "/dryfruite product images/Badam/MAMRA BIG.webp",
    "alt": "MAMRA BIG",
    "title": "MAMRA BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/MAMRA BIG.webp",
        "alt": "MAMRA BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/DALCHINI.webp",
        "name": "DALCHINI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PECAN NUT.webp",
        "name": "PECAN NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MIX NUTS.webp",
        "name": "MIX NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN CHURI.webp",
        "name": "PAAN CHURI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 14,
    "src": "/dryfruite product images/Badam/MAMRA JUMBO SPECIAL.webp",
    "alt": "MAMRA JUMBO SPECIAL",
    "title": "MAMRA JUMBO SPECIAL",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/MAMRA JUMBO SPECIAL.webp",
        "alt": "MAMRA JUMBO SPECIAL"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "name": "AJWAIN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN FARD.webp",
        "name": "DATE CROWN FARD",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE COIN.webp",
        "name": "PINEAPPLE COIN",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 15,
    "src": "/dryfruite product images/Badam/MAMRA LARGE.webp",
    "alt": "MAMRA LARGE",
    "title": "MAMRA LARGE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/MAMRA LARGE.webp",
        "alt": "MAMRA LARGE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "name": "AKHROT OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA PREMIUM.webp",
        "name": "MUNNAKA PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
        "name": "SUNFLOWER SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 16,
    "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
    "alt": "MAMRA REGULAR",
    "title": "MAMRA REGULAR",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "alt": "MAMRA REGULAR"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Nuts/PECAN NUT.webp",
        "name": "PECAN NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "name": "ANARDANA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
        "name": "GRANOLA MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KESAR BABY 1GM.webp",
        "name": "KESAR BABY 1GM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 17,
    "src": "/dryfruite product images/Badam/MAMRA TAANCH.webp",
    "alt": "MAMRA TAANCH",
    "title": "MAMRA TAANCH",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BADAM",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        "alt": "MAMRA TAANCH"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/JAVITRI.webp",
        "name": "JAVITRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        "name": "ANJEER BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PAPAYA STICK.webp",
        "name": "PAPAYA STICK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 18,
    "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
    "alt": "BLACK KISHMISH SEED BIG",
    "title": "BLACK KISHMISH SEED BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BLACK KISHMISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "alt": "BLACK KISHMISH SEED BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "name": "MIXED FRUIT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA REGULAR.webp",
        "name": "MUNNAKA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 19,
    "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
    "alt": "BLACK KISHMISH SEED",
    "title": "BLACK KISHMISH SEED",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BLACK KISHMISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        "alt": "BLACK KISHMISH SEED"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ALMOND MOUTH FRESHNER.webp",
        "name": "ALMOND MOUTH FRESHNER",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 20,
    "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEEDLESS JUMBO.webp",
    "alt": "BLACK KISHMISH SEEDLESS JUMBO",
    "title": "BLACK KISHMISH SEEDLESS JUMBO",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "BLACK KISHMISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEEDLESS JUMBO.webp",
        "alt": "BLACK KISHMISH SEEDLESS JUMBO"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/NUTRAMLA.webp",
        "name": "NUTRAMLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/DHAGA MISRI.webp",
        "name": "DHAGA MISRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA REGULAR.webp",
        "name": "MUNNAKA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "name": "PINE NUTS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 21,
    "src": "/dryfruite product images/Flavoured dry fruits/CRANEBERRY KAJU.webp",
    "alt": "CRANEBERRY KAJU",
    "title": "CRANEBERRY KAJU",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/CRANEBERRY KAJU.webp",
        "alt": "CRANEBERRY KAJU"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        "name": "ANJEER JUMBO PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "name": "ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 22,
    "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
    "alt": "OREO BADAM",
    "title": "OREO BADAM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "alt": "OREO BADAM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/DHAGA MISRI.webp",
        "name": "DHAGA MISRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GREEN MOSAMBI.webp",
        "name": "GREEN MOSAMBI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA BIG.webp",
        "name": "SALTED PISTA BIG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 23,
    "src": "/dryfruite product images/Flavoured dry fruits/OREO KAJU.webp",
    "alt": "OREO KAJU",
    "title": "OREO KAJU",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO KAJU.webp",
        "alt": "OREO KAJU"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/STRAWBERRY.webp",
        "name": "STRAWBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/LONG.webp",
        "name": "LONG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        "name": "BLACK KISHMISH SEED",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PESHAWARI PISTA.webp",
        "name": "PESHAWARI PISTA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 24,
    "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
    "alt": "PAAN KAJU",
    "title": "PAAN KAJU",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
        "alt": "PAAN KAJU"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/SONTH.webp",
        "name": "SONTH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU MEDIUM.webp",
        "name": "KAJU MEDIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "name": "GUAVA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "name": "AJWAIN",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 25,
    "src": "/dryfruite product images/Flavoured dry fruits/PAAN KISHMISH.webp",
    "alt": "PAAN KISHMISH",
    "title": "PAAN KISHMISH",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KISHMISH.webp",
        "alt": "PAAN KISHMISH"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        "name": "BLACK KISHMISH SEED",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "name": "AKHROT OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        "name": "ANJEER JUMBO PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 26,
    "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
    "alt": "ROSE MALAI BADAM",
    "title": "ROSE MALAI BADAM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
        "alt": "ROSE MALAI BADAM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/BASIL SEEDS.webp",
        "name": "BASIL SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/BADI ELAICHI.webp",
        "name": "BADI ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "name": "AJWAIN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GREEN MOSAMBI.webp",
        "name": "GREEN MOSAMBI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 27,
    "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
    "alt": "ROSE MALAI KAJU",
    "title": "ROSE MALAI KAJU",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "alt": "ROSE MALAI KAJU"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "name": "SAFAWI KALMI DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/SONTH.webp",
        "name": "SONTH",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 28,
    "src": "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
    "alt": "STRAWBERRY KAJU",
    "title": "STRAWBERRY KAJU",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "FLAVOURED DRY FRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
        "alt": "STRAWBERRY KAJU"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "name": "ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
        "name": "PAAN KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/DALCHINI.webp",
        "name": "DALCHINI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 29,
    "src": "/dryfruite product images/Kaju/KAJU BIG.webp",
    "alt": "KAJU BIG",
    "title": "KAJU BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KAJU",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kaju/KAJU BIG.webp",
        "alt": "KAJU BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
        "name": "PAAN KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA LARGE.webp",
        "name": "MAMRA LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PLAIN PISTA.webp",
        "name": "PLAIN PISTA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 30,
    "src": "/dryfruite product images/Kaju/KAJU JUMBO SPECIAL.webp",
    "alt": "KAJU JUMBO SPECIAL",
    "title": "KAJU JUMBO SPECIAL",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KAJU",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kaju/KAJU JUMBO SPECIAL.webp",
        "alt": "KAJU JUMBO SPECIAL"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH INDIAN.webp",
        "name": "KISHMISH INDIAN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "name": "MANGO SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PECAN NUT.webp",
        "name": "PECAN NUT",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 31,
    "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
    "alt": "KAJU LARGE",
    "title": "KAJU LARGE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KAJU",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "alt": "KAJU LARGE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        "name": "MAMRA TAANCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
        "name": "SUGARLESS CRANEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MIX BERRIES.webp",
        "name": "MIX BERRIES",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 32,
    "src": "/dryfruite product images/Kaju/KAJU MEDIUM.webp",
    "alt": "KAJU MEDIUM",
    "title": "KAJU MEDIUM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KAJU",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kaju/KAJU MEDIUM.webp",
        "alt": "KAJU MEDIUM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "name": "KHUS KHUS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PLAIN PISTA.webp",
        "name": "PLAIN PISTA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JAIFAL.webp",
        "name": "JAIFAL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 33,
    "src": "/dryfruite product images/Kaju/KAJU REGULAR.webp",
    "alt": "KAJU REGULAR",
    "title": "KAJU REGULAR",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KAJU",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kaju/KAJU REGULAR.webp",
        "alt": "KAJU REGULAR"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/WATERMELON SEEDS.webp",
        "name": "WATERMELON SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU TUKDI.webp",
        "name": "KAJU TUKDI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        "name": "AMERICAN BADAM REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/BASIL SEEDS.webp",
        "name": "BASIL SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 34,
    "src": "/dryfruite product images/Kaju/KAJU TUKDI.webp",
    "alt": "KAJU TUKDI",
    "title": "KAJU TUKDI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KAJU",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kaju/KAJU TUKDI.webp",
        "alt": "KAJU TUKDI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/BADI ELAICHI.webp",
        "name": "BADI ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
        "name": "AKHROT GIRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "name": "GUAVA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 35,
    "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
    "alt": "DATE CROWN BLACK",
    "title": "DATE CROWN BLACK",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "alt": "DATE CROWN BLACK"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "name": "OREO BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "name": "PINE NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "name": "DATE CROWN BLACK",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 36,
    "src": "/dryfruite product images/Khajur/DATE CROWN FARD.webp",
    "alt": "DATE CROWN FARD",
    "title": "DATE CROWN FARD",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN FARD.webp",
        "alt": "DATE CROWN FARD"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU TUKDI.webp",
        "name": "KAJU TUKDI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PESHAWARI PISTA.webp",
        "name": "PESHAWARI PISTA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/WATERMELON SEEDS.webp",
        "name": "WATERMELON SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 37,
    "src": "/dryfruite product images/Khajur/DRY DATES KHARAK.webp",
    "alt": "DRY DATES KHARAK",
    "title": "DRY DATES KHARAK",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/DRY DATES KHARAK.webp",
        "alt": "DRY DATES KHARAK"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
        "name": "FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "name": "RED SEEDLESS DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "name": "MANGO TOFFEE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PISTA CUTTING.webp",
        "name": "PISTA CUTTING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 38,
    "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
    "alt": "KHARAK CUTTING",
    "title": "KHARAK CUTTING",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
        "alt": "KHARAK CUTTING"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/CHERRY.webp",
        "name": "CHERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GULKAND.webp",
        "name": "GULKAND",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MIX BERRIES.webp",
        "name": "MIX BERRIES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/CRANEBERRY KAJU.webp",
        "name": "CRANEBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 39,
    "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
    "alt": "MEDJOUL DATES JUMBO",
    "title": "MEDJOUL DATES JUMBO",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
        "alt": "MEDJOUL DATES JUMBO"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "name": "PINEAPPLE RING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
        "name": "MEDJOUL DATES JUMBO",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
        "name": "ORANGE SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE COIN.webp",
        "name": "PINEAPPLE COIN",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 40,
    "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
    "alt": "RED SEEDLESS DATES",
    "title": "RED SEEDLESS DATES",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "alt": "RED SEEDLESS DATES"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        "name": "ANJEER REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JAIFAL.webp",
        "name": "JAIFAL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 41,
    "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
    "alt": "SAFAWI KALMI DATES",
    "title": "SAFAWI KALMI DATES",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KHAJUR",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "alt": "SAFAWI KALMI DATES"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "name": "RED SEEDLESS DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
        "name": "STRAWBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
        "name": "GRANOLA MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "name": "BLACK KISHMISH SEED BIG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 42,
    "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
    "alt": "KISHMISH AFGHANI GOL",
    "title": "KISHMISH AFGHANI GOL",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KISHNISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "alt": "KISHMISH AFGHANI GOL"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        "name": "ANJEER BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
        "name": "STRAWBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KESAR BABY 1GM.webp",
        "name": "KESAR BABY 1GM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 43,
    "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI LAMBI.webp",
    "alt": "KISHMISH AFGHANI LAMBI",
    "title": "KISHMISH AFGHANI LAMBI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KISHNISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI LAMBI.webp",
        "alt": "KISHMISH AFGHANI LAMBI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/GOLDEN BERRY.webp",
        "name": "GOLDEN BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/NUTRAMLA.webp",
        "name": "NUTRAMLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JAIFAL.webp",
        "name": "JAIFAL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/SONTH.webp",
        "name": "SONTH",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 44,
    "src": "/dryfruite product images/Kishnish/KISHMISH INDIAN.webp",
    "alt": "KISHMISH INDIAN",
    "title": "KISHMISH INDIAN",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KISHNISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH INDIAN.webp",
        "alt": "KISHMISH INDIAN"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "name": "AKHROT OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
        "name": "ORANGE SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ROSE PETALS.webp",
        "name": "ROSE PETALS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/WATERMELON SEEDS.webp",
        "name": "WATERMELON SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 45,
    "src": "/dryfruite product images/Kishnish/KISHMISH PREMIUM SUNDEKHANI.webp",
    "alt": "KISHMISH PREMIUM SUNDEKHANI",
    "title": "KISHMISH PREMIUM SUNDEKHANI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "KISHNISH",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH PREMIUM SUNDEKHANI.webp",
        "alt": "KISHMISH PREMIUM SUNDEKHANI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "name": "PINE NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
        "name": "KHARAK CUTTING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "name": "PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GREEN MOSAMBI.webp",
        "name": "GREEN MOSAMBI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 46,
    "src": "/dryfruite product images/Mixedfruits/BABY LEMON.webp",
    "alt": "BABY LEMON",
    "title": "BABY LEMON",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/BABY LEMON.webp",
        "alt": "BABY LEMON"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "name": "MIXED FRUIT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/BADAM OIL.webp",
        "name": "BADAM OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "name": "MANGO SLICE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 47,
    "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
    "alt": "BLUEBERRY",
    "title": "BLUEBERRY",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
        "alt": "BLUEBERRY"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/HING 10GM.webp",
        "name": "HING 10GM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/BABY LEMON.webp",
        "name": "BABY LEMON",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "name": "RED SEEDLESS DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/CHERRY.webp",
        "name": "CHERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 48,
    "src": "/dryfruite product images/Mixedfruits/CHERRY.webp",
    "alt": "CHERRY",
    "title": "CHERRY",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/CHERRY.webp",
        "alt": "CHERRY"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "name": "BLACK KISHMISH SEED BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN CHURI.webp",
        "name": "PAAN CHURI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
        "name": "SUGARLESS CRANEBERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 49,
    "src": "/dryfruite product images/Mixedfruits/CRANEBERRY SLICE.webp",
    "alt": "CRANEBERRY SLICE",
    "title": "CRANEBERRY SLICE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/CRANEBERRY SLICE.webp",
        "alt": "CRANEBERRY SLICE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "name": "KAJU LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH PREMIUM SUNDEKHANI.webp",
        "name": "KISHMISH PREMIUM SUNDEKHANI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KISHMISH.webp",
        "name": "PAAN KISHMISH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
        "name": "MEDJOUL DATES JUMBO",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 50,
    "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
    "alt": "GOJI BERRY",
    "title": "GOJI BERRY",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "alt": "GOJI BERRY"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/NUTRAMLA.webp",
        "name": "NUTRAMLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH INDIAN.webp",
        "name": "KISHMISH INDIAN",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 51,
    "src": "/dryfruite product images/Mixedfruits/GOLDEN BERRY.webp",
    "alt": "GOLDEN BERRY",
    "title": "GOLDEN BERRY",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/GOLDEN BERRY.webp",
        "alt": "GOLDEN BERRY"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN CHURI.webp",
        "name": "PAAN CHURI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "name": "PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "name": "GUAVA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 52,
    "src": "/dryfruite product images/Mixedfruits/GREEN MOSAMBI.webp",
    "alt": "GREEN MOSAMBI",
    "title": "GREEN MOSAMBI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/GREEN MOSAMBI.webp",
        "alt": "GREEN MOSAMBI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
        "name": "FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "name": "OREO BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/ROASTED PUMPKIN SEEDS.webp",
        "name": "ROASTED PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 53,
    "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
    "alt": "GUAVA",
    "title": "GUAVA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "alt": "GUAVA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "name": "OREO BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        "name": "AKHROT WHOLE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI LAMBI.webp",
        "name": "KISHMISH AFGHANI LAMBI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 54,
    "src": "/dryfruite product images/Mixedfruits/KIWI.webp",
    "alt": "KIWI",
    "title": "KIWI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/KIWI.webp",
        "alt": "KIWI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
        "name": "ROSE MALAI BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "name": "KAJU LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
        "name": "BLUEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ROASTED BREAKFAST MIX.webp",
        "name": "ROASTED BREAKFAST MIX",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 55,
    "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
    "alt": "MANGO SLICE",
    "title": "MANGO SLICE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "alt": "MANGO SLICE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA BIG.webp",
        "name": "SALTED PISTA BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        "name": "BLACK KISHMISH SEED",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
        "name": "SUGARLESS CRANEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        "name": "ANJEER JUMBO PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 56,
    "src": "/dryfruite product images/Mixedfruits/MIX BERRIES.webp",
    "alt": "MIX BERRIES",
    "title": "MIX BERRIES",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/MIX BERRIES.webp",
        "alt": "MIX BERRIES"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "name": "MIXED FRUIT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "name": "BLACK KISHMISH SEED BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        "name": "ANJEER BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "name": "PINEAPPLE RING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 57,
    "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
    "alt": "MIXED FRUIT",
    "title": "MIXED FRUIT",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "alt": "MIXED FRUIT"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
        "name": "PAAN KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "name": "MANGO TOFFEE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
        "name": "BLUEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 58,
    "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
    "alt": "ORANGE SLICE",
    "title": "ORANGE SLICE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
        "alt": "ORANGE SLICE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GULKAND.webp",
        "name": "GULKAND",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI LAMBI.webp",
        "name": "KISHMISH AFGHANI LAMBI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "name": "AKHROT OIL",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 59,
    "src": "/dryfruite product images/Mixedfruits/PAPAYA STICK.webp",
    "alt": "PAPAYA STICK",
    "title": "PAPAYA STICK",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/PAPAYA STICK.webp",
        "alt": "PAPAYA STICK"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/GOND BAARIK.webp",
        "name": "GOND BAARIK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/CHIA SEEDS.webp",
        "name": "CHIA SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 60,
    "src": "/dryfruite product images/Mixedfruits/PINEAPPLE COIN.webp",
    "alt": "PINEAPPLE COIN",
    "title": "PINEAPPLE COIN",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE COIN.webp",
        "alt": "PINEAPPLE COIN"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        "name": "AMERICAN BADAM REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/ROASTED FLAX SEEDS.webp",
        "name": "ROASTED FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JEERA.webp",
        "name": "JEERA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JAIFAL.webp",
        "name": "JAIFAL",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 61,
    "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
    "alt": "PINEAPPLE RING",
    "title": "PINEAPPLE RING",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "alt": "PINEAPPLE RING"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "name": "KAJU LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "name": "ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "name": "BRAZIL NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/CRANEBERRY KAJU.webp",
        "name": "CRANEBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 62,
    "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
    "alt": "PRUNES",
    "title": "PRUNES",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "alt": "PRUNES"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "name": "GUAVA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "name": "DATE CROWN BLACK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        "name": "AMERICAN BADAM REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 63,
    "src": "/dryfruite product images/Mixedfruits/STRAWBERRY.webp",
    "alt": "STRAWBERRY",
    "title": "STRAWBERRY",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/STRAWBERRY.webp",
        "alt": "STRAWBERRY"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "name": "AKHROT OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PAPAYA STICK.webp",
        "name": "PAPAYA STICK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "name": "PINEAPPLE RING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 64,
    "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
    "alt": "SUGARLESS CRANEBERRY",
    "title": "SUGARLESS CRANEBERRY",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MIXEDFRUITS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
        "alt": "SUGARLESS CRANEBERRY"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "name": "KHUS KHUS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/CRANEBERRY SLICE.webp",
        "name": "CRANEBERRY SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN CHURI.webp",
        "name": "PAAN CHURI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 65,
    "src": "/dryfruite product images/Mukhwas and mixes/ALMOND MOUTH FRESHNER.webp",
    "alt": "ALMOND MOUTH FRESHNER",
    "title": "ALMOND MOUTH FRESHNER",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ALMOND MOUTH FRESHNER.webp",
        "alt": "ALMOND MOUTH FRESHNER"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/NUTRAMLA.webp",
        "name": "NUTRAMLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        "name": "ANJEER BIG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 66,
    "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
    "alt": "ANARDANA",
    "title": "ANARDANA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "alt": "ANARDANA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "name": "ANARDANA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
        "name": "BLUEBERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MIX NUTS.webp",
        "name": "MIX NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
        "name": "ROSE MALAI BADAM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 67,
    "src": "/dryfruite product images/Mukhwas and mixes/BREAKFAST MIX.webp",
    "alt": "BREAKFAST MIX",
    "title": "BREAKFAST MIX",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/BREAKFAST MIX.webp",
        "alt": "BREAKFAST MIX"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "name": "BLACK KISHMISH SEED BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "name": "ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/BREAKFAST MIX.webp",
        "name": "BREAKFAST MIX",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 68,
    "src": "/dryfruite product images/Mukhwas and mixes/CHAI MASALA.webp",
    "alt": "CHAI MASALA",
    "title": "CHAI MASALA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/CHAI MASALA.webp",
        "alt": "CHAI MASALA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        "name": "MAMRA TAANCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/ROASTED FLAX SEEDS.webp",
        "name": "ROASTED FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "name": "BRAZIL NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
        "name": "FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 69,
    "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
    "alt": "DRY GREEN PAAN",
    "title": "DRY GREEN PAAN",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
        "alt": "DRY GREEN PAAN"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "name": "PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "name": "PINE NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/PAAN KAJU.webp",
        "name": "PAAN KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 70,
    "src": "/dryfruite product images/Mukhwas and mixes/GOND SUPARI.webp",
    "alt": "GOND SUPARI",
    "title": "GOND SUPARI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GOND SUPARI.webp",
        "alt": "GOND SUPARI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ROASTED BREAKFAST MIX.webp",
        "name": "ROASTED BREAKFAST MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA LACCHA.webp",
        "name": "KHOPRA LACCHA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 71,
    "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
    "alt": "GRANOLA MIX",
    "title": "GRANOLA MIX",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
        "alt": "GRANOLA MIX"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MIX BERRIES.webp",
        "name": "MIX BERRIES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/GOND BAARIK.webp",
        "name": "GOND BAARIK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU REGULAR.webp",
        "name": "KAJU REGULAR",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 72,
    "src": "/dryfruite product images/Mukhwas and mixes/GULKAND.webp",
    "alt": "GULKAND",
    "title": "GULKAND",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GULKAND.webp",
        "alt": "GULKAND"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Pista/PISTA CUTTING.webp",
        "name": "PISTA CUTTING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
        "name": "GRANOLA MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 73,
    "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
    "alt": "MANGO TOFFEE",
    "title": "MANGO TOFFEE",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "alt": "MANGO TOFFEE"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "name": "MIXED FRUIT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GOND SUPARI.webp",
        "name": "GOND SUPARI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEEDLESS JUMBO.webp",
        "name": "BLACK KISHMISH SEEDLESS JUMBO",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA LACCHA.webp",
        "name": "KHOPRA LACCHA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 74,
    "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
    "alt": "MILK MASALA",
    "title": "MILK MASALA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "alt": "MILK MASALA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
        "name": "FLAX SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "name": "AJWAIN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
        "name": "AKHROT WHOLE BIG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 75,
    "src": "/dryfruite product images/Mukhwas and mixes/MIX NUTS.webp",
    "alt": "MIX NUTS",
    "title": "MIX NUTS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MIX NUTS.webp",
        "alt": "MIX NUTS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU JUMBO SPECIAL.webp",
        "name": "KAJU JUMBO SPECIAL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/TILLI.webp",
        "name": "TILLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GOND SUPARI.webp",
        "name": "GOND SUPARI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA REGULAR.webp",
        "name": "SALTED PISTA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 76,
    "src": "/dryfruite product images/Mukhwas and mixes/NUTRAMLA.webp",
    "alt": "NUTRAMLA",
    "title": "NUTRAMLA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/NUTRAMLA.webp",
        "alt": "NUTRAMLA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "name": "DATE CROWN BLACK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MIX NUTS.webp",
        "name": "MIX NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        "name": "ANJEER JUMBO PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 77,
    "src": "/dryfruite product images/Mukhwas and mixes/PAAN CHURI.webp",
    "alt": "PAAN CHURI",
    "title": "PAAN CHURI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN CHURI.webp",
        "alt": "PAAN CHURI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "name": "GUAVA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DRY DATES KHARAK.webp",
        "name": "DRY DATES KHARAK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/SONTH.webp",
        "name": "SONTH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/BREAKFAST MIX.webp",
        "name": "BREAKFAST MIX",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 78,
    "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
    "alt": "PAAN GOLI",
    "title": "PAAN GOLI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "alt": "PAAN GOLI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/BASIL SEEDS.webp",
        "name": "BASIL SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA BIG.webp",
        "name": "SALTED PISTA BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ALMOND MOUTH FRESHNER.webp",
        "name": "ALMOND MOUTH FRESHNER",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "name": "SAFAWI KALMI DATES",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 79,
    "src": "/dryfruite product images/Mukhwas and mixes/ROASTED BREAKFAST MIX.webp",
    "alt": "ROASTED BREAKFAST MIX",
    "title": "ROASTED BREAKFAST MIX",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ROASTED BREAKFAST MIX.webp",
        "alt": "ROASTED BREAKFAST MIX"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU REGULAR.webp",
        "name": "KAJU REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "name": "SAFAWI KALMI DATES",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 80,
    "src": "/dryfruite product images/Mukhwas and mixes/ROSE PETALS.webp",
    "alt": "ROSE PETALS",
    "title": "ROSE PETALS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUKHWAS AND MIXES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ROSE PETALS.webp",
        "alt": "ROSE PETALS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "name": "AKHROT OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/BABY LEMON.webp",
        "name": "BABY LEMON",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Apricot/KHURBANI.webp",
        "name": "KHURBANI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 81,
    "src": "/dryfruite product images/Munnaka/MUNNAKA PREMIUM.webp",
    "alt": "MUNNAKA PREMIUM",
    "title": "MUNNAKA PREMIUM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUNNAKA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA PREMIUM.webp",
        "alt": "MUNNAKA PREMIUM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "name": "KHUS KHUS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/CRANEBERRY SLICE.webp",
        "name": "CRANEBERRY SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PISTA CUTTING.webp",
        "name": "PISTA CUTTING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 82,
    "src": "/dryfruite product images/Munnaka/MUNNAKA REGULAR.webp",
    "alt": "MUNNAKA REGULAR",
    "title": "MUNNAKA REGULAR",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "MUNNAKA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA REGULAR.webp",
        "alt": "MUNNAKA REGULAR"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
        "name": "MEDJOUL DATES JUMBO",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/GOND BAARIK.webp",
        "name": "GOND BAARIK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
        "name": "SUNFLOWER SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JEERA.webp",
        "name": "JEERA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 83,
    "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
    "alt": "BRAZIL NUT",
    "title": "BRAZIL NUT",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "NUTS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "alt": "BRAZIL NUT"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "name": "SAFAWI KALMI DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "name": "AJWAIN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "name": "MIXED FRUIT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 84,
    "src": "/dryfruite product images/Nuts/HAZELNUT.webp",
    "alt": "HAZELNUT",
    "title": "HAZELNUT",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "NUTS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Nuts/HAZELNUT.webp",
        "alt": "HAZELNUT"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "name": "KHUS KHUS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/BADAM CUTTING.webp",
        "name": "BADAM CUTTING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN FARD.webp",
        "name": "DATE CROWN FARD",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 85,
    "src": "/dryfruite product images/Nuts/PECAN NUT.webp",
    "alt": "PECAN NUT",
    "title": "PECAN NUT",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "NUTS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Nuts/PECAN NUT.webp",
        "alt": "PECAN NUT"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "name": "BRAZIL NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO KAJU.webp",
        "name": "OREO KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/CHAI MASALA.webp",
        "name": "CHAI MASALA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 86,
    "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
    "alt": "PINE NUTS",
    "title": "PINE NUTS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "NUTS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "alt": "PINE NUTS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KESAR BABY 1GM.webp",
        "name": "KESAR BABY 1GM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH PREMIUM SUNDEKHANI.webp",
        "name": "KISHMISH PREMIUM SUNDEKHANI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA LARGE.webp",
        "name": "MAMRA LARGE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 87,
    "src": "/dryfruite product images/Pista/PESHAWARI PISTA.webp",
    "alt": "PESHAWARI PISTA",
    "title": "PESHAWARI PISTA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "PISTA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Pista/PESHAWARI PISTA.webp",
        "alt": "PESHAWARI PISTA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/MAMRA JUMBO SPECIAL.webp",
        "name": "MAMRA JUMBO SPECIAL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/JAVITRI.webp",
        "name": "JAVITRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/BLUEBERRY.webp",
        "name": "BLUEBERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 88,
    "src": "/dryfruite product images/Pista/PISTA CUTTING.webp",
    "alt": "PISTA CUTTING",
    "title": "PISTA CUTTING",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "PISTA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Pista/PISTA CUTTING.webp",
        "alt": "PISTA CUTTING"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        "name": "AKHROT WHOLE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
        "name": "SUNFLOWER SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "name": "PINEAPPLE RING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 89,
    "src": "/dryfruite product images/Pista/PLAIN PISTA.webp",
    "alt": "PLAIN PISTA",
    "title": "PLAIN PISTA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "PISTA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Pista/PLAIN PISTA.webp",
        "alt": "PLAIN PISTA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "name": "SAFAWI KALMI DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA LARGE.webp",
        "name": "MAMRA LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "name": "MANGO TOFFEE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 90,
    "src": "/dryfruite product images/Pista/SALTED PISTA BIG.webp",
    "alt": "SALTED PISTA BIG",
    "title": "SALTED PISTA BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "PISTA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA BIG.webp",
        "alt": "SALTED PISTA BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "name": "PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA PREMIUM.webp",
        "name": "MUNNAKA PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
        "name": "MEDJOUL DATES JUMBO",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA PREMIUM.webp",
        "name": "MUNNAKA PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 91,
    "src": "/dryfruite product images/Pista/SALTED PISTA REGULAR.webp",
    "alt": "SALTED PISTA REGULAR",
    "title": "SALTED PISTA REGULAR",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "PISTA",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA REGULAR.webp",
        "alt": "SALTED PISTA REGULAR"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "name": "RED SEEDLESS DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH PREMIUM SUNDEKHANI.webp",
        "name": "KISHMISH PREMIUM SUNDEKHANI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/CRANEBERRY SLICE.webp",
        "name": "CRANEBERRY SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 92,
    "src": "/dryfruite product images/Seeds/BASIL SEEDS.webp",
    "alt": "BASIL SEEDS",
    "title": "BASIL SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/BASIL SEEDS.webp",
        "alt": "BASIL SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
        "name": "AKHROT WHOLE BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/MEDJOUL DATES JUMBO.webp",
        "name": "MEDJOUL DATES JUMBO",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "name": "OREO BADAM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 93,
    "src": "/dryfruite product images/Seeds/CHIA SEEDS.webp",
    "alt": "CHIA SEEDS",
    "title": "CHIA SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/CHIA SEEDS.webp",
        "alt": "CHIA SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/BADI ELAICHI.webp",
        "name": "BADI ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "name": "KHOPRA GOLA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/ROASTED PUMPKIN SEEDS.webp",
        "name": "ROASTED PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PISTA CUTTING.webp",
        "name": "PISTA CUTTING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 94,
    "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
    "alt": "FLAX SEEDS",
    "title": "FLAX SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/FLAX SEEDS.webp",
        "alt": "FLAX SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GOND SUPARI.webp",
        "name": "GOND SUPARI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "name": "BRAZIL NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA LACCHA.webp",
        "name": "KHOPRA LACCHA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 95,
    "src": "/dryfruite product images/Seeds/MUSKMELON SEEDS.webp",
    "alt": "MUSKMELON SEEDS",
    "title": "MUSKMELON SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/MUSKMELON SEEDS.webp",
        "alt": "MUSKMELON SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/BABY LEMON.webp",
        "name": "BABY LEMON",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
        "name": "DRY GREEN PAAN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/MUSKMELON SEEDS.webp",
        "name": "MUSKMELON SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 96,
    "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
    "alt": "PUMPKIN SEEDS",
    "title": "PUMPKIN SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "alt": "PUMPKIN SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Munnaka/MUNNAKA PREMIUM.webp",
        "name": "MUNNAKA PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        "name": "ANJEER JUMBO PREMIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        "name": "TURKEL APRICOT",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 97,
    "src": "/dryfruite product images/Seeds/ROASTED FLAX SEEDS.webp",
    "alt": "ROASTED FLAX SEEDS",
    "title": "ROASTED FLAX SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/ROASTED FLAX SEEDS.webp",
        "alt": "ROASTED FLAX SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU TUKDI.webp",
        "name": "KAJU TUKDI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/HING 10GM.webp",
        "name": "HING 10GM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "name": "BRAZIL NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "name": "ANARDANA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 98,
    "src": "/dryfruite product images/Seeds/ROASTED PUMPKIN SEEDS.webp",
    "alt": "ROASTED PUMPKIN SEEDS",
    "title": "ROASTED PUMPKIN SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/ROASTED PUMPKIN SEEDS.webp",
        "alt": "ROASTED PUMPKIN SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU MEDIUM.webp",
        "name": "KAJU MEDIUM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
        "name": "KHARAK CUTTING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "name": "KAJU LARGE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 99,
    "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
    "alt": "SUNFLOWER SEEDS",
    "title": "SUNFLOWER SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
        "alt": "SUNFLOWER SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA REGULAR.webp",
        "name": "SALTED PISTA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE RING.webp",
        "name": "PINEAPPLE RING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        "name": "MAMRA TAANCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "name": "MANGO TOFFEE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 100,
    "src": "/dryfruite product images/Seeds/WATERMELON SEEDS.webp",
    "alt": "WATERMELON SEEDS",
    "title": "WATERMELON SEEDS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SEEDS",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Seeds/WATERMELON SEEDS.webp",
        "alt": "WATERMELON SEEDS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN FARD.webp",
        "name": "DATE CROWN FARD",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/DHAGA MISRI.webp",
        "name": "DHAGA MISRI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
        "name": "KHARAK CUTTING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 101,
    "src": "/dryfruite product images/Spices/AJWAIN.webp",
    "alt": "AJWAIN",
    "title": "AJWAIN",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "alt": "AJWAIN"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kaju/KAJU REGULAR.webp",
        "name": "KAJU REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/CHIA SEEDS.webp",
        "name": "CHIA SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/BADAM CUTTING.webp",
        "name": "BADAM CUTTING",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 102,
    "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
    "alt": "AKHROT OIL",
    "title": "AKHROT OIL",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/AKHROT OIL.webp",
        "alt": "AKHROT OIL"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI LAMBI.webp",
        "name": "KISHMISH AFGHANI LAMBI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "name": "DATE CROWN BLACK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "name": "ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 103,
    "src": "/dryfruite product images/Spices/BADAM OIL.webp",
    "alt": "BADAM OIL",
    "title": "BADAM OIL",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/BADAM OIL.webp",
        "alt": "BADAM OIL"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "name": "OREO BADAM",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DRY DATES KHARAK.webp",
        "name": "DRY DATES KHARAK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "name": "DATE CROWN BLACK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/SUGARLESS CRANEBERRY.webp",
        "name": "SUGARLESS CRANEBERRY",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 104,
    "src": "/dryfruite product images/Spices/BADI ELAICHI.webp",
    "alt": "BADI ELAICHI",
    "title": "BADI ELAICHI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/BADI ELAICHI.webp",
        "alt": "BADI ELAICHI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "name": "MANGO SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/KIWI.webp",
        "name": "KIWI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/BADAM OIL.webp",
        "name": "BADAM OIL",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 105,
    "src": "/dryfruite product images/Spices/DALCHINI.webp",
    "alt": "DALCHINI",
    "title": "DALCHINI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/DALCHINI.webp",
        "alt": "DALCHINI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Apricot/KHURBANI.webp",
        "name": "KHURBANI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
        "name": "STRAWBERRY KAJU",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MILK MASALA.webp",
        "name": "MILK MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "name": "MANGO TOFFEE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 106,
    "src": "/dryfruite product images/Spices/DHAGA MISRI.webp",
    "alt": "DHAGA MISRI",
    "title": "DHAGA MISRI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/DHAGA MISRI.webp",
        "alt": "DHAGA MISRI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Pista/PESHAWARI PISTA.webp",
        "name": "PESHAWARI PISTA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/CHAI MASALA.webp",
        "name": "CHAI MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
        "name": "DRY GREEN PAAN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PRUNES.webp",
        "name": "PRUNES",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 107,
    "src": "/dryfruite product images/Spices/ELAICHI.webp",
    "alt": "ELAICHI",
    "title": "ELAICHI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "alt": "ELAICHI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/PAAN GOLI.webp",
        "name": "PAAN GOLI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
        "name": "ORANGE SLICE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 108,
    "src": "/dryfruite product images/Spices/GOND BAARIK.webp",
    "alt": "GOND BAARIK",
    "title": "GOND BAARIK",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/GOND BAARIK.webp",
        "alt": "GOND BAARIK"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mixedfruits/MIXED FRUIT.webp",
        "name": "MIXED FRUIT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/PINEAPPLE COIN.webp",
        "name": "PINEAPPLE COIN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOLDEN BERRY.webp",
        "name": "GOLDEN BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/LONG.webp",
        "name": "LONG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 109,
    "src": "/dryfruite product images/Spices/GOND BIG.webp",
    "alt": "GOND BIG",
    "title": "GOND BIG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/GOND BIG.webp",
        "alt": "GOND BIG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/JEERA.webp",
        "name": "JEERA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
        "name": "DRY GREEN PAAN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI BADAM.webp",
        "name": "ROSE MALAI BADAM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 110,
    "src": "/dryfruite product images/Spices/HING 10GM.webp",
    "alt": "HING 10GM",
    "title": "HING 10GM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/HING 10GM.webp",
        "alt": "HING 10GM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/JAIFAL.webp",
        "name": "JAIFAL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "name": "KHUS KHUS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/KIWI.webp",
        "name": "KIWI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
        "name": "SUNFLOWER SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 111,
    "src": "/dryfruite product images/Spices/JAIFAL.webp",
    "alt": "JAIFAL",
    "title": "JAIFAL",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/JAIFAL.webp",
        "alt": "JAIFAL"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/RED SEEDLESS DATES.webp",
        "name": "RED SEEDLESS DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/ORANGE SLICE.webp",
        "name": "ORANGE SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MANGO SLICE.webp",
        "name": "MANGO SLICE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA LACCHA.webp",
        "name": "KHOPRA LACCHA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 112,
    "src": "/dryfruite product images/Spices/JAVITRI.webp",
    "alt": "JAVITRI",
    "title": "JAVITRI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/JAVITRI.webp",
        "alt": "JAVITRI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Kishnish/KISHMISH AFGHANI GOL.webp",
        "name": "KISHMISH AFGHANI GOL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/GOND BIG.webp",
        "name": "GOND BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DATE CROWN BLACK.webp",
        "name": "DATE CROWN BLACK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "name": "KHOPRA BURA",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 113,
    "src": "/dryfruite product images/Spices/JEERA.webp",
    "alt": "JEERA",
    "title": "JEERA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/JEERA.webp",
        "alt": "JEERA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/AJWAIN.webp",
        "name": "AJWAIN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/MANGO TOFFEE.webp",
        "name": "MANGO TOFFEE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ALMOND MOUTH FRESHNER.webp",
        "name": "ALMOND MOUTH FRESHNER",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU TUKDI.webp",
        "name": "KAJU TUKDI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 114,
    "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
    "alt": "KALI MIRCH",
    "title": "KALI MIRCH",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "alt": "KALI MIRCH"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        "name": "MAMRA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/METHI.webp",
        "name": "METHI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/MIX BERRIES.webp",
        "name": "MIX BERRIES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/ROSE MALAI KAJU.webp",
        "name": "ROSE MALAI KAJU",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 115,
    "src": "/dryfruite product images/Spices/KESAR BABY 1GM.webp",
    "alt": "KESAR BABY 1GM",
    "title": "KESAR BABY 1GM",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/KESAR BABY 1GM.webp",
        "alt": "KESAR BABY 1GM"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        "name": "AMERICAN BADAM MOTI",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "name": "ANARDANA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        "name": "ANJEER LARGE",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 116,
    "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
    "alt": "KHOPRA BURA",
    "title": "KHOPRA BURA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/KHOPRA BURA.webp",
        "alt": "KHOPRA BURA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/SAFAWI KALMI DATES.webp",
        "name": "SAFAWI KALMI DATES",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ANARDANA.webp",
        "name": "ANARDANA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/BADAM OIL.webp",
        "name": "BADAM OIL",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/ELAICHI.webp",
        "name": "ELAICHI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 117,
    "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
    "alt": "KHOPRA GOLA",
    "title": "KHOPRA GOLA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/KHOPRA GOLA.webp",
        "alt": "KHOPRA GOLA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/ROASTED BREAKFAST MIX.webp",
        "name": "ROASTED BREAKFAST MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/CHAI MASALA.webp",
        "name": "CHAI MASALA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/PLAIN PISTA.webp",
        "name": "PLAIN PISTA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "name": "KHUS KHUS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 118,
    "src": "/dryfruite product images/Spices/KHOPRA LACCHA.webp",
    "alt": "KHOPRA LACCHA",
    "title": "KHOPRA LACCHA",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/KHOPRA LACCHA.webp",
        "alt": "KHOPRA LACCHA"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Seeds/SUNFLOWER SEEDS.webp",
        "name": "SUNFLOWER SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Pista/SALTED PISTA REGULAR.webp",
        "name": "SALTED PISTA REGULAR",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU BIG.webp",
        "name": "KAJU BIG",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        "name": "BLACK KISHMISH SEED BIG",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 119,
    "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
    "alt": "KHUS KHUS",
    "title": "KHUS KHUS",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/KHUS KHUS.webp",
        "alt": "KHUS KHUS"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Mukhwas and mixes/GRANOLA MIX.webp",
        "name": "GRANOLA MIX",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "name": "PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mukhwas and mixes/DRY GREEN PAAN.webp",
        "name": "DRY GREEN PAAN",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        "name": "ANJEER REGULAR",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 120,
    "src": "/dryfruite product images/Spices/LONG.webp",
    "alt": "LONG",
    "title": "LONG",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/LONG.webp",
        "alt": "LONG"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Khajur/DRY DATES KHARAK.webp",
        "name": "DRY DATES KHARAK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/SONTH.webp",
        "name": "SONTH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Seeds/PUMPKIN SEEDS.webp",
        "name": "PUMPKIN SEEDS",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 121,
    "src": "/dryfruite product images/Spices/METHI.webp",
    "alt": "METHI",
    "title": "METHI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/METHI.webp",
        "alt": "METHI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
        "name": "KHARAK CUTTING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Kaju/KAJU LARGE.webp",
        "name": "KAJU LARGE",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/PINE NUTS.webp",
        "name": "PINE NUTS",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/DHAGA MISRI.webp",
        "name": "DHAGA MISRI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 122,
    "src": "/dryfruite product images/Spices/SONTH.webp",
    "alt": "SONTH",
    "title": "SONTH",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/SONTH.webp",
        "alt": "SONTH"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Spices/GOND BAARIK.webp",
        "name": "GOND BAARIK",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Spices/KALI MIRCH.webp",
        "name": "KALI MIRCH",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GOJI BERRY.webp",
        "name": "GOJI BERRY",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        "name": "OREO BADAM",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  },
  {
    "id": 123,
    "src": "/dryfruite product images/Spices/TILLI.webp",
    "alt": "TILLI",
    "title": "TILLI",
    "price": "500",
    "shortdescription": "Experience the rich flavor and nutrients.",
    "category": "SPICES",
    "longdescription": "Carefully handpicked and naturally dried to retain freshness and nutrients.",
    "variations": [
      {
        "src": "/dryfruite product images/Spices/TILLI.webp",
        "alt": "TILLI"
      }
    ],
    "relatedproducts": [
      {
        "src": "/dryfruite product images/Khajur/KHARAK CUTTING.webp",
        "name": "KHARAK CUTTING",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Nuts/BRAZIL NUT.webp",
        "name": "BRAZIL NUT",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GUAVA.webp",
        "name": "GUAVA",
        "description": "Experience the rich flavor and nutrients."
      },
      {
        "src": "/dryfruite product images/Mixedfruits/GREEN MOSAMBI.webp",
        "name": "GREEN MOSAMBI",
        "description": "Experience the rich flavor and nutrients."
      }
    ],
    "quantity": 1,
    "weight": "100gm"
  }
];
