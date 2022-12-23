import React from 'react';

import styles from './Longform.module.scss';

const Longform = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.longform}>{children}</div>
);

export default Longform;
