import classNames from 'classnames';
import React from 'react';

import { Sizes } from '../../../types/font.type';

import styles from './Badge.module.scss';

export interface BadgeProps {
  readonly children?: React.ReactNode;
  readonly size?: Sizes;
  readonly rounded?: boolean;
  readonly muted?: boolean;
  readonly inverse?: boolean;
}

const Badge = ({
  children,
  size = 'base',
  rounded = false,
  muted = false,
  inverse = false,
}: BadgeProps) => (
  <span
    className={classNames(styles.badge, {
      [styles[`badge--size-${size}`]]: !!size,
      [styles['badge--rounded']]: rounded,
      [styles['badge--muted']]: muted,
      [styles['badge--inverse']]: inverse,
    })}
  >
    {children}
  </span>
);

export default Badge;
