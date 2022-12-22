import classNames from "classnames";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { FormControl } from "../../../types/form-control.type";

import styles from "./Textarea.module.scss";

import { defaultInputProps } from "lib/default-props";

const Textarea = React.forwardRef(
  ({ disabled, touched, valid, status, ...props }: FormControl, ref: any) => (
    <div
      className={classNames(styles.textarea, {
        [styles["input--disabled"]]: disabled,
        [styles["input--valid"]]: touched && valid === true,
        [styles["input--invalid"]]: touched && valid === false,
        [styles[`input--${status}`]]: status,
      })}
    >
      <TextareaAutosize
        className={styles.textarea__input}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    </div>
  )
);

Textarea.defaultProps = {
  ...defaultInputProps,
};

Textarea.displayName = "Textarea";

export default Textarea;
