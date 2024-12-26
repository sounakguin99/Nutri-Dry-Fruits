"use client";
import Image from "next/image";
import Link from "next/link";
import giftcombos from "../../data/home/homebanners/giftcombos";
import Slider from "react-slick";

export default function GiftCombos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false, // To avoid any weird centering
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1100,
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

  return (
    <section className="container mx-auto 2xl:px-4 2xl:py-12 w-11/12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:p-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">GIFT COMBOS</h2>
          <p className="text-gray-600">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>
        </div>
        <Link
          href="/products"
          className="px-10 py-2 border-2 border-black rounded mt-8 lg:mt-0"
        >
          VIEW ALL
        </Link>
      </div>

      <Slider {...settings}>
        {giftcombos.map((product) => (
          <div
            key={product.id}
            className=" rounded-lg overflow-hidden p-0 lg:p-4"
          >
            <div className="relative aspect-square mb-4 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="">
              <h3 className="font-semibold text-xl lg:text-base xl:text-xl mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
