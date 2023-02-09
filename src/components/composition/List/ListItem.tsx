import React from 'react';

import styles from './List.module.scss';

export interface ListItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  [index: string]: any;
}

const Item = ({ icon, children, ...props }: ListItemProps) => (
  <li className={styles.list__item} {...props}>
    {icon ? <div className={styles['list__item-icon']}>{icon}</div> : null}
    {children}
  </li>
);

Item.defaultProps = {
  icon: undefined,
};

export default Item;
