const destinations = [
  { name: "Paris", image: "/images/paris.jpg" },
  { name: "New York", image: "/images/new-york.jpeg" },
  { name: "Dubai", image: "/images/dubai.jpg" },
  { name: "Tokyo", image: "/images/tokyo.jpeg" },
];

const PopularDestinations = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Explore Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
        {destinations.map((dest, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
