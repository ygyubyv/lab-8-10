import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
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
