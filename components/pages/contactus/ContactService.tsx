import React from "react";
import Image from "next/image";
import contact from "../../data/contactus/contact"; // Adjust the path based on your folder structure

const ContactService: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-center gap-6 mx-auto mt-[100px] w-full max-w-4xl">
      {contact.map((item, index) => (
        <div key={index}>
          <Image
            src={item.Images}
            alt={`Contact Image ${index + 1}`}
            height={50}
            width={50}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ContactService;
