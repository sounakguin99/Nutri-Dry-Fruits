import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products/products";

export default function RelatedProducts() {
  return (
    <section className="container mx-auto px-4 py-12 w-11/12">
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">RELATED PRODUCTS</h2>
          <p className="text-gray-600">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>
        </div>
        <Link
          href="/products"
          className="px-10 py-2 border-2 border-black rounded mt-8 lg:mt-0"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products[0].relatedproducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">
            <div className="relative aspect-square mb-4 overflow-hidden">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="">
              <h3 className="font-semibold text-xl lg:text-base xl:text-xl mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
