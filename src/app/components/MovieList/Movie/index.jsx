import Button from "../../Button";
import { StyledMovie } from "./styles";

const Movie = (props) => {
  return (
    <StyledMovie>
      <p>{props.title}</p>
      <Button
        text={"Remove"}
        color={"red"}
        handleClick={() => props.removeMovie(props.title)}
      />
    </StyledMovie>
  );
};

export default Movie;
