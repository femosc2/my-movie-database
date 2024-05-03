"use client";
import { useState, useEffect } from "react";
import getMovieData from "../../api/getMovieData"
import AddMovie from "../components/AddMovie";
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

export default MovieListPage;
