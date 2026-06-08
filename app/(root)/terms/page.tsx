import Header from "@/components/pages/termsandconditions/header";
import ServiceFeatures from "@/components/pages/termsandconditions/service";
import Terms from "@/components/pages/termsandconditions/terms";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms And Conditions",
  description: "Read the terms and conditions for using the Nature's Harvest website.",
};

export default function page() {
  return (
    <div>
      <Header />
      <Terms />
      <ServiceFeatures />
    </div>
  );
}
