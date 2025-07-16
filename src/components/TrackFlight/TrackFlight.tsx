import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const mockFlights = [
  {
    id: "AI101",
    airline: "Air India",
    from: "DEL",
    to: "JFK",
    status: "Departed",
    time: "08:30 AM",
  },
  {
    id: "6E202",
    airline: "IndiGo",
    from: "BOM",
    to: "BLR",
    status: "Departed",
    time: "09:45 AM",
  },
  {
    id: "UK303",
    airline: "Vistara",
    from: "BLR",
    to: "DXB",
    status: "Departed",
    time: "10:15 AM",
  },
  {
    id: "SG404",
    airline: "SpiceJet",
    from: "MAA",
    to: "DEL",
    status: "Delayed",
    time: "11:00 AM",
  },
  {
    id: "AI505",
    airline: "Air India",
    from: "HYD",
    to: "SIN",
    status: "Departed",
    time: "11:30 AM",
  },
  {
    id: "G8312",
    airline: "GoAir",
    from: "CCU",
    to: "BOM",
    status: "Boarding",
    time: "12:15 PM",
  },
  {
    id: "EY707",
    airline: "Etihad",
    from: "DEL",
    to: "AUH",
    status: "Security",
    time: "12:45 PM",
  },
  {
    id: "QF400",
    airline: "Qantas",
    from: "SYD",
    to: "LAX",
    status: "Security",
    time: "01:30 PM",
  },
  {
    id: "LH789",
    airline: "Lufthansa",
    from: "FRA",
    to: "ORD",
    status: "Security",
    time: "02:00 PM",
  },
];

const TrackFlight = () => {
  const [search, setSearch] = useState("");

  const filteredFlights = mockFlights.filter(
    (flight) =>
      flight.id.toLowerCase().includes(search.toLowerCase()) ||
      flight.airline.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-6xl mt-20">
        {/* Added margin-top (mt-20) to adjust for navbar */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Track Your Flight
        </h2>

        {/* Search Input */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search by Flight Number or Airline..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Flight Status Table */}
        <div className="overflow-x-auto">
          {/* Ensures table is responsive */}
          <Table className="shadow-lg w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Flight</TableHead>
                <TableHead>Airline</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFlights.length > 0 ? (
                filteredFlights.map((flight) => (
                  <TableRow key={flight.id}>
                    <TableCell>{flight.id}</TableCell>
                    <TableCell>{flight.airline}</TableCell>
                    <TableCell>{flight.from}</TableCell>
                    <TableCell>{flight.to}</TableCell>
                    <TableCell>{flight.time}</TableCell>
                    <TableCell
                      className={`font-semibold ${
                        flight.status === "Departed"
                          ? "text-green-600"
                          : flight.status === "Boarding"
                          ? "text-blue-600"
                          : flight.status === "Security"
                          ? "text-yellow-500"
                          : "text-red-600"
                      }`}
                    >
                      {flight.status}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-gray-600 py-4"
                  >
                    No flights found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TrackFlight;
