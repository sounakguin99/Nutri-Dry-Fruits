import Image from "next/image";

export default function StoreGallery() {
  return (
    <div className="w-11/12 mx-auto mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left column - large image */}
        <div className="md:row-span-3">
          <Image
            src="/store/st1.svg"
            alt="Store interior with green arched shelving"
            width={500}
            height={800}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Middle column - single image */}
        <div className="md:row-span-3">
          <Image
            src="/store/st2.svg"
            alt="Vase with yellow flowers"
            width={400}
            height={800}
            className="w-[250px] h-full object-cover rounded-lg"
          />
        </div>

        {/* Right column - three stacked images */}
        <div className="flex flex-col gap-4 ">
          <div>
            <Image
              src="/store/st3.svg"
              alt="Store refrigerator display"
              width={400}
              height={260}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex">
            <div>
              <Image
                src="/store/st4.svg"
                alt="Product shelf display"
                width={400}
                height={260}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/store/st5.svg"
                alt="Store branding display"
                width={400}
                height={260}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
