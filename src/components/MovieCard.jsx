import React from "react";
import "../index.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>
        <strong>Жанр:</strong> {movie.genre}
      </p>
      <p>
        <strong>Сеанс:</strong> {movie.date} о {movie.showtime}
      </p>
      <p>
        <strong>Тривалість:</strong> {movie.duration}
      </p>
      <p>
        <strong>Рейтинг:</strong> {movie.rating}
      </p>
    </div>
  );
};

export default MovieCard;
