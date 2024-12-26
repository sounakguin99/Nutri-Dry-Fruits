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
    id: 1,
    src: "/products/Almond.svg",
    alt: "Almond",
    title: "Almond",
    price: "500",
    category: "Dry Fruit",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variations: [{ src: "/products/Almond.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 2,
    src: "/products/Cashew.svg",
    alt: "Cashew",
    price: "1000",
    category: "Dry Fruit",
    title: "Cashew",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [{ src: "/products/Cashew.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 3,
    src: "/products/Pista.svg",
    alt: "Pista",
    price: "500",
    category: "Dry Fruit",
    title: "Pista",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [{ src: "/products/Pista.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 4,
    src: "/products/Walnut.svg",
    alt: "Walnut",
    price: "1000",
    category: "Dry Fruit",
    title: "Walnut",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [{ src: "/products/Walnut.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 5,
    src: "/products/Raisin.svg",
    alt: "Raisin",
    title: "Raisin",
    category: "Dry Fruit",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [{ src: "/products/Raisin.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 6,
    src: "/products/Fig.svg",
    alt: "Fig",
    title: "Fig",
    category: "Dry Fruit",
    price: "1000",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    variations: [{ src: "/products/Fig.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 7,
    src: "/products/Dates.svg",
    alt: "Dates",
    price: "500",
    title: "Dates",
    category: "Dates",

    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [{ src: "/products/Dates.svg", alt: "Variation of Apricot" }],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 8,
    src: "/products/Blueberry.svg",
    alt: "Blueberry",
    title: "Blueberry",
    price: "500",
    category: "Dates",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      { src: "/products/Blueberry.svg", alt: "Variation of Apricot" },
    ],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 9,
    src: "/products/Carnberry.svg",
    alt: "Apricot",
    price: "1000",
    category: "Berry",
    title: "Apricot",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      { src: "/products/Carnberry.svg", alt: "Variation of Apricot" },
    ],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/products/Apricot.svg",
    alt: "Carnberry",
    title: "Carnberry",
    category: "Berry",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      { src: "/products/Apricot.svg", alt: "Variation of Apricot" },
      { src: "/products/cramberryvariation.svg", alt: "Variation of Apricot" },
    ],
    relatedproducts: [
      {
        src: "/products/relatedproducts/blueberry.svg",
        name: "Blueberry",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/apricot.svg",
        name: "Apricot",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/blackcurrent.svg",
        name: "Black Currant",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/products/relatedproducts/fig.svg",
        name: "Fig",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
];
