import classNames from 'classnames';
import React from 'react';

import { FormControl } from '../../../types/form-control.type';

import styles from './Radio.module.scss';

interface RadioProps extends FormControl {
  checked?: boolean;
  children?: React.ReactNode;
  /**
   * onRadioChange is added as a custom change handler because the standard
   * react-hook-form {...register(name, { onChange })} handler will trigger
   * the onChange event for the last radio in the DOM with the registered name
   * instead of the onChange for this radio!
   */
  onRadioChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      disabled,
      checked,
      children,
      touched,
      valid,
      status,
      onRadioChange,
      onChange,
      ...props
    },
    forwardedRef
  ) => (
    <label
      className={classNames(styles.radio, {
        [styles['radio--checked']]: checked,
        [styles['radio--disabled']]: disabled,
        [styles['radio--valid']]: touched && valid === true,
        [styles['radio--invalid']]: touched && valid === false,
        [styles[`radio--${status}`]]: status,
      })}
    >
      <input
        type="radio"
        className={styles.radio__input}
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          onRadioChange?.(event);
          onChange?.(event);
        }}
        {...props}
        ref={forwardedRef}
      />
      <span className={styles.radio__indicator}>
        <span className={styles.radio__dot} />
      </span>
      <span className={styles.radio__content}>{children}</span>
    </label>
  )
);

Radio.displayName = 'Radio';

export default Radio as React.ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<HTMLInputElement>
>;
