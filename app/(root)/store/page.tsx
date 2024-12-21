import Header from "@/components/pages/store/header";
import StoreGallery from "@/components/pages/store/imagegrid";
import StoreData from "@/components/pages/store/storedata";
import LocationMap from "@/components/pages/store/storemap";

import React from "react";

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
