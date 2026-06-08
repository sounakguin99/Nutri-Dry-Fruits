import Header from "@/components/pages/privacypolicy/header";
import Privacypolicy from "@/components/pages/privacypolicy/privacypolicy";
import ServiceFeatures from "@/components/pages/privacypolicy/services";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Nature's Harvest privacy policy to understand how we protect your data.",
};

export default function page() {
  return (
    <div>
      <Header />
      <Privacypolicy />
      <ServiceFeatures />
    </div>
  );
}
