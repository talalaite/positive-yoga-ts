import styled from 'styled-components';

interface Styles {
  fontSize?: string;
  lineHeight?: string;
}

export const CaptionText = styled.span<Styles>`
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.125rem'};
`;
