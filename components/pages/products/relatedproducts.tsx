"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "../../data/products/products";

export default function RelatedProducts() {
  const router = useRouter();

  // Extract the ID from the URL pathname
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const id = currentPath.split("/").pop(); // Get the last part of the URL

  // Find the product with the specific ID
  const targetProduct = products.find((product) => product.id === Number(id));

  return (
    <section className="container mx-auto px-4 py-12 w-11/12">
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">RELATED PRODUCTS</h2>
          <p className="text-gray-600">
            Discover some of our related products that might interest you.
          </p>
        </div>
        <Link
          href="/products"
          className="px-10 py-2 border-2 border-black rounded mt-8 lg:mt-0 hover:bg-black hover:text-white transition-colors"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {targetProduct?.relatedproducts?.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-square mb-4 border border-black overflow-hidden">
              <Image
                src={product.src}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain transition-transform hover:scale-105 p-5"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
