"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Image from "next/image";
import homebanners from "../../data/home/homebanners/banner"; // Ensure this path is correct relative to your file structure

const HeroSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {homebanners.map((banner, index) => (
        <div key={index} className="relative w-full h-[500px] ">
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
              {banner.title}
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
              {banner.subtitle}
            </p>
            <button className="bg-[#6B584C] text-white px-8 py-3 rounded hover:bg-[#574539] transition-colors font-semibold shadow-lg">
              {banner.buttonText}
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
