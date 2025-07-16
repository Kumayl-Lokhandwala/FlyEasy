import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md px-6 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-500">
        ✈️ FlyEasy
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link to="/booking" className="hover:text-yellow-500 transition">
          Book a Flight
        </Link>
        <Link to="/my-bookings" className="hover:text-yellow-500 transition">
          My Bookings
        </Link>
        <Link to="/track-flight" className="hover:text-yellow-500 transition">
          Track Flight
        </Link>
        <Link
          to="/inflight-services"
          className="hover:text-yellow-500 transition"
        >
          Inflight Services
        </Link>
      </div>

      {/* User Profile with Dropdown */}
      <div className="relative">
        <img
          src="/images/profile.webp"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-yellow-500 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border border-gray-200">
            <Link
              to="/edit-profile"
              className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
              onClick={() => setMenuOpen(false)}
            >
              Edit Profile
            </Link>
            <button
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-yellow-100"
              onClick={() => {
                setMenuOpen(false);
                alert("Logged out successfully!");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
