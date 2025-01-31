import classnames from 'classnames';
import React from 'react';

import { Colors } from '../../../../types/colors.type';

import styles from './BarStack.module.scss';

export interface ItemProps {
  readonly color: Colors;
  readonly size: number;
}

const Item = ({ color, size }: ItemProps) => {
  const classes = classnames(styles['bar-stack__item'], {
    [styles[`bar-stack__item--color-${color}`]]: color,
  });

  return <div className={classes} style={{ width: `${size}%` }} />;
};

export default Item;
