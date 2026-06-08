import ContactForm from "@/components/pages/contactus/contactfrom";
import ContactService from "@/components/pages/contactus/ContactService";
import Header from "@/components/pages/contactus/header";
import LocationMap from "@/components/pages/contactus/locationmap";
import ServiceFeatures from "@/components/pages/contactus/services";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nature's Harvest for inquiries, bulk orders, or customer support.",
};

export default function page() {
  return (
    <div>
      <Header />
      <ContactForm />
      <ContactService />
      <ServiceFeatures />
      <LocationMap />
    </div>
  );
}
