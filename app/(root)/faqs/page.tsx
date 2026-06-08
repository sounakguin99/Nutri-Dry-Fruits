import SimpleFAQAccordion from "@/components/pages/faqs/faqs";
import Header from "@/components/pages/faqs/header";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Find answers to frequently asked questions about our products, shipping, and return policies.",
};

export default function page() {
  return (
    <div>
      <Header />
      <SimpleFAQAccordion />
    </div>
  );
}
