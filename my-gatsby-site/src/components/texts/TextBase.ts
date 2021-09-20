import styled from 'styled-components';

import { black } from 'styles/colors';
// jei yra ? nereikalaus privalomai
interface Styles {
  margin?: string;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
}

export const TextBase = styled.p<Styles>`
  margin: ${({ margin }) => margin || ''};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || black};
  text-align: ${({ textAlign }) => textAlign || ''};
  text-decoration: ${({ textDecoration }) => textDecoration || ''};
  text-transform: ${({ textTransform }) => textTransform || ''};
`;

export const TextBasedBold = styled(TextBase).attrs(() => ({}))``;

// export const TextBasedBold = styled(TextBase).attrs((props) => ({
//   fontWeight: props.fontWeight || 700,
// }))``;
