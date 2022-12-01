import React from 'react';
import classNames from 'classnames';

import Icon from 'components/content/Icon/Icon';

import styles from './TextButton.module.scss';

interface TextButtonProps {
  children: React.ReactNode;
  icon?: string;
  iconRight?: boolean;
  size?: 'sm' | 'base';
  decorate?: boolean;
  [x:string]: any;
}

export default function TextButton({
  icon,
  iconRight,
  children,
  size = 'base',
  decorate,
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        styles['text-button'],
        styles[`text-button--size-${size}`],
        {
          [styles['text-button--decorate']]: decorate,
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

TextButton.defaultProps = {
  icon: undefined,
  iconRight: false,
};
