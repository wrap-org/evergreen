import React from 'react';
import classNames from 'classnames';
import Item from './GridItem';

import styles from './Grid.module.scss';

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
  });

  return <div className={cx}>{children}</div>;
};

Grid.defaultProps = {
  wrap: undefined,
  inset: undefined,
  insetFluid: undefined,
  insetVerticalFluid: undefined,
  direction: undefined,
  justify: undefined,
  align: undefined,
  spacing: undefined,
};

Grid.Item = Item;

export default Grid;
