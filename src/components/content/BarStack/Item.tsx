import classnames from 'classnames';
import React from 'react';

import styles from './BarStack.module.scss';

import { Colors } from 'src/types/colors.type';

export interface ItemProps {
  color: Colors;
  size: number;
}

const Item = ({ color, size }: ItemProps) => {
  const classes = classnames(styles['bar-stack__item'], {
    [styles[`bar-stack__item--color-${color}`]]: color,
  });

  return <div className={classes} style={{ width: `${size}%` }} />;
};

export default Item;
