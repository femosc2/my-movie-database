import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul>
      <li>
        {props.movies.map((movie) => {
          return <p>{movie.title}</p>;
        })}
      </li>
    </ul>
  );
};

export default MovieList;
