"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products/products";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter products based on search term and selected categories
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const handleCloseFilters = () => setShowFilters(false);
  const handleRemoveAllFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
  };

  const handleApplyFilters = () => {
    console.log("Filters applied:", { searchTerm, selectedCategories });
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar Filters */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transform w-screen pt-10 pl-6 lg:pl-[40px] pr-6 transition-transform duration-300 
          ${
            showFilters ? "translate-x-0" : "-translate-x-full"
          } lg:w-1/4 lg:translate-x-0 lg:static border-r border-gray-200`}
      >
        <button
          className="absolute top-4 right-4 lg:hidden text-gray-500 hover:text-black"
          onClick={handleCloseFilters}
        >
          X
        </button>

        <div className="relative flex justify-between">
          <h2 className="text-lg font-bold mb-4">FILTER</h2>
          <button
            className="absolute bottom-[20px] right-0 text-[15px] hidden md:block"
            onClick={handleRemoveAllFilters}
          >
            CLEAR ALL
          </button>
        </div>

        {/* Search Filter */}
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 mb-4 w-full border rounded"
        />

        {/* Category Filter */}
        <div className="mt-4">
          <h3 className="text-md font-bold mb-2">PRODUCT TYPE</h3>
          <div className="border border-b-0 border-black mt-2 mb-2"></div>
          <ul>
            {["Dates", "Dry Fruit", "Berry"].map((type) => (
              <li key={type} className="mb-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(type)}
                    onChange={() => handleCategoryChange(type)}
                  />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Filter Actions */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 md:hidden">
          <div className="flex justify-between">
            <button
              className="w-1/2 bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
              onClick={handleRemoveAllFilters}
            >
              CLEAR ALL
            </button>
            <button
              className="w-1/2 bg-[#5f4039] text-white py-2 rounded hover:bg-[#3d2b24]"
              onClick={handleApplyFilters}
            >
              APPLY
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 lg:p-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="text-center p-4">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={150}
                  height={150}
                  className="mx-auto mb-4 border-2 border-[#65504B] w-full p-4"
                />
                <h3 className="text-lg text-left font-bold mb-2">
                  {product.title}
                </h3>
                <p className="text-[15px] text-left mb-2">
                  {product.shortdescription}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-[#5f4039] text-white py-2 px-4 rounded inline-block w-full border hover:bg-white hover:border-[#65504B] hover:text-[#65504B]"
                >
                  VIEW DETAILS
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 pt-10">No products found.</p>
        )}
      </div>

      {/* Mobile Filter Button */}
      <button
        className="fixed bottom-4 left-4 w-12 h-12 bg-[#5f4039] text-white rounded-full shadow-lg flex items-center justify-center lg:hidden"
        onClick={() => setShowFilters(true)}
        aria-label="Open Filters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 013 6.5V4zm0 0v2.5A4.5 4.5 0 003.546"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductPage;
