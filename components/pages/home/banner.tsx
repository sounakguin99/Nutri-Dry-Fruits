"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Image from "next/image";
import homebanners from "../../data/home/homebanners/banner"; // Ensure this path is correct relative to your file structure

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="hero-section w-full h-[232px] lg:h-[570px] xl:h-[700px] 2xl:h-[500px] overflow-hidden relative">
      <Slider {...settings}>
        {homebanners.map((banner, index) => (
          <div key={index} className="w-full h-full bg-gray-200">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1920} // Set an appropriate width
              height={700} // Set an appropriate height
              className="w-full 2xl:h-[500px] h-[232px] lg:h-[570px] xl:h-[700px] object-contain "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
