import React from 'react';
import classNames from 'classnames';

import Icon from 'components/content/Icon/Icon';

import styles from './Alert.module.scss';

export default function Alert({
  type,
  children,
  onClose,
}: {
  type?: 'positive' | 'negative' | 'neutral' | 'attention';
  children: React.ReactNode
  onClose?: () => void;
}) {
  return (
    <div
      className={classNames(styles.alert, {
        [styles[`alert--${type}`]]: type,
      })}
      role="alert"
    >
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
