import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul>
      <li>
        {props.movies.map((movie) => {
          return <Movie title={movie.title} removeMovie={props.removeMovie} />;
        })}
      </li>
    </ul>
  );
};

export default MovieList;
