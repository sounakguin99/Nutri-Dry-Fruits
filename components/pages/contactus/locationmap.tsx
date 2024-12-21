// File: locationmap.tsx

import React from "react";

const LocationMap: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto  mt-[80px] mb-[100px]">
      <h2 className="text-lg font-semibold mb-4">GET DIRECTION</h2>
      <div className="border rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.282831278806!2d72.7804560747173!3d21.141139783910315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053d02b898d6f%3A0xe563c0874c74a015!2sArihant%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1734782739206!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
