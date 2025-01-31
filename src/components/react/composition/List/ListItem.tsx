import React from 'react';

import styles from './List.module.scss';

export interface ListItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  [index: string]: any;
}

const Item = ({ icon, children, ...props }: Readonly<ListItemProps>) => (
  <li className={styles.list__item} {...props}>
    {icon ? <div className={styles['list__item-icon']}>{icon}</div> : null}
    <div className={styles['list__item-content']}>{children}</div>
  </li>
);

export default Item;
