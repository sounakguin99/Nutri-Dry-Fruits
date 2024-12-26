import React from "react";
import Image from "next/image"; // Import Next.js Image component
import sbpdata from "../../data/home/shopbypereference/sbp"; // Adjust the path as necessary

const ShopByPurpose = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-lg font-bold">SHOP BY PURPOSE</h2>
      <p className="text-sm text-gray-600 max-w-lg mx-auto mt-2">
        We just made it easy for you to shop on your terms. Let’s get started to
        find your way for Passion for Nutrition.
      </p>

      <div className="flex justify-center gap-6 mt-6 flex-wrap md:flex-nowrap md:grid md:grid-cols-4 lg:pl-[120px] lg:pr-[120px]  xl:pl-[250px] xl:pr-[250px] 2xl:pl-[250px] 2xl:pr-[250px]">
        {sbpdata.map((item, index) => (
          <div key={index} className="flex flex-col items-center md:w-full">
            <Image
              src={item.image}
              alt={`Purpose ${index + 1}`}
              width={160}
              height={160}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByPurpose;
