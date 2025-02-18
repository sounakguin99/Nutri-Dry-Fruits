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
    src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.png",
    alt: "AMERICAN BADAM MOTI",
    title: "AMERICAN BADAM MOTI",
    price: "880",
    category: "BADAM",
    shortdescription:
      "Almonds are a healthful food. They provide a range of essential nutrients.",
    longdescription:
      "Almonds are a healthful food. They provide a range of essential nutrients and can be good source of protein for people who follow a plant-based diet. They are also vesatile, and people can incorporate them into the diet in many ways.",
    variations: [
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.png",
        alt: "AMERICAN BADAM MOTI",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.png",
        name: "AMERICAN BADAM REGULAR",
        description:
          "Almonds are a healthful food. They provide a range of essential nutrients.",
      },
      {
        src: "/dryfruite product images/Badam/BADAM CUTTING.png",
        name: "BADAM CUTTING",
        description:
          "Crunchy, finely sliced almonds perfect for desserts and snacks. Elevate your dishes with premium badam cutting",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA BIG.png",
        name: "MAMRA BIG",
        description:
          "Mamra is better as it is not chemically treated and is 100% natural. It preserves all the oil and nutrients.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA JUMBO SPECIAL.png",
        name: "MAMRA JUMBO SPECIAL",
        description:
          "Mamra is better as it is not chemically treated and is 100% natural. It preserves all the oil and nutrients.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 2,
    src: "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
    alt: "AKHROT GIRI",
    title: "AKHROT GIRI",
    price: "720",
    category: "AKHROT",
    shortdescription:
      "Whole walnuts with a rich, earthy flavor and a satisfying crunch.",
    longdescription:
      "Whole walnuts with a rich, earthy flavor and a satisfying crunch. Perfect for snacking, baking, or incorporating into your favorite recipes. A nutritious and delicious choice for a healthy diet.",
    variations: [
      {
        src: "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
        alt: "AKHROT GIRI",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        name: "ANJEER REGULAR",
        description:
          "Almonds are a healthful food. They provide a range of essential nutrients.",
      },
      {
        src: "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
        name: "AKHROT WHOLE BIG",
        description:
          "Crunchy, finely sliced almonds perfect for desserts and snacks. Elevate your dishes with premium badam cutting",
      },
      {
        src: "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        name: "AKHROT WHOLE",
        description:
          "Mamra is better as it is not chemically treated and is 100% natural. It preserves all the oil and nutrients.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description:
          "Mamra is better as it is not chemically treated and is 100% natural. It preserves all the oil and nutrients.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 3,
    src: "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
    alt: "AKHROT WHOLE BIG",
    price: "840",
    category: "AKHROT",
    title: "AKHROT WHOLE BIG",
    shortdescription:
      "Crunchy, finely sliced almonds – perfect for desserts and snacks. ",
    longdescription:
      "Crunchy, finely sliced almonds – perfect for desserts and snacks. Elevate your dishes with premium badam cutting.",

    variations: [
      {
        src: "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
        alt: "BADAM CUTTING",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
        name: "AKHROT GIRI",
        description:
          "Premium walnut kernels with a rich, buttery flavor and smooth texture. Perfect for snacking, baking, or adding to your favorite dishes. A wholesome and nutritious choice for a healthy lifestyle.",
      },
      {
        src: "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        name: "AMERICAN BADAM REGULAR",
        description:
          "Whole walnuts with a rich, earthy flavor and a satisfying crunch. Perfect for snacking, baking, or incorporating into your favorite recipes. A nutritious and delicious choice for a healthy diet.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description:
          "Extra-large, premium figs with a rich, sweet flavor and an incredibly soft, chewy texture. Ideal for snacking, baking, or adding to your favorite dishes for a touch of natural sweetness. A luxurious, nutritious treat for every occasion.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description:
          "Large, juicy figs with a sweet, rich flavor and soft, chewy texture. Perfect for snacking, baking, or enhancing your favorite recipes. A nutritious and delicious choice for any occasion.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 4,
    src: "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
    alt: "AKHROT WHOLE",
    price: "720",
    category: "AKHROT",
    title: "AKHROT WHOLE",
    shortdescription:
      "Whole walnuts with a rich, earthy flavor and a satisfying crunch. Perfect for snacking, baking, or incorporating into your favorite recipes.",
    longdescription:
      "Whole walnuts with a rich, earthy flavor and a satisfying crunch. Perfect for snacking, baking, or incorporating into your favorite recipes. A nutritious and delicious choice for a healthy diet.",

    variations: [
      {
        src: "/dryfruite product images/Akhrot/AKHROT WHOLE.webp",
        alt: "AKHROT WHOLE",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Akhrot/AKHROT WHOLE BIG.webp",
        name: "AKHROT WHOLE BIG",
        description:
          "Whole walnuts with a rich, earthy flavor and a satisfying crunch. Perfect for snacking, baking, or incorporating into your favorite recipes. A nutritious and delicious choice for a healthy diet.",
      },
      {
        src: "/dryfruite product images/Akhrot/AKHROT GIRI.webp",
        name: "AKHROT GIRI",
        description:
          "Premium walnut kernels with a rich, buttery flavor and smooth texture. Perfect for snacking, baking, or adding to your favorite dishes. A wholesome and nutritious choice for a healthy lifestyle.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description:
          "Extra-large, premium figs with a rich, sweet flavor and an incredibly soft, chewy texture. Ideal for snacking, baking, or adding to your favorite dishes for a touch of natural sweetness. A luxurious, nutritious treat for every occasion.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        name: "ANJEER REGULAR",
        description:
          "Plump and sweet regular figs with a soft, chewy texture. Perfect for snacking, adding to desserts, or incorporating into savory dishes. A delicious and nutritious treat packed with natural goodness.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 5,
    src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
    alt: "ANJEER BIG",
    title: "ANJEER BIG",
    category: "ANJEER",
    price: "1600",
    shortdescription:
      "Large, succulent figs with a naturally sweet flavor and chewy texture. Perfect for snacking, baking, or adding to salads and desserts.",
    longdescription:
      "Large, succulent figs with a naturally sweet flavor and chewy texture. Perfect for snacking, baking, or adding to salads and desserts. A premium, nutritious treat that brings rich flavor to any dish.",

    variations: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        alt: "ANJEER BIG",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description:
          "Extra-large, premium figs with a rich, sweet flavor and an incredibly soft, chewy texture. Ideal for snacking, baking, or adding to your favorite dishes for a touch of natural sweetness. A luxurious, nutritious treat for every occasion.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description:
          "Large, juicy figs with a sweet, rich flavor and soft, chewy texture. Perfect for snacking, baking, or enhancing your favorite recipes. A nutritious and delicious choice for any occasion.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        name: "ANJEER REGULAR",
        description:
          "Plump and sweet regular figs with a soft, chewy texture. Perfect for snacking, adding to desserts, or incorporating into savory dishes. A delicious and nutritious treat packed with natural goodness.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 6,
    src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
    alt: "ANJEER JUMBO PREMIUM",
    title: "ANJEER JUMBO PREMIUM",
    category: "ANJEER",
    price: "3000",
    longdescription:
      "Extra-large, premium figs with a rich, sweet flavor and an incredibly soft, chewy texture. Ideal for snacking, baking, or adding to your favorite dishes for a touch of natural sweetness. A luxurious, nutritious treat for every occasion.",

    shortdescription: "A luxurious, nutritious treat for every occasion.",
    variations: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        alt: "ANJEER JUMBO PREMIUM",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        name: "ANJEER REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 7,
    src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
    alt: "ANJEER LARGE",
    price: "500",
    title: "ANJEER LARGE",
    category: "ANJEER",

    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        alt: "ANJEER LARGE",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        name: "ANJEER REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 8,
    src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
    alt: "ANJEER REGULAR",
    title: "ANJEER REGULAR",
    price: "500",
    category: "ANJEER",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER REGULAR.webp",
        alt: "ANJEER REGULAR",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 9,
    src: "/dryfruite product images/Apricot/KHURBANI.webp",
    alt: "KHURBANI",
    price: "1000",
    category: "APRICOT",
    title: "KHURBANI",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        alt: "KHURBANI",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        name: "TURKEL APRICOT",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 11,
    src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
    alt: "AMERICAN BADAM REGULAR",
    title: "AMERICAN BADAM REGULAR",
    category: "BADAM",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        alt: "AMERICAN BADAM REGULAR",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/BADAM CUTTING.webp",
        name: "BADAM CUTTING",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        name: "AMERICAN BADAM MOTI",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA BIG.webp",
        name: "MAMRA BIG",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        name: "MAMRA REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 12,
    src: "/dryfruite product images/Badam/MAMRA BIG.webp",
    alt: "MAMRA BIG",
    title: "MAMRA BIG",
    category: "BADAM",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/MAMRA BIG.webp",
        alt: "MAMRA BIG",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        name: "MAMRA TAANCH",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        name: "AMERICAN BADAM MOTI",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA LARGE.webp",
        name: "MAMRA LARGE",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        name: "MAMRA REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 13,
    src: "/dryfruite product images/Badam/MAMRA JUMBO SPECIAL.webp",
    alt: "MAMRA JUMBO SPECIAL",
    title: "MAMRA JUMBO SPECIAL",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/MAMRA JUMBO SPECIAL.webp",
        alt: "MAMRA JUMBO SPECIAL",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        name: "MAMRA TAANCH",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        name: "AMERICAN BADAM MOTI",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA LARGE.webp",
        name: "MAMRA LARGE",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        name: "MAMRA REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 14,
    src: "/dryfruite product images/Badam/MAMRA LARGE.webp",
    alt: "MAMRA LARGE",
    title: "MAMRA LARGE",
    category: "BADAM",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/MAMRA LARGE.webp",
        alt: "MAMRA LARGE",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        name: "MAMRA TAANCH",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        name: "AMERICAN BADAM MOTI",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        name: "AMERICAN BADAM REGULAR",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        name: "MAMRA REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 15,
    src: "/dryfruite product images/Badam/MAMRA REGULAR.webp",
    alt: "MAMRA REGULAR",
    title: "MAMRA REGULAR",
    category: "BADAM",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/MAMRA REGULAR.webp",
        alt: "MAMRA REGULAR",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        name: "MAMRA TAANCH",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        name: "AMERICAN BADAM MOTI",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        name: "AMERICAN BADAM REGULAR",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA BIG.webp",
        name: "MAMRA BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 16,
    src: "/dryfruite product images/Badam/MAMRA TAANCH.webp",
    alt: "MAMRA TAANCH",
    title: "MAMRA TAANCH",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/MAMRA TAANCH.webp",
        alt: "MAMRA TAANCH",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        name: "AMERICAN BADAM REGULAR",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM MOTI.webp",
        name: "AMERICAN BADAM MOTI",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Badam/AMERICAN BADAM REGULAR.webp",
        name: "AMERICAN BADAM REGULAR",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Badam/MAMRA BIG.webp",
        name: "MAMRA BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 17,
    src: "/dryfruite product images/Badam/BADAM CUTTING.webp",
    alt: "BADAM CUTTING",
    title: "BADAM CUTTING",
    category: "BADAM",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Badam/BADAM CUTTING.webp",
        alt: "BADAM CUTTING",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 18,
    src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
    alt: "Black kishmish",
    title: "Black kishmish",
    category: "BLACK KISHMISH",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        name: "BLACK KISHMISH SEED",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEEDLESS JUMBO.webp",
        name: "BLACK KISHMISH SEEDLESS JUMBO",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        name: "OREO BADAM",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
        name: "STRAWBERRY KAJU",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 19,
    src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
    alt: "BLACK KISHMISH SEED",
    title: "BLACK KISHMISH SEED",
    category: "BLACK KISHMISH",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        alt: "BLACK KISHMISH",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 20,
    src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEEDLESS JUMBO.webp",
    alt: "BLACK KISHMISH SEEDLESS JUMBO",
    title: "BLACK KISHMISH SEEDLESS JUMBO",
    category: "BLACK KISHMISH",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEEDLESS JUMBO.webp",
        alt: "BLACK KISHMISH SEEDLESS JUMBO",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED.webp",
        name: "BLACK KISHMISH SEED",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },

      {
        src: "/dryfruite product images/Flavoured dry fruits/OREO BADAM.webp",
        name: "OREO BADAM",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Black kishmish/BLACK KISHMISH SEED BIG.webp",
        name: "BLACK KISHMISH SEED BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Flavoured dry fruits/STRAWBERRY KAJU.webp",
        name: "STRAWBERRY KAJU",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
  {
    id: 10,
    src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
    alt: "TURKEL APRICOT",
    title: "TURKEL APRICOT",
    category: "APRICOT",
    price: "500",
    shortdescription: "Lorem Ipsum is simply dummy text of industry.",
    longdescription:
      "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    variations: [
      {
        src: "/dryfruite product images/Apricot/TURKEL APRICOT.webp",
        alt: "TURKEL APRICOT",
      },
    ],
    relatedproducts: [
      {
        src: "/dryfruite product images/Anjeer/ANJEER LARGE.webp",
        name: "ANJEER LARGE",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER JUMBO PREMIUM.webp",
        name: "ANJEER JUMBO PREMIUM",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
      {
        src: "/dryfruite product images/Apricot/KHURBANI.webp",
        name: "KHURBANI",
        description:
          "It is a sweet and tangy fruits packed with vitamins, fiber, and antioxidants. They are commonly enjoyed as a healthy snack, added to desserts, or used in cooking to enhance the flavor of both sweet and savory dishes.",
      },
      {
        src: "/dryfruite product images/Anjeer/ANJEER BIG.webp",
        name: "ANJEER BIG",
        description: "Lorem Ipsum is simply dummy text typesetting industry.",
      },
    ],
    quantity: 1,
    weight: "100gm",
  },
];
