import styled from "styled-components";

import { TextBasedBold } from "./TextBase";

export const H2 = styled(TextBasedBold).attrs({
  as: "h2",
})`
  font-size: 2rem;
  line-height: 2.75rem;
`;
