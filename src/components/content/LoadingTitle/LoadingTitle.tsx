import React from 'react';

import LoadingText from '../LoadingText/LoadingText';
import Title, { TitleProps } from '../Title/Title';

export interface LoadingTitleProps extends TitleProps {
  chars?: number;
}

export default function LoadingTitle({ chars, ...props }: LoadingTitleProps) {
  return (
    <Title {...props} aria-hidden="true">
      <LoadingText chars={chars} />
    </Title>
  );
}
