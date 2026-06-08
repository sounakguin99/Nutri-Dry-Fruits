// File: locationmap.tsx

import React from "react";

const LocationMap: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto  mt-[80px] mb-[100px]">
      <h2 className="text-lg font-semibold mb-4">GET DIRECTION</h2>
      <div className="border rounded-lg overflow-hidden shadow-md ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.40035632349718!3d34.07623227314757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d3d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1718101569038!5m2!1sen!2sus"
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
