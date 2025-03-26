import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookFlightPage from "./pages/BookFlightPage/BookFlightPage";
import BookingConfirmation from "./components/BookingConfirmation/BookingConfirmation";
import MyBookingPage from "./pages/MyBookingPage/MyBookingPage";
import TrackFlightPage from "./pages/TrackFlightPage/TrackFlightPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import InFlightServicesPage from "./pages/InFlightServicesPage/InFlightServicesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookFlightPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/my-bookings" element={<MyBookingPage />} />
        <Route path="/track-flight" element={<TrackFlightPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/inflight-services" element={<InFlightServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
