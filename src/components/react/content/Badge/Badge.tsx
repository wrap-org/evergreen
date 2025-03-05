import classNames from 'classnames';
import React from 'react';

import { FontSize } from '../../../../types/tokens.type';

import styles from './Badge.module.scss';

export interface BadgeProps {
  readonly children?: React.ReactNode;
  readonly size?: FontSize;
  readonly muted?: boolean;
  readonly inverse?: boolean;
  readonly className?: string;
}

const Badge = ({
  children,
  size = 'base',
  muted = false,
  inverse = false,
  className,
}: BadgeProps) => (
  <span
    className={classNames(styles.badge, {
      [styles[`badge--size-${size}`]]: !!size,
      [styles['badge--muted']]: muted,
      [styles['badge--inverse']]: inverse,
      [`${className}`]: !!className,
    })}
  >
    {children}
  </span>
);

export default Badge;
