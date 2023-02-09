import React from 'react';

import styles from './App.module.scss';

const AppMain = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.app__main}>{children}</div>
);

export default AppMain;
