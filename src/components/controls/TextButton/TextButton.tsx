import React from 'react';
import classNames from 'classnames';

import Icon from 'components/content/Icon/Icon';

import styles from './TextButton.module.scss';

interface TextButtonProps {
  children: React.ReactNode;
  icon?: string;
  iconRight?: boolean;
  size?: 'sm';
  decorate?: boolean;
  [x:string]: any;
}

export default function TextButton({
  icon,
  iconRight,
  children,
  size,
  decorate,
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        styles['text-button'],
        {
          [styles['text-button--decorate']]: decorate,
          [styles['text-button--size-sm']]: size === 'sm',
        },
      )}
      {...props}
    >
      {!!(icon && !iconRight) && (
        <span className={classNames(styles['text-button__icon'], styles['text-button__icon--left'])}>
          <Icon icon={icon} />
        </span>
      )}
      {children}
      {!!(icon && iconRight) && (
        <span className={classNames(styles['text-button__icon'], styles['text-button__icon--right'])}>
          <Icon icon={icon} />
        </span>
      )}
    </button>
  );
}
