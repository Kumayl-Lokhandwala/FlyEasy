const testimonials = [
  {
    name: "Emily R.",
    review: "Booking was seamless and prices were great!",
    image: "/images/user1.jpg",
  },
  {
    name: "John D.",
    review: "Flight tracking helped me stay updated in real-time.",
    image: "/images/user2.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        What Our Customers Say
      </h2>
      <div className="flex gap-6 max-w-4xl mx-auto mt-8">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow-md flex items-center"
          >
            <img
              src={testi.image}
              alt={testi.name}
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-700 italic">"{testi.review}"</p>
              <p className="font-bold mt-2">{testi.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
