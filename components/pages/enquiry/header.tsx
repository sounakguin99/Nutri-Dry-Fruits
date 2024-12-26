import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div>
        <Image
          src="/others/ovbanner.svg"
          alt="Banner Image"
          width={1200}
          height={400}
          className="h-full w-full object-contain lg:object-cover"
        />
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl lg:text-4xl">ENQUIRY</h1>
      </div>
    </div>
  );
}
