import React from 'react';

import styles from './Lead.module.scss';

const Lead = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles.lead}>{children}</div>
);

export default Lead;
