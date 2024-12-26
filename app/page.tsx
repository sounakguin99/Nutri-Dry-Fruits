import HeroSection from "@/components/pages/home/banner";

import TestimonialSlider from "@/components/pages/home/customers";
import GiftCombos from "@/components/pages/home/giftcombos";
import ProductSlider from "@/components/pages/home/highlight";
import MostViewedProducts from "@/components/pages/home/mvp";

import ShopByPurpose from "@/components/pages/home/sbp";
import ServiceFeatures from "@/components/pages/home/services";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <ProductSlider />
      <MostViewedProducts />
      {/* <Recommendedforyou /> */}
      <ShopByPurpose />
      <GiftCombos />
      <TestimonialSlider />
      <ServiceFeatures />
    </div>
  );
}
