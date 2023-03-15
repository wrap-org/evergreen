import classNames from 'classnames';
import React from 'react';

import styles from './Label.module.scss';

import { Sizes } from 'src/types/font.type';

export interface LabelProps {
  children?: React.ReactNode;
  size?: Sizes;
  rounded?: boolean;
  muted?: boolean;
  inverse?: boolean;
}

const Label = ({
  children,
  size = 'base',
  rounded = false,
  muted = false,
  inverse = false,
}: LabelProps) => (
  <span
    className={classNames(styles.label, {
      [styles[`label--size-${size}`]]: !!size,
      [styles['label--rounded']]: rounded,
      [styles['label--muted']]: muted,
      [styles['label--inverse']]: inverse,
    })}
  >
    {children}
  </span>
);

export default Label;
