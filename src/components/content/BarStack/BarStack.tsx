import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './BarStack.module.scss';
import Item from './Item';

const BarStack = ({
  children,
  compact = false,
  width = 100,
}: {
  readonly children: ReactNode;
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
