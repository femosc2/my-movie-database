"use client";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { StyledMain } from "./styles";

const Home = () => {
  const [movies, setMovies] = useState([
    { Title: "Star Wars", Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg" },
    { Title: "Inglorious Basterds", Poster: "https://m.media-amazon.com/images/M/MV5BMDIxYTZmNjQtMmMxYi00MDkyLWJjZDYtYTM1NTA3ZWY2MTUwXkEyXkFqcGdeQXVyMjA3NDg2Mzg@._V1_SX300.jpg" },
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (movieToBeRemoved) => {
    setMovies(movies.filter((movie) => movie.Title !== movieToBeRemoved));
  };

  return (
    <>
      <Header />
      <StyledMain>
        <AddMovie addMovie={addMovie} updateMovies={setMovies} movies={movies} />
        <MovieList type={"list"} movies={movies} removeMovie={removeMovie} />
      </StyledMain>
    </>
  );
}

export default Home;
