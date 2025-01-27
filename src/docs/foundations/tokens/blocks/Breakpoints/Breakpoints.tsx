import React from 'react';

import styles from './Breakpoints.module.scss';

const breakpoints = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'tablet',
  'desktop',
  'max',
];

export default function Breakpoints() {
  return (
    <div className={styles.breakpoints}>
      {breakpoints.map((breakpoint) => (
        <div
          key={breakpoint}
          className={`${styles.breakpoints__item} ${styles[`breakpoints__item--${breakpoint}`]}`}
        >
          <span className={styles.breakpoints__text}>{breakpoint}</span>
        </div>
      ))}
    </div>
  );
}
