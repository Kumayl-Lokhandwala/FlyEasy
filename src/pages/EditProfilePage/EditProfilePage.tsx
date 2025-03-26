import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const navigate = useNavigate();

  // User Info
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+91 9876543210");

  // Password Change
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Mock Booking History
  const bookings = [
    {
      id: 1,
      flight: "AI-202",
      from: "DEL",
      to: "BOM",
      date: "2025-04-10",
      status: "Confirmed",
    },
    {
      id: 2,
      flight: "6E-550",
      from: "BLR",
      to: "DXB",
      date: "2025-05-02",
      status: "Cancelled",
    },
  ];

  // Handle Profile Update
  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
    navigate("/");
  };

  // Handle Password Change
  const handleChangePassword = () => {
    if (!currentPassword || !newPassword) {
      alert("Please enter both current and new passwords.");
      return;
    }
    alert("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
  };

  // Handle Logout
  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Profile
        </h2>

        {/* Profile Details */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Email"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Phone Number"
          />
          <button
            onClick={handleSaveProfile}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>

        {/* Change Password */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          Change Password
        </h3>
        <div className="flex flex-col space-y-3 mt-2">
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Current Password"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="New Password"
          />
          <button
            onClick={handleChangePassword}
            className="w-full bg-gray-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Update Password
          </button>
        </div>

        {/* Booking History */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          Booking History
        </h3>
        <div className="mt-2 bg-gray-50 p-3 rounded-md">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex justify-between py-2 border-b"
            >
              <span>
                {booking.flight} ({booking.from} → {booking.to})
              </span>
              <span
                className={`font-semibold ${
                  booking.status === "Cancelled"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>

        {/* Payment Methods (Mock UI) */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          Payment Methods
        </h3>
        <div className="mt-2 bg-gray-50 p-3 rounded-md">
          <p>💳 Visa **** 1234</p>
          <p>💳 MasterCard **** 5678</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
