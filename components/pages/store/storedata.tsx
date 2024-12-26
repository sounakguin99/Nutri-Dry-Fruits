import React from "react";

export default function StoreData() {
  return (
    <div className="w-11/12 mx-auto pt-[80px]">
      <h1 className="text-4xl font-bold text-[#614141] mb-4">
        ARIHANT DRY FRUITS
      </h1>

      <h2 className="text-lg font-medium mb-6">
        Taste The Perfect Blend Of Nutrients And Flavor In Every Dry Fruit.
      </h2>

      <div className="space-y-4 mb-8">
        <p className="text-gray-700">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text
          Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
          And Scrambled It To Make A Type Specimen Book.
        </p>

        <p className="text-gray-700">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text
          Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
          And Scrambled It To Make A Type Specimen Book.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-2">
          <svg
            className="w-5 h-5 text-orange-600 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-sm">
            G-19, THE GRAND PLAZA, VIP ROAD,
            <br />
            SURAT, GUJARAT 395007
          </span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-orange-600 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="text-sm">DATES, NUTS, CHOCOLATES</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-orange-600 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-sm">+91 1234567890</span>
        </div>
      </div>
    </div>
  );
}
