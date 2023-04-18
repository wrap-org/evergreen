import classNames from 'classnames';
import React from 'react';

import { Weights } from '../../../types/font.type';

import styles from './TextButton.module.scss';

import Icon from 'components/content/Icon/Icon';

interface TextButtonProps {
  children?: React.ReactNode;
  icon?: string;
  iconRight?: boolean;
  size?: 'sm';
  decorate?: boolean;
  weight?: Weights;
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
            styles['text-button__icon--left']
          )}
        >
          <Icon icon={icon} />
        </span>
      )}
      {children}
      {!!(icon && iconRight) && (
        <span
          className={classNames(
            styles['text-button__icon'],
            styles['text-button__icon--right']
          )}
        >
          <Icon icon={icon} />
        </span>
      )}
    </button>
  );
}
