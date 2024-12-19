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
    src: "/products/pd1.svg",
    alt: "product1",
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
    id: 2,
    src: "/products/pd2.svg",
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
    src: "/products/pd2.svg",
    alt: "product3",
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
    id: 4,
    src: "/products/pd2.svg",
    alt: "product4",
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
    id: 5,
    src: "/products/pd2.svg",
    alt: "product5",
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
];
