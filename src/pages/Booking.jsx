import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import BookingForm from "../components/BookingForm";
import { getBookedSeats, bookSeats } from "../services/BookingService";

const Booking = () => {
  const { id } = useParams();
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchSeats = async () => {
      setBookedSeats(await getBookedSeats(id));
    };
    fetchSeats();
  }, [id]);

  const handleBookSeats = () => {
    if (selectedSeats.length === 0) {
      alert("Оберіть хоча б одне місце для бронювання");
      return;
    }
    setShowForm(true);
  };

  const handleFormSubmit = async (userData) => {
    await bookSeats(id, selectedSeats, userData);
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    setShowForm(false);
  };

  return (
    <div>
      <h2>Бронювання місць</h2>
      <CinemaHall bookedSeats={bookedSeats} onBookSeats={setSelectedSeats} />
      {!showForm ? (
        <button onClick={handleBookSeats}>Перейти до бронювання</button>
      ) : (
        <BookingForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Booking;
