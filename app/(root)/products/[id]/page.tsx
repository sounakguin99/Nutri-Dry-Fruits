"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "../../../../components/data/products/products";
import Link from "next/link";

const ProductDetails = () => {
  const { id } = useParams(); // Use `useParams` for dynamic route parameter

  // Assert `id` as a string
  const productId = id as string;

  // Use `productId` in your logic
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <div className="p-6">Product not found!</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-6 flex gap-10 bg-gray-50 rounded-lg">
      {/* Product Image */}
      <div className="w-1/3">
        <Image
          src={product.src}
          alt={product.alt}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>

        <div className="flex items-center mb-6">
          <p className="text-yellow-500 mr-2">★★★★☆</p>
          <span className="text-gray-600">(3.5 Reviews)</span>
        </div>
        <Link href={`/enquiry?id=${product.id}`}>
          <button className="bg-[#5f4039] text-white py-2 px-6 rounded">
            BUY IT NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
