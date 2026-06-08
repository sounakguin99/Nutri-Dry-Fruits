"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="px-6 sm:px-8 lg:px-12 mx-auto relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="Nature's Harvest Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-gray-900 font-semibold text-lg">
              NATURE'S HARVEST
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              PRODUCTS
            </Link>
            <Link
              href="/store"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              STORE
            </Link>
          </div>
          <div className="">
            <Link
              href="/contactus"
              className="bg-[#6B584C] hidden md:block text-white px-6 py-2 rounded hover:bg-[#574539] transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden h-screen absolute z-50 bg-white w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                ABOUT US
              </Link>
              <Link
                href="/products"
                className="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                PRODUCTS
              </Link>
              <Link
                href="/store"
                className="block py-2 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                STORE
              </Link>
              <Link
                href="/contactus"
                className="block text-center py-2 px-2 bg-[#6B584C] text-white rounded-md hover:bg-[#574539]"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
