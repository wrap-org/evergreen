import React from 'react';

import styles from './Modal.module.scss';

/**
 * Used to apply padding to the inner part of the modal
 */
const ModalInner = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles.modal__inner}>{children}</div>
);

export default ModalInner;
