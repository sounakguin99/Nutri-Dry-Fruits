import Header from "@/components/pages/privacypolicy/header";
import Privacypolicy from "@/components/pages/privacypolicy/privacypolicy";
import ServiceFeatures from "@/components/pages/privacypolicy/services";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Privacypolicy />
      <ServiceFeatures />
    </div>
  );
}
