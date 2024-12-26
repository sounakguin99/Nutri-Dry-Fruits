import Image from "next/image";
import { visionMissionContent } from "../../data/about/ceo";

export default function VisionMissionSection() {
  const { vision, mission, chairman } = visionMissionContent;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 w-11/12">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Vision and Mission Section */}
        <div className="space-y-8">
          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {vision.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {vision.description}
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {mission.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {mission.description}
            </p>
          </div>
        </div>

        {/* Chairman Section */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8 relative">
          {/* Image with overlay */}
          <div className="relative w-full max-w-[550px] h-[300px] md:h-[400px] lg:h-[450px]">
            <Image
              src={chairman.image.src}
              alt={chairman.image.alt}
              height={400}
              width={500}
              className="h-full w-full object-cover rounded-lg"
              priority
            />
            {/* Overlay container */}
            <div className="absolute text-center bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold">{chairman.name}</h3>
              <p className="text-sm">{chairman.position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
