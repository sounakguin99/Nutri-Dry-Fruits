export default function ServiceFeatures() {
  const features = [
    {
      id: 1,
      icon: "/placeholder.svg?height=40&width=40",
      title: "Free Shipping On Orders",
      subtitle: "Above ₹1500/-",
    },
    {
      id: 2,
      icon: "/placeholder.svg?height=40&width=40",
      title: "Pay",
      subtitle: "On Delivery",
    },
    {
      id: 3,
      icon: "/placeholder.svg?height=40&width=40",
      title: "100% Quality",
      subtitle: "Guaranteed",
    },
  ];

  return (
    <div className="bg-black text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-700 last:border-0 pb-6 md:pb-0"
            >
              <div className="mb-3">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-10 h-10 invert" // invert to make placeholder image white
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
