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
                <Movie
                  key={movie.title}
                  title={movie.title}
                  removeMovie={props.removeMovie}
                  addMovie={props.addMovie}
                  type={props.type}
                />
              );
            })}
          </li>
        </StyledMovieList>
      ) : (
        <h2>No movies found!</h2>
      )}
    </StyledMovieSection>
  );
};

export default MovieList;
