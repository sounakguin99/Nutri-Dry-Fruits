import DryFruitsSection from "@/components/pages/about/adf";
import VisionMissionSection from "@/components/pages/about/ceo";
import TestimonialSlider from "@/components/pages/about/customers";
import Header from "@/components/pages/about/header";
import ServiceFeatures from "@/components/pages/about/services";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nature's Harvest and our commitment to bringing you the world's finest nuts and dried fruits.",
};

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
