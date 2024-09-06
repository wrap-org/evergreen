import classNames from 'classnames';
import React from 'react';

import styles from './Grid.module.scss';
import Item from './GridItem';

interface GridProps {
  readonly children?: React.ReactNode;
  readonly wrap?: boolean | 'wrap-reverse';
  readonly inset?: boolean;
  readonly insetFluid?: boolean;
  readonly insetVerticalFluid?: boolean;
  readonly direction?: string;
  readonly justify?: string;
  readonly align?: string;
  readonly spacing?: 'default' | 'xs' | 'sm' | 'lg' | 'xl' | 'none';
  readonly fullWidth?: boolean;
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
    [styles['grid--wrap']]: wrap === true,
    [styles['grid--wrap-reverse']]: wrap === 'wrap-reverse',
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
