import React from 'react';

import styles from './App.module.scss';

const AppHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.app__header}>{children}</div>
);

export default AppHeader;
