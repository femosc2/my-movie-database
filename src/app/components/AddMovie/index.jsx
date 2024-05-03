import Button from "../Button";

const AddMovie = (props) => {
  return (
    <div>
      <Button
        text={"AddMovie"}
        handleClick={() => props.addMovie({ title: "Kill Bill" })}
      />
    </div>
  );
};

export default AddMovie;
