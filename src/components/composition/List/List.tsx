import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Item, { ItemProps } from './ListItem';

import styles from './List.module.scss';

const List = ({ children }: { children: React.ReactNode; }) => (
  <ul className={styles.list}>
    {children}
  </ul>
);

List.Item = Item;

export default List;
