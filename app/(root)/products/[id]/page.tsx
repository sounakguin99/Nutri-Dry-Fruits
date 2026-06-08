"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "../../../../components/data/products/products";
import Link from "next/link";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import RelatedProducts from "@/components/pages/products/relatedproducts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useParams(); // Use `useParams` for dynamic route parameter
  const productId = id as string;

  // Find the product using the id
  const product = products.find((p) => p.id === parseInt(productId));

  // Initialize state with default values
  const [quantity, setQuantity] = useState(product ? product.quantity : 1);
  const [weight, setWeight] = useState(product ? product.weight : "100gm");

  if (!product) return <div className="p-6">Product not found!</div>;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      <div
        className="w-full mx-auto rounded-lg bg-cover bg-center "
        style={{ backgroundImage: "url('/others/pdetailsbanner.svg')" }} // Apply background image
      >
        <div className="flex flex-col md:flex-row md:w-11/12 mx-auto 0 p-10 gap-5 md:gap-10">
          {/* Variation Images (Mobile-first approach) */}
          <div className="hidden md:block">
            <div className="flex flex-row md:flex-col gap-3 h-auto w-auto">
              {product.variations.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt || "Product variation"}
                  width={500}
                  height={500}
                  className=" object-cover h-[150px] w-[400px] cursor-pointer border-2 bg-white p-5 border-[#5f4039]"
                />
              ))}
            </div>
          </div>

          {/* Product Main Image */}
          <div className="md:h-full md:w-full">
            <Image
              src={product.src}
              alt={product.alt}
              width={600}
              height={600}
              className="rounded-lg p-10 h-full w-full border bg-white border-[#5f4039]"
            />
          </div>
          {/* Variation Images (Mobile-first approach) */}
          <div className="flex flex-row md:flex-col gap-3 md:hidden ">
            {product.variations.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt || "Product variation"}
                width={500}
                height={500}
                className="rounded-lg h-[100px] w-[250px] p-5 bg-white cursor-pointer border-2 border-[#5f4039]"
              />
            ))}
          </div>

          {/* Product Details */}
          <div className="w-full">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold mb-2">
                {product.title.toUpperCase()}
              </h1>
              <p className="text-gray-600 font-semibold text-lg mb-4">{`₹ ${product.price}/kg`}</p>
            </div>
            <p className="text-gray-700 mb-6">{product.longdescription}</p>
            <p className=" text-lg font-semibold mr-2">Reviews</p>
            <div className="flex items-center mb-6">
              <p className="text-yellow-500 text-xl mr-2">★★★★☆</p>
              <span className="text-gray-600 text-sm">(3.5 Reviews)</span>
            </div>

            {/* Quantity and Weight */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full sm:w-[250px]">
                <label className="text-sm font-medium mb-2" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity} // Controlled input
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} // Update state
                  min="1"
                  className="border rounded px-4 py-2 text-sm focus:outline-none border-[#5f4039] w-full"
                />
              </div>
              {/* Weight Dropdown */}
              <div className="flex flex-col w-full sm:w-[250px]">
                <label className="text-sm font-medium mb-2" htmlFor="weight">
                  Weight
                </label>
                <select
                  id="weight"
                  value={weight} // Controlled select
                  onChange={(e) => setWeight(e.target.value)} // Update state dynamically
                  className="border rounded px-4 py-2 text-sm focus:outline-none border-[#5f4039] w-full"
                >
                  <option value="">--Select--</option>
                  <option value="100gm">100gm</option>
                  <option value="250gm">250gm</option>
                  <option value="500gm">500gm</option>
                  <option value="1kg">1kg</option>
                  <option value="2kg">2kg</option>
                </select>
              </div>
            </div>

            <Link
              href={`/enquiry?id=${product.id}&quantity=${quantity}&weight=${weight}`}
            >
              <button className="bg-[#5f4039] hover:bg-white hover:border-[#65504B] hover:text-[#65504B] text-white py-2 px-6 rounded mt-[160px] w-full lg:w-auto border border-[#5f4039]">
                BUY IT NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-5 md:mt-16 flex flex-col md:flex-row items-start lg:items-center justify-between mb-6 w-11/12 mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-2">RELATED PRODUCTS</h2>
          <p className="text-gray-600">
            Discover some of our related products that might interest you.
          </p>
        </div>
        <Link
          href="/products"
          className="px-10 py-2 border-2 border-black rounded mt-8 lg:mt-0 hover:bg-black hover:text-white transition-colors"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="w-11/12 mx-auto mb-14">
        {product.relatedproducts && product.relatedproducts.length > 0 ? (
          <div className="product-slider-container px-4">
            <Slider {...sliderSettings}>
              {product.relatedproducts.map((relatedProduct, index) => (
                <div key={index} className="px-3 h-full">
                  <div className="bg-white border border-black rounded-xl hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
                    <div className="relative w-full aspect-square bg-gray-50 p-6 flex items-center justify-center border-b border-black">
                      <Image
                        src={relatedProduct.src}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col items-center text-center">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-[#5f4039] transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <p className="text-gray-500 italic">No related products available.</p>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .product-slider-container .slick-prev:before,
        .product-slider-container .slick-next:before {
          color: #5f4039;
          font-size: 32px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .product-slider-container .slick-prev:hover:before,
        .product-slider-container .slick-next:hover:before {
          color: #D4AF37;
          opacity: 1;
        }
        .product-slider-container .slick-prev {
          left: -40px;
          z-index: 10;
        }
        .product-slider-container .slick-next {
          right: -25px;
          z-index: 10;
        }
        @media (max-width: 640px) {
          .product-slider-container .slick-prev { left: -15px; }
          .product-slider-container .slick-next { right: 0px; }
        }
      `}} />
    </div>
  );
};

export default ProductDetails;
