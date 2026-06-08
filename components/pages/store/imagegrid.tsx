import Image from "next/image";

export default function StoreGallery() {
  return (
    <div className="w-11/12 mx-auto mt-[50px] lg:mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First grid */}
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Image
              src="/store/nh_st1.png"
              alt="Nature's Harvest store interior"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/store/nh_st2.png"
              alt="Premium nuts display"
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
              src="/store/nh_st3.png"
              alt="Fresh juices and chilled display"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/store/nh_st4.png"
                alt="Product shelf display"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/store/nh_st5.png"
                alt="Nature's Harvest storefront"
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
