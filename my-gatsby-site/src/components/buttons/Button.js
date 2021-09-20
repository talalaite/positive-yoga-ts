import styled from "styled-components";
// import { white } from "styles/colors.js";

export const Button = styled.button`
  display: ${(props) => props.display || "inline-block"};
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "0.8rem 1.5rem"};
  max-width: ${(props) => props.maxWidth || "16rem"};
  min-width: ${(props) => props.minWidth || "none"};
  width: ${(props) => props.width || "100%"};
  font-size: ${(props) => props.fontSize || "1rem"};
  background-color: ${(props) => props.background || "transparent"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  color: ${(props) => props.color || "white"};
  cursor: pointer;
`;
