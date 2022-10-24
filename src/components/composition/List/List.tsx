import React from 'react';

import Item from './Item';

import styles from './List.module.scss';

const List = ({ children }: { children: React.ReactNode; }) => (
  <ul className={styles.list}>
    {children}
  </ul>
);

List.Item = Item;

export default List;
