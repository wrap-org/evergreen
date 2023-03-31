/* eslint-disable react/prefer-stateless-function */
import classNames from 'classnames';
import React, { Component } from 'react';

import styles from './Card.module.scss';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

import Icon from 'components/content/Icon/Icon';

export interface CardProps {
  children?: React.ReactNode;
  border?: boolean;
  href?: string;
  onClick?: () => void;
  id?: string;
  arrow?: boolean;
  shadow?: boolean;
  control?: boolean;
  muted?: boolean;
  disabled?: boolean;
  [x: string]: unknown;
}

class Card extends Component<CardProps> {
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

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && onClick) {
        onClick();
      }
    };

    return (
      <CardElement
        className={classNames(styles.card, {
          [styles['card--border']]: border,
          [styles['card--clickable']]: href || onClick,
          [styles['card--shadow']]: shadow,
          [styles['card--disabled']]: disabled,
          [styles['card--control']]: control,
          [styles['card--muted']]: muted,
        })}
        href={href}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={handleKeyDown}
        role={onClick ? 'button' : undefined}
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
