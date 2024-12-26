import Image from "next/image";
import Link from "next/link";
import mvp from "../../data/home/homebanners/mvp"; // Adjust the path to the mvp.js file

export default function MostViewedProducts() {
  return (
    <section className="w-11/12 mx-auto xl:pl-5 xl:pr-6 2xl:pl-10 2xl:pr-5 mt-[50px] lg:mt-0">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center ">
        <div>
          <h2 className="text-xl font-semibold mb-2 tracking-wide">
            RECOMMENDED FOR YOU
          </h2>
          <p className="text-gray-500">
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

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        {/* Feature Banner */}
        <div className="relative mt-8 xl:mt-0 flex items-center w-full lg:hidden xl:block xl:w-[530px] 2xl:w-[550px] justify-center h-full bg-cover rounded-xl overflow-hidden lg:col-span-1">
          <Image
            src="/home/mvp/DN.svg" // Replace with your banner image path
            alt="Fuel Your Body With Nature’s Energy Boosters"
            height={400}
            width={500}
            className="object-contain xl:object-cover 2xl:h-full 2xl:w-full"
          />
        </div>

        <div className="mt-[50px] lg:mt-0">
          {/* Most Viewed Products */}
          {mvp.map((product, index) => (
            <div key={index} className="text-center ">
              <div className="relative lg:h-auto lg:w-auto h-[200px] w-[200px] mx-auto lg:m-none">
                <Image
                  src={product.src}
                  alt={product.alt}
                  height={250}
                  width={250}
                  className="rounded-full object-cover xl:h-[180px] xl:w-[180px] 2xl:h-[200px] 2xl:w-[200px]"
                />
              </div>
              <h3 className="font-semibold text-xl mt-3 mb-2 text-left">
                {product.alt}
              </h3>
              <p className="text-gray-600 text-sm xl:w-[80%] text-left leading-relaxed pt-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
