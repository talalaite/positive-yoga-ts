import styled from 'styled-components';

interface Styles {
  margin?: string;
  padding?: string;
  maxWidth?: string;
}

export const Container = styled.div<Styles>`
  margin: ${({ margin }) => margin || '0 auto'};
  padding: ${({ padding }) => padding || '1rem'};
  max-width: ${({ maxWidth }) => maxWidth || '72rem'};
`;
