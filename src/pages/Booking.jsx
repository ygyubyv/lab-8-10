import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import axios from "axios";

const Booking = () => {
  const { id } = useParams();
  const [bookedSeats, setBookedSeats] = useState([]);

  const fetchBookedSeats = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/bookings?movieId=${id}`
      );
      const seats = response.data.map((booking) => booking.seat);
      setBookedSeats(seats);
    } catch (error) {
      console.error("Помилка отримання заброньованих місць:", error);
    }
  };

  useEffect(() => {
    fetchBookedSeats();
  }, [id]);

  const handleBookSeats = async (newSeats) => {
    try {
      const bookingPromises = newSeats.map((seat) =>
        axios.post("http://localhost:5000/bookings", { movieId: id, seat })
      );
      await Promise.all(bookingPromises);

      fetchBookedSeats();
    } catch (error) {
      console.error("Помилка бронювання місць:", error);
    }
  };

  return (
    <div>
      <h2>Бронювання місць</h2>
      <CinemaHall
        movieId={id}
        bookedSeats={bookedSeats}
        onBookSeats={handleBookSeats}
      />
    </div>
  );
};

export default Booking;
