import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const mockBookings = [
  {
    id: "BK001",
    airline: "IndiGo",
    from: "DEL",
    to: "BOM",
    date: "2025-04-10",
    time: "10:30 AM",
    travelClass: "Economy",
    passengers: 2,
    price: "₹12,500",
    status: "Confirmed",
  },
  {
    id: "BK002",
    airline: "Air India",
    from: "BLR",
    to: "GOI",
    date: "2025-05-05",
    time: "3:45 PM",
    travelClass: "Business",
    passengers: 1,
    price: "₹18,200",
    status: "Confirmed",
  },
];

const Bookings = () => {
  const [bookings, setBookings] = useState(mockBookings);

  const handleCancelBooking = (id: string) => {
    const booking = bookings.find((b) => b.id === id);
    if (!booking) return;

    const confirmCancel = window.confirm(
      `Are you sure you want to cancel your booking with ${booking.airline}?`
    );

    if (confirmCancel) {
      setBookings(bookings.filter((b) => b.id !== id));
      setTimeout(() => {
        alert(
          `Booking with ${booking.airline} has been cancelled successfully.`
        );
      }, 300); // Delay to simulate smooth UI update
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Bookings
        </h2>

        {bookings.length > 0 ? (
          <Table className="shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead>Airline</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Passengers</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.airline}</TableCell>
                  <TableCell>{booking.from}</TableCell>
                  <TableCell>{booking.to}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.travelClass}</TableCell>
                  <TableCell>{booking.passengers}</TableCell>
                  <TableCell className="font-bold text-green-600">
                    {booking.price}
                  </TableCell>
                  <TableCell
                    className={`font-semibold ${
                      booking.status === "Confirmed"
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            No upcoming bookings found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
