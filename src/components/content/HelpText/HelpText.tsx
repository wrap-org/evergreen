import classNames from 'classnames';
import React from 'react';

import styles from './HelpText.module.scss';

export default function HelpText({
  children,
  type = 'neutral',
  ...props
}: Readonly<{
  children?: React.ReactNode;
  type?: 'neutral' | 'positive' | 'negative';
  [key: string]: any;
}>) {
  return (
    <div
      className={classNames(styles['help-text'], {
        [styles[`help-text--${type}`]]: type,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
