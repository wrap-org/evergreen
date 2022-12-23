import React from 'react';

import styles from './FormGroup.module.scss';

export default function FormGroup({ children }: { children: React.ReactNode }) {
  return <div className={styles['form-group']}>{children}</div>;
}
