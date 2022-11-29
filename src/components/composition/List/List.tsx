import React from 'react';
import cx from 'classnames';

import Item from './ListItem';

import styles from './List.module.scss';

const List = ({
  children,
  spacing,
  as = 'ul',
}: {
  children: React.ReactNode;
  spacing?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  as?: string;
}) => {
  const CustomTag = as as keyof JSX.IntrinsicElements;
  return (
    <CustomTag
      className={cx(styles.list, {
        [styles[`list--spacing-${spacing}`]]: spacing,
      })}
    >
      {children}
    </CustomTag>
  );
};

List.Item = Item;

export default List;
