import React from 'react';

import styles from './App.module.scss';

const AppFooter = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.app__footer}>{children}</div>
);

export default AppFooter;
