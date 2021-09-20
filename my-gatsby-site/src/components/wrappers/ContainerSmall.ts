import styled from 'styled-components';

import { Container } from './Container';

interface Styles {
  position?: string;
  display?: string;
}

export const ContainerSmall = styled(Container)<Styles>`
  position: ${({ position }) => position || 'relative'};
  display: ${({ display }) => display || 'block'};
  margin: auto;
  padding: ${({ padding }) => padding || '0 1rem'};
  max-width: 48rem;
`;
