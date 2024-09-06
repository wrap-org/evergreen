import React from 'react';

import styles from './BarStack.module.scss';
import Item from './Item';

const BarStack = ({ children }: { readonly children: React.ReactNode }) => (
  <div className={styles['bar-stack']}>{children}</div>
);

BarStack.Item = Item;

export default BarStack;
