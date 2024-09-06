import React from 'react';

import styles from './Longform.module.scss';

const Longform = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles.longform}>{children}</div>
);

export default Longform;
