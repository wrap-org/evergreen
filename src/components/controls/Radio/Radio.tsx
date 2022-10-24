import React from 'react';
import classNames from 'classnames';

import { BaseInputProps } from 'lib/types';
import { defaultInputProps } from 'lib/default-props';

import { ChangeHandler } from 'react-hook-form';
import styles from './Radio.module.scss';

interface RadioProps extends BaseInputProps {
  checked?: boolean;
  children: React.ReactNode;
  /**
   * onRadioChange is added as a custom change handler because the standard
   * react-hook-form {...register(name, { onChange })} handler will trigger
   * the onChange event for the last radio in the DOM with the registered name
   * instead of the onChange for this radio!
   */
  onRadioChange: ChangeHandler;
}

const Radio = React.forwardRef((
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
  forwardedRef: any,
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
    <span className={styles.radio__content}>
      {children}
    </span>
  </label>
));

Radio.defaultProps = {
  ...defaultInputProps,
  checked: false,
};

Radio.displayName = 'Radio';

export default Radio;
