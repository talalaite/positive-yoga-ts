import React, { useEffect } from 'react';
import LazyLoad, { forceVisible } from 'react-lazyload';
import styled from 'styled-components';

import { images } from 'utils/images';

interface Styles {
  width?: string;
  height?: string;
  margin?: number;
  padding?: number;
  maxHeight?: string;
  maxWidth?: string;
}

interface Props extends Styles {
  src: string;
}

const Img = styled.img<Styles>`
  display: block;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
  max-width: ${({ maxWidth }) => maxWidth || ''};
`;

export const Image: React.FC<Props> = ({ src, ...rest }) =>
  !images[src] ? null : (
    <LazyLoad height={200} once>
      <picture>
        <Img src={images[src]} alt="" {...rest} />
      </picture>
    </LazyLoad>
  );

//
// {
//   useEffect(() => {
//     forceVisible();
//   }, []);

//   return !images[src] ? null : (
//     <LazyLoad once>
//       <picture>
//         <Img src={images[src]} alt="" {...rest} />
//       </picture>
//     </LazyLoad>
//   );
// };
