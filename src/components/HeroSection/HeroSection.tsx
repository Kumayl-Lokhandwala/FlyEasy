import React from "react";

const HeroSection = () => {
  return (
    <div className="flex h-screen w-full bg-gradient-to-r from-blue-100 to-white pt-20">
      {/* Left: Image covering 70% */}
      <div className="w-[70%]">
        <img
          src="/images/airport.jpeg"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* Right: Text section covering 30% */}
      <div className="w-[30%] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to FlyEasy</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Your stress-free gateway to seamless travel.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
