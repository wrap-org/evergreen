import React from 'react';

import styles from './Section.module.scss';

export default function Section({ children }: { children?: React.ReactNode }) {
  return <div className={styles.section}>{children}</div>;
}
