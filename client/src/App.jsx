import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import LayoutSeat from "./pages/LayoutSeat";
import MovieDetails from "./pages/movieDetails";
import MyBookings from "./pages/myBookings";
import Favourite from "./pages/Favorite";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<LayoutSeat />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
