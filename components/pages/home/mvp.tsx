import Image from "next/image";
import Link from "next/link";
import mvp from "../../data/home/homebanners/mvp"; // Adjust the path to the location of the mvp.js file

export default function MostViewedProducts() {
  return (
    <section className="w-11/12 mx-auto xl:pl-[20px] xl:pr-[25px] 2xl:pl-[40px] 2xl:pr-[20px]">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">MOST VIEWED PRODUCTS</h2>
          <p className="text-gray-600">
            Taste The Perfect Blend Of Nutrients And Flavor In Every Dry Fruit.
          </p>
        </div>
        <Link
          href="/products"
          className="px-10 py-2 border-2 border-black rounded mt-8 lg:mt-0"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0 lg:gap-20 xl:gap-y-8 items-center xl:pr-[280px] ">
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

        {/* Feature Banner */}
        <div className="relative mt-8 xl:mt-0 flex items-center w-full lg:hidden xl:block xl:w-[530px] 2xl:w-[550px] justify-center h-full bg-cover rounded-xl overflow-hidden lg:col-span-1">
          <Image
            src="/home/mvp/DN.svg"
            alt="Dry Fruits Collection"
            height={500}
            width={700}
            className="object-contain xl:object-cover 2xl:h-full 2xl:w-full"
          />
        </div>
      </div>
    </section>
  );
}
