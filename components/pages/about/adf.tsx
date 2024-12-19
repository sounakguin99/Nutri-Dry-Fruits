import Image from "next/image";
import { dryFruitsContent } from "../../data/about/adf";

export default function DryFruitsSection() {
  const { title, subtitle, description, image } = dryFruitsContent;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 w-11/12">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="relative h-full w-full ">
          <Image
            src={image.src}
            alt={image.alt}
            height={800}
            width={800}
            className="h-full w-full object-cover rounded-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>

          <p className="text-lg md:text-xl font-medium text-gray-600">
            {subtitle}
          </p>

          <div className="space-y-4 text-gray-600">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
