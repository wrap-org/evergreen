import classNames from 'classnames';
import React from 'react';

import styles from './Alert.module.scss';

import Icon from 'components/content/Icon/Icon';

export default function Alert({
  type,
  children,
  onClose,
}: {
  type?: 'positive' | 'negative' | 'neutral' | 'attention';
  children?: React.ReactNode;
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
