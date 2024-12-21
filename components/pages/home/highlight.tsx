"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import highlights from "../../data/home/homebanners/highlight"; // Import the highlights data

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
        className="absolute -left-[30px] top-1/2 -translate-y-1/2 z-10  p-2 "
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
        className="absolute -right-[30px] top-1/2 -translate-y-1/2 z-10  p-2 "
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
        {highlights.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative aspect-square mb-4">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
