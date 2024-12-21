// Define types for Related Products, Variations, and the Main Product
export type RelatedProduct = {
  src: string;
  name: string;
  description: string;
};

export type Variation = {
  src: string;
};

export type Product = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  variation: Variation[];
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
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    alt: "product2",
    title: "Cashew",
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    title: "Pista",
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    title: "Walnut",
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    title: "Dates",
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    alt: "Carnberry",
    title: "Carnberry",
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
    alt: "Apricot",
    title: "Apricot",
    description: "Lorem Ipsum is simply dummy text of industry.",
    variation: [{ src: "/products/pd3.svg" }],
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
