/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';

import Icon from 'components/content/Icon/Icon';

import CardHeader from './Header';
import CardBody from './Body';

import styles from './Card.module.scss';

export interface CardProps {
  children: React.ReactNode;
  border?: boolean;
  href?: string;
  onClick?: any;
  id?: string;
  [x:string]: any;
  arrow?: boolean;
  shadow?: boolean;
  control?: boolean;
  muted?: boolean;
  disabled?: boolean;
}
class Card extends React.Component<CardProps> {
  static Header: typeof CardHeader;

  static Body: typeof CardBody;

  render() {
    const {
      children,
      border,
      href,
      onClick,
      arrow,
      id,
      shadow,
      disabled,
      control,
      muted,
    } = this.props;

    const CardElement = href ? 'a' : 'div';
    return (
      <CardElement
        className={classNames(styles.card, {
          [styles['card--border']]: border,
          [styles['card--clickable']]: href,
          [styles['card--shadow']]: shadow,
          [styles['card--disabled']]: disabled,
          [styles['card--control']]: control,
          [styles['card--muted']]: muted,
        })}
        href={href}
        onClick={onClick}
        id={id}
      >
        {arrow && (
          <div className={styles.card__arrow}>
            <Icon icon="arrow-right" />
          </div>
        )}
        {children}
      </CardElement>
    );
  }
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
