import axios from "axios";

const API_URL = "http://localhost:5000/bookings";

export const getBookedSeats = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}?movieId=${movieId}`);
    return response.data.map((booking) => booking.seat);
  } catch (error) {
    console.error("Помилка отримання заброньованих місць:", error);
    return [];
  }
};

export const bookSeats = async (movieId, seats, userData) => {
  try {
    const bookingPromises = seats.map((seat) =>
      axios.post(API_URL, { movieId, seat, user: userData })
    );
    await Promise.all(bookingPromises);
  } catch (error) {
    console.error("Помилка бронювання місць:", error);
  }
};
