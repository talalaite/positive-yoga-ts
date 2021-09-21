import styled from 'styled-components';

interface Styles {
  maxWidth?: string;
}

export const ContentWrapper = styled.div<Styles>`
  max-width: ${({ maxWidth }) => maxWidth || '22rem'};
`;
