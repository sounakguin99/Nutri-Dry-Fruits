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
        <div key={index}>
          <Image
            src={banner.src}
            alt={banner.alt}
            width={1920}
            height={700}
            className="w-full h-full object-contain "
          />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
