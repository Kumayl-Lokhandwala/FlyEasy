import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockFlights } from "@/data/flights";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const BookFlight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");
  const [flights, setFlights] = useState<any[]>([]);
  const [searchDone, setSearchDone] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const filteredFlights = mockFlights.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.date === date
    );

    setFlights(filteredFlights);
    setSearchDone(true);
  };

  const handleBookNow = (flight: any) => {
    navigate("/booking-confirmation", {
      state: { flight, passengers, travelClass },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      {!searchDone && (
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Book a Flight
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Departure Airport (e.g., DEL)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Arrival Airport (e.g., BOM)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="w-full p-3 border rounded-md"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <div className="mt-4">
            <input
              type="number"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value))}
              className="w-full p-3 border rounded-md"
              placeholder="Number of Passengers"
            />
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Search Flights
          </button>
        </div>
      )}

      {searchDone && (
        <div className="mt-8 w-full max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Available Flights
          </h3>
          <Table className="shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead>Airline</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Arrival</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Passengers</TableHead>
                <TableHead>Price (INR)</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flights.map((flight) => (
                <TableRow key={flight.id}>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.departure}</TableCell>
                  <TableCell>{flight.arrival}</TableCell>
                  <TableCell>{travelClass}</TableCell>
                  <TableCell>{passengers}</TableCell>
                  <TableCell className="font-bold text-green-600">
                    ₹
                    {(
                      parseInt(flight.price.replace("₹", "").replace(",", "")) *
                      passengers
                    ).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleBookNow(flight)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Book Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {searchDone && flights.length === 0 && (
        <p className="mt-6 text-gray-600">
          No flights found for the selected route.
        </p>
      )}
    </div>
  );
};

export default BookFlight;
