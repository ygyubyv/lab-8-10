import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie.rating >= minRating
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук фільму..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      >
        <option value={0}>Всі рейтинги</option>
        <option value={5}>5 і вище</option>
        <option value={6}>6 і вище</option>
        <option value={7}>7 і вище</option>
        <option value={8}>8 і вище</option>
        <option value={9}>9 і вище</option>
      </select>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
