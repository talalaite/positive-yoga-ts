import styled from 'styled-components';
// import { white } from "styles/colors.js";

interface Styles {
  margin?: string;
  padding?: number;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
  fontSize?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: String;
}

export const Button = styled.button<Styles>`
  display: inline-block;
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0.8rem 1.5rem'};
  max-width: ${({ maxWidth }) => maxWidth || '16rem'};
  min-width: ${({ minWidth }) => minWidth || 'none'};
  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};
  color: ${({ color }) => color || 'white'};
  cursor: pointer;
`;
