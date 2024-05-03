"use client";
import { useState } from "react";
import AddMovie from "../components/AddMovie";
import Button from "../components/Button";
import MovieList from "../components/MovieList";

export default function MovieListPage() {
  const [movies, setMovies] = useState([
    { title: "Star Wars" },
    { title: "Inglorious Basterds" },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <main>
      <AddMovie addMovie={addMovie} />
      <p> Hej13</p>
      <p>Hej 14</p>
      <Button text={"remove"} />
      <MovieList movies={movies} />
    </main>
  );
}
