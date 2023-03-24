import React from 'react';

import styles from './Alert.module.scss';

import Icon from 'components/content/Icon/Icon';

export default function Alert({
  children,
  onClose,
}: {
  skin?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}) {
  return (
    <div className={styles.alert} role="alert">
      {!!onClose && (
        <button type="button" className={styles.alert__close} onClick={onClose}>
          <Icon icon="close" title="Dismiss this message" />
        </button>
      )}
      {children}
    </div>
  );
}

Alert.defaultProps = {
  type: 'neutral',
  onClose: undefined,
};
