import classNames from 'classnames';
import React from 'react';

import { FontWeight } from '../../../../types/tokens.type';

import styles from './TextButton.module.scss';

interface TextButtonProps {
  readonly children?: React.ReactNode;
  readonly icon?: string;
  readonly iconRight?: boolean;
  readonly size?: 'sm';
  readonly decorate?: boolean;
  readonly weight?: FontWeight;
  [key: string]: unknown;
}

export default function TextButton({
  icon,
  iconRight,
  children,
  size,
  decorate,
  weight,
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles['text-button'], {
        [styles['text-button--size-sm']]: size === 'sm',
        [styles['text-button--decorate']]: decorate,
        [styles[`text-button--weight-${weight}`]]: weight,
      })}
      {...props}
    >
      {!!(icon && !iconRight) && (
        <span
          className={classNames(
            styles['text-button__icon'],
            styles['text-button__icon--left'],
          )}
        >
          <evg-icon icon={icon} />
        </span>
      )}
      {children}
      {!!(icon && iconRight) && (
        <span
          className={classNames(
            styles['text-button__icon'],
            styles['text-button__icon--right'],
          )}
        >
          <evg-icon icon={icon} />
        </span>
      )}
    </button>
  );
}
