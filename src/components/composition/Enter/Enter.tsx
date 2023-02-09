import classNames from 'classnames';
import React from 'react';

import styles from './Enter.module.scss';

export default function Enter({
  children,
  type,
  delay,
  enter,
  flex,
}: {
  children?: React.ReactNode;
  type?: string;
  delay?: string;
  enter?: boolean;
  flex?: boolean;
}) {
  const cx = classNames(styles.enter, {
    [styles[`enter--${type}`]]: type,
    [styles['enter--enter']]: enter,
    [styles['enter--flex']]: flex,
  });
  return (
    <div className={cx} style={{ animationDelay: delay }}>
      {children}
    </div>
  );
}

Enter.defaultProps = {
  type: 'fade',
  delay: '0s',
  enter: true,
  flex: false,
};
