import classNames from 'classnames';
import React from 'react';

import { FormControl } from '../../../../types/form-control.type';

import styles from './Input.module.scss';

interface InputProps extends FormControl {
  readonly prefix?: React.ReactNode | string;
  readonly suffix?: React.ReactNode | string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ prefix, suffix, disabled, touched, valid, status, ...props }, ref) => (
    <div
      className={classNames(styles.input, {
        [styles['input--disabled']]: disabled,
        [styles['input--valid']]: touched && valid === true,
        [styles['input--invalid']]: touched && valid === false,
        [styles[`input--${status}`]]: status,
      })}
    >
      {prefix && <div className={styles.input__prefix}>{prefix}</div>}
      <input
        className={styles.input__input}
        disabled={disabled}
        {...props}
        ref={ref}
      />
      {suffix && <div className={styles.input__suffix}>{suffix}</div>}
    </div>
  ),
);

Input.displayName = 'Input';

export default Input as React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>;
