"use client";
import { useState } from "react";
import AddMovie from "../components/AddMovie";
import MovieList from "../components/MovieList";

export default function MovieListPage() {
  const [movies, setMovies] = useState([
    { title: "Star Wars" },
    { title: "Inglorious Basterds" },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (movieToBeRemoved) => {
    setMovies(movies.filter((movie) => movie.title !== movieToBeRemoved));
  };

  return (
    <main>
      <AddMovie addMovie={addMovie} />
      <p> Hej13</p>
      <p>Hej 14</p>
      <MovieList movies={movies} removeMovie={removeMovie} />
    </main>
  );
}
