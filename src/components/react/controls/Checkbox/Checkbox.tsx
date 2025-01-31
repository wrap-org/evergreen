import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { FormControl } from '../../../../types/form-control.type';

import styles from './Checkbox.module.scss';

import Icon from 'components/react/content/Icon/Icon';
import useCombinedRefs from 'lib/hooks/combined-refs';

interface CheckboxProps extends FormControl {
  readonly defaultChecked?: boolean;
  readonly forceChecked?: boolean;
  readonly type?: 'default' | 'list' | 'input';
  readonly children?: React.ReactNode;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      defaultChecked = false,
      forceChecked,
      type = 'input',
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
        <span className={styles.checkbox__content}>{children}</span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
