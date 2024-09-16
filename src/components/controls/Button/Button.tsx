import classNames from 'classnames';
import React, { ComponentType, ReactNode, forwardRef } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  readonly children?: ReactNode;
  /**
   * The component to render the button as.
   * Useful for routing in frameworks like NextJS: `<Button as={Link} href="/">`
   */
  readonly as?: ComponentType<any>;
  readonly submit?: boolean;
  readonly loading?: boolean;
  readonly href?: string;
  readonly type?: 'primary' | 'secondary' | 'positive' | 'negative' | 'inverse';
  readonly icon?: boolean;
  readonly block?: boolean | 'mobile';
  readonly size?: string;
  [x: string]: unknown;
}

const Button = forwardRef<any, ButtonProps>(
  (
    { children, as, loading, submit, type, href, icon, block, size, ...props },
    ref,
  ) => {
    const CustomTag = as ?? (href ? 'a' : 'button');

    const baseProps = {
      className: classNames(styles.button, {
        [styles[`button--${type}`]]: !!type,
        [styles['button--loading']]: loading,
        [styles['button--block']]: block === true,
        [styles['button--block-mobile']]: block === 'mobile',
        [styles['button--icon']]: icon,
        [styles[`button--${size}`]]: !!size,
      }),
      disabled: loading ?? undefined,
      ref,
      ...props,
    };

    return (
      <CustomTag {...baseProps} href={href} type={submit ? 'submit' : 'button'}>
        {children}
      </CustomTag>
    );
  },
);

Button.displayName = 'Button';

export default Button as React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLInputElement>
>;
