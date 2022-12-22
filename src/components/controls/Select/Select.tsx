import classNames from "classnames";
import React from "react";

import { FormControl } from "../../../types/form-control.type";

import styles from "./Select.module.scss";

import Icon from "components/content/Icon/Icon";
import { defaultInputProps } from "lib/default-props";

interface SelectProps extends FormControl {
  children: React.ReactNode;
}

const Select = React.forwardRef(
  (
    { children, disabled, touched, valid, status, ...props }: SelectProps,
    ref: any
  ) => (
    <div
      className={classNames(styles.select, {
        [styles["select--disabled"]]: disabled,
        [styles["select--valid"]]: touched && valid === true,
        [styles["select--invalid"]]: touched && valid === false,
        [styles[`select--${status}`]]: status,
      })}
    >
      <select
        className={styles.select__select}
        disabled={disabled}
        {...props}
        ref={ref}
      >
        {children}
      </select>
      <div className={styles.select__affix}>
        <Icon icon="chevron-down" />
      </div>
    </div>
  )
);

Select.defaultProps = defaultInputProps;

Select.displayName = "Select";

export default Select;
