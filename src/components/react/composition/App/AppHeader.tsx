import React from 'react';

import styles from './App.module.scss';

const AppHeader = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles.app__header}>{children}</div>
);

export default AppHeader;
