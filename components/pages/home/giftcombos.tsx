import Image from "next/image";
import Link from "next/link";
import giftcombos from "../../data/homebanners/giftcombos";

export default function GiftCombos() {
  return (
    <section className="container mx-auto px-4 py-12 w-11/12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">GIFT COMBOS</h2>
          <p className="text-gray-600">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>
        </div>
        <Link
          href="/gift-combos"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {giftcombos.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden">
            <div className="relative aspect-square mb-4 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
