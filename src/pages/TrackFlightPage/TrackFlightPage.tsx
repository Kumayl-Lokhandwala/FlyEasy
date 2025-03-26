import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TrackFlight from "@/components/TrackFlight/TrackFlight";
import React from "react";

interface Props {}

const TrackFlightPage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <TrackFlight />
      <Footer />
    </div>
  );
};

export default TrackFlightPage;
