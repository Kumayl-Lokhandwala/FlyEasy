import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import PerksSection from "../../components/PerksSection/PerksSection";
import PopularDestinations from "../../components/PopularDestination/PopularDestination";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <HeroSection />
      <PerksSection />
      <PopularDestinations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
