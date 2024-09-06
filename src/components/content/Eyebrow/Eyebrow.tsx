import React from 'react';

import styles from './Eyebrow.module.scss';

export default function Eyebrow({
  children,
}: {
  readonly children?: React.ReactNode;
}) {
  return <span className={styles.eyebrow}>{children}</span>;
}
