import classNames from 'classnames';
import React from 'react';

import styles from './BarStack.module.scss';
import Item from './Item';

const BarStack = ({
  children,
  compact = false,
  width = 100,
}: {
  readonly children?: React.ReactNode;
  readonly compact?: boolean;
  readonly width?: number;
}) => (
  <div
    className={classNames(styles['bar-stack'], {
      [styles['bar-stack--compact']]: compact,
    })}
    style={{
      width: `${width}%`,
    }}
  >
    {children}
  </div>
);

BarStack.Item = Item;

export default BarStack;
