import Movie from "./Movie";

const MovieList = (props) => {

  return (
    <ul>
      <li>
        {props.movies.map((movie) => {
          return <Movie key={movie.Title} title={movie.Title} removeMovie={props.removeMovie} />;
        })}
      </li>
    </ul>
  );
};

export default MovieList;
