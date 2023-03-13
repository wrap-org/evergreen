import classNames from 'classnames';
import React from 'react';

import styles from './Label.module.scss';

import { Colors } from 'src/types/colors.type';
import { Sizes } from 'src/types/font.type';

export interface LabelProps {
  children?: React.ReactNode;
  size?: Sizes;
  textColor?: Colors;
  backgroundColor?: Colors;
  rounded?: boolean;
}

const Label = ({
  children,
  size = 'base',
  textColor = 'green',
  backgroundColor = 'white',
  rounded = false,
}: LabelProps) => (
  <span
    className={classNames(styles.label, {
      [styles[`label--size-${size}`]]: !!size,
      [styles[`label--text-${textColor}`]]: !!textColor,
      [styles[`label--background-${backgroundColor}`]]: !!backgroundColor,
      [styles['label--rounded']]: rounded,
    })}
  >
    {children}
  </span>
);

export default Label;
