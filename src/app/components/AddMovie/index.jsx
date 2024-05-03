import { useState } from "react";
import Button from "../Button";
import MovieList from "../MovieList";
import TextInput from "../TextInput";
import getMovieData from "@/api/getMovieData";

const AddMovie = (props) => {
  const [movieResults, setMovieResults] = useState([]);

  const handleChange = (event) => {
    if (event.target.value.length < 3) setMovieResults([]);
    else {
      getMovieData(event.target.value)
        .then((data) => setMovieResults(data));
    }
  }

  return (
    <div>
      <h2>Search movie</h2>
      <TextInput onChange={handleChange} />
      <MovieList
        movies={movieResults}
        addMovie={props.addMovie}
      />
    </div>
  );
};

export default AddMovie;
