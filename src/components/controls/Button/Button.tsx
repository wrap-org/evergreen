import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  submit?: boolean;
  loading?: boolean;
  href?: string;
  type?: 'primary' | 'secondary' | 'positive' | 'negative';
  icon?: boolean;
  block?: boolean | 'mobile';
  size?: string;
  [x: string]: unknown;
}

const Button = React.forwardRef<any, ButtonProps>(
  (
    { children, loading, submit, type, href, icon, block, size, ...props },
    ref
  ) => {
    const baseProps = {
      className: classNames(styles.button, {
        [styles[`button--${type}`]]: !!type,
        [styles['button--loading']]: loading,
        [styles['button--block']]: block === true,
        [styles['button--block-mobile']]: block === 'mobile',
        [styles['button--icon']]: icon,
        [styles[`button--${size}`]]: !!size,
      }),
      disabled: loading || undefined,
      ref,
      ...props,
    };

    if (href) {
      return (
        <a {...baseProps} href={href}>
          {children}
        </a>
      );
    }

    return (
      <button {...baseProps} type={submit ? 'submit' : 'button'}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button as React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLInputElement>
>;
