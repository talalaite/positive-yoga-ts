import styled from 'styled-components';

interface Styles {
  fontSize?: string;
  lineHeight?: string;
}

export const SmallText = styled.span<Styles>`
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.25rem'};
`;
