import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

export const PrimaryButton = styled(Button).attrs({
  as: 'button',
})`
  box-shadow: 0px 16px 32px rgba(255, 155, 78, 0.24);
  font-weight: 700;
  text-align: center;
  margin-top: 0.5rem;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  &:hover {
    background: #ec8b3f;
  }
  &:active {
    background: #90caf9;
  }
`;
