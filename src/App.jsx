import React from "react";
import MovieList from "./components/MovieList";
import { movies } from "./data/movies";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <h1>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
