import classNames from 'classnames';
import React from 'react';

import styles from './Title.module.scss';

export interface TitleProps {
  readonly children?: React.ReactNode;
  readonly as?: string;
  readonly size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  readonly family?: 'default' | 'heading';
}

const Title = ({
  children,
  as = 'h1',
  size,
  family = 'heading',
}: TitleProps) => {
  const CustomTag = as as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      className={classNames(styles.title, {
        [styles[`title--${size || as}`]]: true,
        [styles[`title--family-${family}`]]: family,
      })}
    >
      {children}
    </CustomTag>
  );
};

export default Title;
