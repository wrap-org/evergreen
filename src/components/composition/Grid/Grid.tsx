import classNames from 'classnames';
import React from 'react';

import styles from './Grid.module.scss';
import Item from './GridItem';

interface GridProps {
  children: React.ReactNode;
  wrap?: boolean;
  inset?: boolean;
  insetFluid?: boolean;
  insetVerticalFluid?: boolean;
  direction?: string;
  justify?: string;
  align?: string;
  spacing?: 'default' | 'xs' | 'sm' | 'lg' | 'xl' | 'none';
  fullWidth?: boolean;
}

const Grid = ({
  children,
  wrap,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  inset,
  insetFluid,
  insetVerticalFluid,
  spacing,
  fullWidth,
}: GridProps) => {
  const cx = classNames(styles.grid, {
    [styles['grid--wrap']]: wrap,
    [styles['grid--inset']]: inset,
    [styles['grid--inset-fluid']]: insetFluid,
    [styles['grid--inset-vertical-fluid']]: insetVerticalFluid,
    [styles[`grid--${direction}`]]: direction,
    [styles[`grid--justify-${justify}`]]: justify,
    [styles[`grid--align-${align}`]]: align,
    [styles[`grid--spacing-${spacing}`]]: spacing !== 'default',
    [styles['grid--full-width']]: fullWidth,
  });

  return <div className={cx}>{children}</div>;
};

Grid.Item = Item;

export default Grid;
