import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <ToastContainer autoClose={3000} position="top-right" />{" "}
        <nav className="navbar">
          <Link to="/">Home</Link>
        </nav>
        <h1>Список фільмів</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
