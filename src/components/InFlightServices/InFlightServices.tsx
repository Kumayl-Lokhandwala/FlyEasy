import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "In-Flight Wi-Fi",
    description: "Stay connected in the skies with high-speed internet.",
    image: "/images/wifi.jpg",
  },
  {
    title: "Gourmet Meals",
    description: "Enjoy delicious meals curated by top chefs.",
    image: "/images/meals.avif",
  },
  {
    title: "Entertainment",
    description: "Watch movies, TV shows, and listen to music onboard.",
    image: "/images/entertainment.jpg",
  },
  {
    title: "Extra Legroom",
    description: "Upgrade your comfort with extra legroom seating.",
    image: "/images/legroom.jpg",
  },
  {
    title: "Duty-Free Shopping",
    description: "Shop luxury brands and exclusive items mid-air.",
    image: "/images/shopping.jpg",
  },
  {
    title: "Lounge Access",
    description: "Relax in luxury airport lounges before your flight.",
    image: "/images/lounge.jpg",
  },
];

const InflightServices = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Fixed Centered Header */}
      <div className="bg-white py-4 shadow-md sticky top-0 z-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Inflight Services</h2>
      </div>

      {/* Scrollable Content - 3 Cards Per Screen */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-xl overflow-hidden relative h-[calc(100vh/3)]"
            >
              {/* Full-Height & Full-Width Image - No Extra Space */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover block"
              />

              {/* Overlay for Better Text Visibility */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InflightServices;
