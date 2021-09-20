import styled from 'styled-components';

import { TextBasedBold } from './TextBase';

export const H1 = styled(TextBasedBold).attrs({
  as: 'h1',
})`
  font-size: 2.5rem;
  line-height: 3.5rem;
`;
