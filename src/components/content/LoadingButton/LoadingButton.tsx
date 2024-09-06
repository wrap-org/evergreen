import cx from 'classnames';
import React from 'react';

import styles from './LoadingButton.module.scss';

export default function LoadingButton({
  size,
  block,
}: {
  readonly size?: string;
  readonly block?: boolean | 'mobile';
}) {
  return (
    <button
      type="button"
      className={cx(styles['loading-button'], {
        [styles[`loading-button--${size}`]]: !!size,
        [styles[`loading-button--block`]]: block,
        [styles[`loading-button--block-mobile`]]: block === 'mobile',
      })}
      aria-hidden="true"
      disabled
    >
      <span className={styles['loading-button__text']}>Button text</span>
    </button>
  );
}
