import classNames from 'classnames';
import React from 'react';

import { FormControl } from '../../../types/form-control.type';

import styles from './Radio.module.scss';

import { defaultInputProps } from 'lib/default-props';

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
}

const Radio = React.forwardRef(
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
    }: RadioProps,
    forwardedRef: any
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
          if (onRadioChange) {
            onRadioChange(event);
          }
          if (onChange) {
            onChange(event);
          }
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

Radio.defaultProps = {
  ...defaultInputProps,
  checked: false,
};

Radio.displayName = 'Radio';

export default Radio;
