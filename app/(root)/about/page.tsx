import DryFruitsSection from "@/components/pages/about/adf";
import VisionMissionSection from "@/components/pages/about/ceo";
import TestimonialSlider from "@/components/pages/about/customers";
import Header from "@/components/pages/about/header";
import ServiceFeatures from "@/components/pages/about/services";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <DryFruitsSection />
      <VisionMissionSection />
      <TestimonialSlider />
      <ServiceFeatures />
    </div>
  );
}
