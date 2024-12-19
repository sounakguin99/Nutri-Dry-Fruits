import Image from "next/image";
import { visionMissionContent } from "../../data/about/ceo";

export default function VisionMissionSection() {
  const { vision, mission, chairman } = visionMissionContent;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 w-11/12">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
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
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-[550px] h-[450px]">
            <Image
              src={chairman.image.src}
              alt={chairman.image.alt}
              height={400}
              width={500}
              className="h-full w-full object-cover rounded-lg"
              priority
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {chairman.name}
            </h3>
            <p className="text-gray-600">{chairman.position}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
