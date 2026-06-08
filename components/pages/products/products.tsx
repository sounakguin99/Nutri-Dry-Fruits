"use client";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products/products";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Extract dynamic categories from products array
  const categories = Array.from(new Set(products.map((p) => p.category))).sort();

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setVisibleCount(12); // Reset pagination on filter change
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setVisibleCount(12); // Reset pagination on search
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

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleCloseFilters = () => setShowFilters(false);
  const handleRemoveAllFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setVisibleCount(12);
  };

  const handleApplyFilters = () => {
    setShowFilters(false);
  };

  // Infinite Scroll Observer
  const observerRef = useRef<IntersectionObserver | null>(null);
  const bottomBoundaryRef = useCallback(
    (node: HTMLDivElement) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredProducts.length) {
          // Trigger infinite scroll on mobile (screen width < 1024px corresponds to lg breakpoint)
          if (window.innerWidth < 1024) {
            setVisibleCount((prev) => prev + 12);
          }
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [visibleCount, filteredProducts.length]
  );

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar Filters */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transform w-screen pt-10 pl-6 lg:pl-[40px] pr-6 transition-transform duration-300 overflow-y-auto
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
            className="absolute bottom-[20px] right-0 text-[15px] hidden md:block text-[#5f4039] hover:underline"
            onClick={handleRemoveAllFilters}
          >
            CLEAR ALL
          </button>
        </div>

        {/* Search Filter */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 mb-4 w-full border border-gray-300 rounded focus:outline-none focus:border-[#5f4039]"
        />

        {/* Category Filter */}
        <div className="mt-4 pb-20 lg:pb-0">
          <h3 className="text-md font-bold mb-2 uppercase">Product Type</h3>
          <div className="border border-b-0 border-black mt-2 mb-4"></div>
          <ul className="space-y-3">
            {categories.map((type) => (
              <li key={type} className="flex items-center">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-[#5f4039] checked:border-[#5f4039] transition-colors cursor-pointer"
                      checked={selectedCategories.includes(type)}
                      onChange={() => handleCategoryChange(type)}
                    />
                    <svg
                      className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-black transition-colors capitalize">
                    {type.toLowerCase()}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Filter Actions */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex justify-between gap-4">
            <button
              className="flex-1 bg-gray-200 text-black py-3 rounded font-medium hover:bg-gray-300 transition-colors"
              onClick={handleRemoveAllFilters}
            >
              CLEAR ALL
            </button>
            <button
              className="flex-1 bg-[#5f4039] text-white py-3 rounded font-medium hover:bg-[#3d2b24] transition-colors"
              onClick={handleApplyFilters}
            >
              APPLY
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 lg:p-6 pb-24">
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 lg:px-0">
            {displayedProducts.map((product) => (
              <div 
                key={product.id} 
                className="text-center p-4 bg-white border border-black rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="flex-1 flex flex-col">
                  <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-md p-4 flex items-center justify-center">
                    <Image
                      src={product.src}
                      alt={product.alt}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <hr className="border-gray-500 mb-4 w-full" />

                  <h3 className="text-lg text-left font-bold mb-2 line-clamp-2 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-[14px] text-left mb-4 text-gray-600 line-clamp-3">
                    {product.shortdescription}
                  </p>
                </div>
                
                <div className="mt-auto pt-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="block w-full bg-[#5f4039] text-white py-2.5 px-4 rounded font-medium border border-transparent hover:bg-white hover:border-[#65504B] hover:text-[#65504B] transition-all duration-300"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-20">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-xl text-gray-500 font-medium">No products found.</p>
            <button 
              onClick={handleRemoveAllFilters}
              className="mt-4 text-[#5f4039] hover:underline"
            >
              Clear filters to see more
            </button>
          </div>
        )}

        {/* Intersection Boundary for Mobile Infinite Scroll */}
        <div ref={bottomBoundaryRef} className="h-10 mt-4 w-full"></div>

        {/* Desktop Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="hidden lg:flex justify-center mt-12 mb-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-10 py-3.5 bg-[#5f4039] text-white font-bold tracking-wider rounded border border-transparent hover:bg-white hover:text-[#5f4039] hover:border-[#5f4039] transition-all duration-300 shadow-md hover:shadow-none"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#5f4039] text-white rounded-full shadow-xl flex items-center justify-center lg:hidden z-40 transition-transform hover:scale-105"
        onClick={() => setShowFilters(true)}
        aria-label="Open Filters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
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
