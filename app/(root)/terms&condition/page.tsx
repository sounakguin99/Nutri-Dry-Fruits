import Header from "@/components/pages/termsandconditions/header";
import ServiceFeatures from "@/components/pages/termsandconditions/service";
import Terms from "@/components/pages/termsandconditions/terms";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Terms />
      <ServiceFeatures />
    </div>
  );
}
