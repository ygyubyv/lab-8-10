import React, { useState } from "react";
import "../index.css";

const CinemaHall = ({ movieId, bookedSeats, onBookSeats }) => {
  const rows = 5;
  const cols = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const completeBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Оберіть хоча б одне місце для бронювання");
      return;
    }
    onBookSeats(selectedSeats);
    setSelectedSeats([]);
  };

  return (
    <div className="cinema-hall">
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="seat-row">
          {Array.from({ length: cols }).map((_, col) => {
            const seatId = `${row}-${col}`;
            const isSelected = selectedSeats.includes(seatId);
            const isBooked = bookedSeats.includes(seatId);
            return (
              <div
                key={col}
                className={`seat ${isSelected ? "selected" : ""} ${
                  isBooked ? "booked" : "available"
                }`}
                onClick={() => toggleSeat(row, col)}
              />
            );
          })}
        </div>
      ))}
      <button className="book-confirm" onClick={completeBooking}>
        Підтвердити бронювання
      </button>
    </div>
  );
};

export default CinemaHall;
