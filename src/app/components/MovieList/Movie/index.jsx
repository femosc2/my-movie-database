import Button from "../../Button";
import { StyledMovie } from "./styles";

const Movie = (props) => {
  return (
    <StyledMovie>
      <p>{props.title}</p>
      <Button
        text={props.type === "list" ? "Remove" : "Add"}
        color={props.type === "list" ? "red" : "green"}
        handleClick={() => {
          props.type === "list"
            ? props.removeMovie(props.title)
            : props.addMovie(props.title);
        }}
      />
    </StyledMovie>
  );
};

export default Movie;
