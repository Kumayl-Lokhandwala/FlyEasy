import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;
  const passengers = location.state?.passengers;
  const travelClass = location.state?.travelClass;

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-gray-600 text-lg">No booking details found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Booking Confirmed! 🎉
        </h2>
        <p className="text-center text-gray-700 mt-2">
          Your flight has been successfully booked.
        </p>

        <div className="mt-6 border p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">
            Flight Details
          </h3>
          <p>
            <strong>Airline:</strong> {flight.airline}
          </p>
          <p>
            <strong>From:</strong> {flight.from} ✈ <strong>To:</strong>{" "}
            {flight.to}
          </p>
          <p>
            <strong>Date:</strong> {flight.date}
          </p>
          <p>
            <strong>Departure:</strong> {flight.departure}
          </p>
          <p>
            <strong>Arrival:</strong> {flight.arrival}
          </p>
          <p>
            <strong>Class:</strong> {travelClass}
          </p>
          <p>
            <strong>Passengers:</strong> {passengers}
          </p>
          <p className="text-lg font-bold text-green-600 mt-2">
            Total Price: ₹
            {(
              parseInt(flight.price.replace("₹", "").replace(",", "")) *
              passengers
            ).toLocaleString()}
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Back to Home
          </Button>
          <Button
            onClick={() => navigate("/booking")}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Book Another Flight
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
