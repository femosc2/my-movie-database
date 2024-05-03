"use client";
import { useState } from "react";
import getMovieData from "../../api/getMovieData"
import AddMovie from "../components/AddMovie";
import MovieList from "../components/MovieList";
import TextInput from "../components/TextInput";

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
    <main>
      <TextInput onChange={handleChange}/>
      <AddMovie addMovie={addMovie} />
      <p> Hej13</p>
      <p>Hej 14</p>
      <MovieList movies={movies} removeMovie={removeMovie} />
    </main>
  );
}

export default MovieListPage;
