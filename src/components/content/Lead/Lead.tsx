import React from 'react';

import styles from './Lead.module.scss';

const Lead = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.lead}>{children}</div>
);

export default Lead;
