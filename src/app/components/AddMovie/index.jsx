import Button from "../Button";
import MovieList from "../MovieList";

const AddMovie = (props) => {
  console.log([{ title: "Matrix" }, { title: "Lord of the Rings" }]);
  return (
    <div>
      <MovieList
        movies={[{ title: "Matrix" }, { title: "Lord of the Rings" }]}
        addMovie={props.addMovie}
      />
      <Button
        text={"AddMovie"}
        handleClick={() => props.addMovie({ title: "Kill Bill" })}
      />
    </div>
  );
};

export default AddMovie;
