"use client";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products/products";
import { useState } from "react";

const ProductPage = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Filters */}
      <div className="w-1/4 p-6 bg-gray-100">
        <h2 className="text-lg font-bold mb-4">FILTER</h2>
        <input
          type="text"
          placeholder="Search"
          className="p-2 mb-4 w-full border rounded"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-6">
        <div className="grid grid-cols-3 gap-6">
          {products
            .filter((product) =>
              product.alt.toLowerCase().includes(filter.toLowerCase())
            )
            .map((product) => (
              <div
                key={product.id}
                className="text-center border rounded-lg shadow hover:shadow-lg p-4"
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-bold mb-2">
                  {product.alt.replace(/-/g, " ").toUpperCase()}
                </h3>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-[#5f4039] text-white py-2 px-4 rounded inline-block"
                >
                  VIEW DETAILS
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
