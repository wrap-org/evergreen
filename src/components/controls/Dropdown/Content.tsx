import React from 'react';

import styles from './Dropdown.module.scss';

// @TODO make this self aligning
export default function DropdownContent({
  children,
}: {
  readonly children?: React.ReactNode;
}) {
  return <div className={styles.dropdown__content}>{children}</div>;
}
