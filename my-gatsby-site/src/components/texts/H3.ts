import styled from 'styled-components';

import { TextBasedBold } from './TextBase';

export const H3 = styled(TextBasedBold).attrs({
  as: 'h3',
})`
  font-size: 1.5rem;
  line-height: 2rem;
`;
