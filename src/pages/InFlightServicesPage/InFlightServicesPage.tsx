import Footer from "@/components/Footer/Footer";
import InflightServices from "@/components/InFlightServices/InFlightServices";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const InFlightServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        {/* Push content down to avoid overlap */}
        <InflightServices />
      </div>
      <Footer />
    </div>
  );
};

export default InFlightServicesPage;
