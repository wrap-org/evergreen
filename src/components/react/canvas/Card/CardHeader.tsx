import React from 'react';

import styles from './Card.module.scss';

export default function CardHeader({
  children,
}: {
  readonly children?: React.ReactNode;
}) {
  return <div className={styles.card__header}>{children}</div>;
}
