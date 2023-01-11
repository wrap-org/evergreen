import cx from 'classnames';
import React from 'react';

import styles from './List.module.scss';
import Item from './ListItem';

const List = ({
  children,
  spacing = 'md',
  as = 'ul',
}: {
  children: React.ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
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
