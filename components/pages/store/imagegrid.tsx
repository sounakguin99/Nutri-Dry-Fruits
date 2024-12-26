import Image from "next/image";

export default function StoreGallery() {
  return (
    <div className="w-11/12 mx-auto mt-[50px] lg:mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First grid */}
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Image
              src="/store/st1.svg"
              alt="Store interior with green arched shelving"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/store/st2.svg"
              alt="Vase with yellow flowers"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second grid */}
        <div className="flex flex-col gap-4">
          <div>
            <Image
              src="/store/st3.svg"
              alt="Store refrigerator display"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/store/st4.svg"
                alt="Product shelf display"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/store/st5.svg"
                alt="Store branding display"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
