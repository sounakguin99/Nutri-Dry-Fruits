"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    text: "Lorem Ipsum Is Simply Dummy Text Of The Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    author: "Fenna",
  },
  {
    id: 2,
    text: "Another customer testimonial here. This is a placeholder text that will be replaced with actual content.",
    author: "Alex",
  },
  {
    id: 3,
    text: "Third testimonial text goes here. This is also a placeholder that should be replaced with real feedback.",
    author: "Jordan",
  },
];

export default function TestimonialSlider() {
  // Handle hydration mismatch by mounting component only on client side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "max-w-3xl mx-auto",
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  if (!mounted) return null;

  return (
    <section className="py-16 px-4 relative bg-[#faf7f2]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative">
        <h2 className="text-2xl font-bold text-center mb-8">
          WHAT OUR CUSTOMER SAY
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="outline-none">
              <div className="text-center px-4">
                <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                  {testimonial.text}
                </p>
                <p className="font-medium">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function CustomArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "prev" ? "left-0" : "right-0"
      } z-10 p-2 hover:opacity-75 transition-opacity`}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
