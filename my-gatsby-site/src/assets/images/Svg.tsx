import React from 'react';
import { icons } from 'utils/icons';

interface Props extends React.SVGProps<SVGSVGElement> {
  src: keyof typeof icons;
}

export const Svg: React.FC<Props> = ({ src, ...props }) => {
  const Icon: React.FC<React.SVGProps<SVGSVGElement>> = icons[src];

  return !Icon ? null : <Icon {...props} />;
};
