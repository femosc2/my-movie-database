import Button from "../../Button";

const Movie = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <Button
        text={"remove"}
        handleClick={() => props.removeMovie(props.title)}
      />
    </div>
  );
};

export default Movie;
