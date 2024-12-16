import Image from "next/image";
import Link from "next/link";

export default function Recommendedforyou() {
  const products = [
    {
      name: "Almond",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      name: "Cashew",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      name: "Pista",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">MOST VIEWED PRODUCTS</h2>
          <p className="text-gray-600">
            Taste The Perfect Blend Of Nutrients And Flavor In Every Dry Fruit.
          </p>
        </div>
        <Link
          href="/products"
          className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Dry Fruits Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
              Experience The Wholesome Goodness Of Hand Picked Dry Fruits.
            </h3>
            <Link
              href="/products"
              className="inline-block px-6 py-2 bg-[#CD7F32] text-white rounded hover:bg-[#B87333] transition-colors"
            >
              DISCOVER NOW
            </Link>
          </div>
        </div>
        {products.map((product, index) => (
          <div key={index} className="space-y-4">
            <div className="relative aspect-square rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
