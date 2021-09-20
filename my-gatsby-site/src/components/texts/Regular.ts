import styled from 'styled-components';

interface Styles {
  fontSize?: string;
  lineHeight?: string;
}

export const RegularText = styled.span<Styles>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
`;
