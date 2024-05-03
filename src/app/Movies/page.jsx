"use client";
import { useState, useEffect } from "react";
import getMovieData from "../../api/getMovieData"
import AddMovie from "../components/AddMovie";
import Button from "../components/Button";
import MovieList from "../components/MovieList";

const MovieListPage = () => {
  const [movies, setMovies] = useState([
    { title: "Star Wars" },
    { title: "Inglorious Basterds" },
  ]);

  useEffect(() => {
    getMovieData("Star wars");
  }, []);

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

export default MovieListPage;
