import { StyledButton } from "./styles";

const Button = (props) => {
  return (
    <StyledButton onClick={() => props.handleClick()}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
