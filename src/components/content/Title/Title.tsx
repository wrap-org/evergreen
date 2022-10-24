import React from 'react';
import classNames from 'classnames';

import styles from './Title.module.scss';

const Title = ({
  children,
  as = 'h1',
  size,
}: {
  children: React.ReactNode;
  as?: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}) => {
  const CustomTag = as as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      className={classNames(styles.title, {
        [styles[`title--${size || as}`]]: true,
      })}
    >
      {children}
    </CustomTag>
  );
};

export default Title;
