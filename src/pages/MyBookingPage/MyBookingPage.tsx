import Bookings from "@/components/Booking/Booking";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

interface Props {}

const MyBooking = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Bookings />
      <Footer />
    </div>
  );
};

export default MyBooking;
