import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookFlight from "../../components/BookFlight/BookFlight";

const BookFlightPage = () => {
  return (
    <div>
      <Navbar />
      <BookFlight />
      <Footer />
    </div>
  );
};

export default BookFlightPage;
