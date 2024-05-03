import Movie from "./Movie";
import { StyledMovieList, StyledMovieSection } from "./styles";

const MovieList = (props) => {
  return (
    <StyledMovieSection>
      {props.movies.length ? (
        <StyledMovieList>
          <li>
            {props.movies.map((movie) => {
              return (
                <Movie title={movie.title} removeMovie={props.removeMovie} />
              );
            })}
          </li>
        </StyledMovieList>
      ) : (
        <h2>You have not added any movies, add one above!</h2>
      )}
    </StyledMovieSection>
  );
};

export default MovieList;
