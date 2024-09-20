import classNames from 'classnames';
import React from 'react';

import styles from './HelpText.module.scss';

export default function HelpText({
  children,
  type = 'neutral',
  as = 'div',
  ...props
}: Readonly<{
  children?: React.ReactNode;
  type?: 'neutral' | 'positive' | 'negative';
  as?: 'div' | 'span';
  [key: string]: any;
}>) {
  const CustomTag = as;
  return (
    <CustomTag
      className={classNames(styles['help-text'], {
        [styles[`help-text--${type}`]]: type,
      })}
      {...props}
    >
      {children}
    </CustomTag>
  );
}
