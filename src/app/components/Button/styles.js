import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.color ?? "grey"};
  border-radius: 25px;
  min-height: 50px;
  min-width: 100px;
  border: none;
`;
