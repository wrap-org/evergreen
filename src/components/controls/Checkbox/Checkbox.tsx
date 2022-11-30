import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { defaultInputProps } from 'lib/default-props';
import useCombinedRefs from 'lib/hooks/combined-refs';

import Icon from 'components/content/Icon/Icon';
import { FormControl } from '../../../types/form-control.type';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends FormControl {
  defaultChecked?: boolean;
  forceChecked?: boolean;
  type?: 'default' | 'list' | 'input';
  children: React.ReactNode;
}

const Checkbox = React.forwardRef((
  {
    defaultChecked = false,
    forceChecked,
    type,
    children,
    disabled,
    touched,
    valid,
    status,
    onChange,
    ...props
  }: CheckboxProps,
  forwardedRef: any,
) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);
  const innerRef = useRef(null);
  const combinedRef = useCombinedRefs(forwardedRef, innerRef);

  useEffect(() => {
    if (typeof forceChecked === 'boolean' && forceChecked !== checked) {
      setChecked(forceChecked);
    }
  }, [checked, forceChecked]);

  return (
    <label
      className={classNames(styles.checkbox, {
        [styles['checkbox--checked']]: checked,
        [styles['checkbox--disabled']]: disabled,
        [styles['checkbox--valid']]: touched && valid === true,
        [styles['checkbox--invalid']]: touched && valid === false,
        [styles[`checkbox--type-${type}`]]: type,
        [styles[`checkbox--${status}`]]: status,
      })}
    >
      <input
        type="checkbox"
        className={styles.checkbox__input}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          if (onChange) {
            onChange(event);
          }
        }}
        {...props}
        ref={combinedRef}
      />
      <span className={styles.checkbox__indicator}>
        <span className={styles.checkbox__check}>
          <Icon icon="check" />
        </span>
      </span>
      <span className={styles.checkbox__content}>
        {children}
      </span>
    </label>
  );
});

Checkbox.defaultProps = {
  ...defaultInputProps,
  type: 'input',
  defaultChecked: false,
  forceChecked: undefined,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
