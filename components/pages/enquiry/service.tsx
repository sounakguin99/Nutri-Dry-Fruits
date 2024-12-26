import Image from "next/image";
import servicedata from "../../data/home/services/service";

export default function ServiceFeatures() {
  return (
    <div className="bg-black flex justify-center mt-[80px] mb-[80px] items-center lg:h-[180px] text-white py-6 px-4 w-11/12 mx-auto rounded-xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicedata.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-700 last:border-0 pb-6 md:pb-0"
            >
              <div className="mb-3">
                <Image
                  src={service.icons}
                  alt={service.text}
                  className="h-[80px] w-[80px]"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3 className="font-medium">{service.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
