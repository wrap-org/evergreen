import React from 'react';
import classNames from 'classnames';

import { BaseInputProps } from 'lib/types';
import { defaultInputProps } from 'lib/default-props';

import Icon from 'components/content/Icon/Icon';

import styles from './Select.module.scss';

interface SelectProps extends BaseInputProps {
  children: React.ReactNode;
}

const Select = React.forwardRef((
  {
    children,
    disabled,
    touched,
    valid,
    status,
    ...props
  }: SelectProps,
  ref: any,
) => (
  <div
    className={classNames(styles.select, {
      [styles['select--disabled']]: disabled,
      [styles['select--valid']]: touched && valid === true,
      [styles['select--invalid']]: touched && valid === false,
      [styles[`select--${status}`]]: status,
    })}
  >
    <select className={styles.select__select} ref={ref} disabled={disabled} {...props}>
      {children}
    </select>
    <div className={styles.select__affix}>
      <Icon icon="chevron-down" />
    </div>
  </div>
));

Select.defaultProps = defaultInputProps;

Select.displayName = 'Select';

export default Select;
