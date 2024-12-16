import TestimonialSlider from "@/components/pages/home/customers";
import GiftCombos from "@/components/pages/home/giftcombos";
import ProductSlider from "@/components/pages/home/highlight";
import MostViewedProducts from "@/components/pages/home/mvp";
import Recommendedforyou from "@/components/pages/home/rfu";
import ServiceFeatures from "@/components/pages/home/services";
import React from "react";

export default function page() {
  return (
    <div>
      <ProductSlider />
      <MostViewedProducts />
      <Recommendedforyou />
      <GiftCombos />
      <TestimonialSlider />
      <ServiceFeatures />
    </div>
  );
}
