"use client";

import React, { useState } from "react";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 text-left text-base font-medium focus:outline-none"
      onClick={onClick}
    >
      {question}
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? "transform rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && <div className="pb-4 text-sm text-gray-600">{answer}</div>}
  </div>
);

export default function SimpleFAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the benefits of Dry Fruits?",
      answer:
        "Benefits of dry fruits include high nutritional value, rich in antioxidants, and great source of energy.",
    },
    {
      question: "What are the Health benefits of Dry Fruits?",
      answer:
        "Dry fruits provide essential nutrients, support heart health, and boost immunity.",
    },
    {
      question: "What are some Healthy Seeds for Weight loss?",
      answer:
        "Chia seeds, flax seeds, and pumpkin seeds are excellent for weight management.",
    },
    {
      question: "What is the average shelf life of Dry Fruits?",
      answer:
        "Most dry fruits can last 6-12 months when stored properly in airtight containers.",
    },
    {
      question: "What all products can I buy from Ashwit Dry Fruits?",
      answer:
        "We offer a wide range of dry fruits, nuts, seeds, and trail mixes.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-base font-medium mb-2">
          Where can I buy Premium Dry Fruits and Nuts online?
        </h2>
        <p className="text-sm text-gray-600">
          Ashwit Dry Fruits is the one-stop destination for premium dry fruits &
          nuts. Our products are made of 100% dry fruits & nuts. It is fresh and
          natural.
        </p>
      </div>

      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
}
