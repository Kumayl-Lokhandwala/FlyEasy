import { CheckCircle, PlaneTakeoff, Radar, ShieldCheck } from "lucide-react";

const perks = [
  {
    icon: <PlaneTakeoff className="w-10 h-10 text-blue-500" />,
    title: "Lowest Flight Prices",
    description:
      "Book flight tickets at unbeatable prices with exclusive deals.",
  },
  {
    icon: <Radar className="w-10 h-10 text-green-500" />,
    title: "Live Flight Status",
    description: "Track real-time flight departures, delays, and arrivals.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
    title: "Secure & Easy Booking",
    description:
      "Fast and secure flight booking with hassle-free payment options.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-yellow-500" />,
    title: "24/7 Customer Support",
    description: "Dedicated support team available anytime to assist you.",
  },
];

const PerksSection = () => {
  return (
    <div className="py-16 bg-[#FDF7E3] text-gray-900">
      <h2 className="text-3xl font-bold text-center text-yellow-600">
        Why Fly With Us?
      </h2>

      {/* Perks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            {perk.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-800">
              {perk.title}
            </h3>
            <p className="text-gray-600 mt-2">{perk.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksSection;
