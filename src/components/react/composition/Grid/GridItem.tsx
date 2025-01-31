import classNames from 'classnames';
import React from 'react';

import styles from './Grid.module.scss';

export interface GridItemProps {
  readonly children?: React.ReactNode;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly align?: string;
  readonly xs?: number | 'auto';
  readonly sm?: number | 'auto';
  readonly md?: number | 'auto';
  readonly lg?: number | 'auto';
  readonly xl?: number | 'auto';
  readonly xxl?: number | 'auto';
  readonly xxxl?: number | 'auto';
  readonly max?: number | 'auto';
  readonly desktop?: number | 'auto';
  readonly flex?: boolean;
  readonly order?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    xxxl?: number;
    max?: number;
    desktop?: number;
  };
}

const Item = ({
  children,
  grow = false,
  shrink = false,
  align,
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  xxl = 0,
  xxxl = 0,
  max = 0,
  desktop = 0,
  flex = false,
  order = {},
}: GridItemProps) => {
  const cx = classNames(styles.grid__item, {
    [styles['grid__item--grow']]: grow,
    [styles['grid__item--shrink']]: shrink,
    [styles[`grid__item--align-${align}`]]: align,
    [styles[`grid__item--xs-${xs}`]]: xs,
    [styles[`grid__item--sm-${sm}`]]: sm,
    [styles[`grid__item--md-${md}`]]: md,
    [styles[`grid__item--lg-${lg}`]]: lg,
    [styles[`grid__item--xl-${xl}`]]: xl,
    [styles[`grid__item--xxl-${xxl}`]]: xxl,
    [styles[`grid__item--xxxl-${xxxl}`]]: xxxl,
    [styles[`grid__item--max-${max}`]]: max,
    [styles[`grid__item--desktop-${desktop}`]]: desktop,
    [styles['grid__item--flex']]: flex,
    [styles[`grid__item--order-xs-${order.xs}`]]: order.xs,
    [styles[`grid__item--order-sm-${order.sm}`]]: order.sm,
    [styles[`grid__item--order-md-${order.md}`]]: order.md,
    [styles[`grid__item--order-lg-${order.lg}`]]: order.lg,
    [styles[`grid__item--order-xl-${order.xl}`]]: order.xl,
    [styles[`grid__item--order-xxl-${order.xxl}`]]: order.xxl,
    [styles[`grid__item--order-xxxl-${order.xxxl}`]]: order.xxxl,
    [styles[`grid__item--order-max-${order.max}`]]: order.max,
    [styles[`grid__item--order-desktop-${order.desktop}`]]: order.desktop,
  });

  return <div className={cx}>{children}</div>;
};

export default Item;
