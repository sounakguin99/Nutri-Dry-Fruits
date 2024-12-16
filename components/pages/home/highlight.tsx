"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Almond",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-[#8B6E5E]",
  },
  {
    name: "Cashew",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-[#8B3E2F]",
  },
  {
    name: "Pista",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-[#6B7E5E]",
  },
  {
    name: "Walnut",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-[#8B1F41]",
  },
  {
    name: "Raisin",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-[#F4A460]",
  },
];

export default function ProductSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
      {/* Custom Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="product-slider -mx-2">
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div className={`${product.bgColor} rounded-lg p-4 text-center`}>
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-white text-lg font-medium">{product.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
