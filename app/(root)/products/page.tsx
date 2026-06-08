import Header from "@/components/pages/products/header";
import ProductPage from "@/components/pages/products/products";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Browse our extensive collection of premium dried fruits, nuts, berries, and exotic dates.",
};

export default function page() {
  return (
    <div>
      <Header />
      <ProductPage />
    </div>
  );
}
