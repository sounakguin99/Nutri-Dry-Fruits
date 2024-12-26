import React, { Suspense } from "react";
import EnquiryPage from "@/components/pages/enquiry/enquiry";
import Header from "@/components/pages/enquiry/header";
import ServiceFeatures from "@/components/pages/enquiry/service";

export default function Page() {
  return (
    <div>
      <Header />
      {/* Wrap the EnquiryPage with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <EnquiryPage />
      </Suspense>
      <ServiceFeatures />
    </div>
  );
}
