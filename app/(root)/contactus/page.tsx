import ContactForm from "@/components/pages/contactus/contactfrom";
import ContactService from "@/components/pages/contactus/ContactService";
import Header from "@/components/pages/contactus/header";
import LocationMap from "@/components/pages/contactus/locationmap";
import ServiceFeatures from "@/components/pages/contactus/services";
import React from "react";

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
