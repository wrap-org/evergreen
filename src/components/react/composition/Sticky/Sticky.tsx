import classNames from 'classnames';
import React from 'react';

import styles from './Sticky.module.scss';

interface StickyProps {
  readonly children?: React.ReactNode;
  readonly top?: number;
  readonly largeScreenOnly?: boolean;
}

function Sticky({ children, top = 0, largeScreenOnly = true }: StickyProps) {
  return (
    <div
      className={classNames(styles.sticky, {
        [styles['sticky--large-screen-only']]: largeScreenOnly,
      })}
      style={{ top: `${top}px` }}
    >
      {children}
    </div>
  );
}

export default Sticky;
