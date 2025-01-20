import { useAutoAnimate } from '@formkit/auto-animate/react';
import cx from 'classnames';
import React from 'react';

import styles from './List.module.scss';
import Item from './ListItem';

const List = ({
  children,
  spacing = 'md',
}: {
  readonly children?: React.ReactNode;
  readonly spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
}) => {
  const [parent] = useAutoAnimate();
  return (
    <ul
      ref={parent}
      className={cx(styles.list, {
        [styles[`list--mobius-spacing-${spacing}`]]: spacing,
      })}
    >
      {children}
    </ul>
  );
};

List.Item = Item;

export default List;
