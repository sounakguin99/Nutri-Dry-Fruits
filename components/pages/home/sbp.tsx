import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Gifting",
    image: "/placeholder.svg?height=60&width=60",
    href: "/shop/gifting",
    bgColor: "bg-[#8B6E5E]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    name: "Cooking",
    image: "/placeholder.svg?height=60&width=60",
    href: "/shop/cooking",
    bgColor: "bg-[#6B7E5E]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    ),
  },
  {
    name: "Snacking",
    image: "/placeholder.svg?height=60&width=60",
    href: "/shop/snacking",
    bgColor: "bg-[#8B1F41]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 20v-8M9 12V4M15 12V4M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    name: "Daily Nutrition",
    image: "/placeholder.svg?height=60&width=60",
    href: "/shop/daily-nutrition",
    bgColor: "bg-[#1B6B7C]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export default function ShopByPurpose() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">SHOP BY PURPOSE</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We just made it easy for you to shop on your terms. Let's get started
          to find your way for Passion for Nutrition.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className={`${category.bgColor} rounded-lg p-6 text-center group transition-transform hover:-translate-y-1`}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gray-800">
                {category.icon}
              </div>
              <h3 className="text-white text-lg font-medium">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
