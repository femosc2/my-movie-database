"use client";
import { useState } from "react";
import getMovieData from "../../api/getMovieData"
import AddMovie from "../components/AddMovie";
import MovieList from "../components/MovieList";
import { StyledMain } from "./styles";

const MovieListPage = () => {
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

  const handleChange = (event) => {
    if(event.target.value.length > 3)
      setMovies(getMovieData(event.target.value));
  }

  return (
    <StyledMain>
      <h1>My Movies!</h1>
      <AddMovie addMovie={addMovie} />
      <MovieList type={"list"} movies={movies} removeMovie={removeMovie} />
    </StyledMain>
  );
}

export default MovieListPage;
