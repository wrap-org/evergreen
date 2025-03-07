import cx from 'classnames';
import React from 'react';

import styles from './Alert.module.scss';

export default function Alert({
  children,
  onClose,
  className,
}: {
  readonly children?: React.ReactNode;
  readonly onClose?: () => void;
  readonly className?: string;
}) {
  return (
    <div className={cx([styles.alert, className])} role="alert">
      {!!onClose && (
        <button type="button" className={styles.alert__close} onClick={onClose}>
          <evg-icon icon="close" label="Dismiss this message"></evg-icon>
        </button>
      )}
      {children}
    </div>
  );
}
