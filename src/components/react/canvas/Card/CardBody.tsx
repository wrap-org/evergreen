import classNames from 'classnames';
import React from 'react';

import styles from './Card.module.scss';

interface CardBodyProps {
  children?: React.ReactNode;
  padded?: boolean;
  border?: boolean;
  hidden?: boolean;
  muted?: boolean;
}

export default function CardBody({
  children,
  padded = true,
  border = false,
  hidden = false,
  muted = false,
}: Readonly<CardBodyProps>) {
  return (
    <div
      className={classNames(styles.card__body, {
        [styles['card__body--padded']]: padded,
        [styles['card__body--border']]: border,
        [styles['card__body--hidden']]: hidden,
        [styles['card__body--muted']]: muted,
      })}
    >
      {children}
    </div>
  );
}
