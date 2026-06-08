import Header from "@/components/pages/store/header";
import StoreGallery from "@/components/pages/store/imagegrid";
import StoreData from "@/components/pages/store/storedata";
import LocationMap from "@/components/pages/store/storemap";

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Store",
  description: "Visit Nature's Harvest physical store locations or explore our premium collection.",
};

export default function page() {
  return (
    <div>
      <Header />
      <StoreGallery />
      <StoreData />
      <LocationMap />
    </div>
  );
}
