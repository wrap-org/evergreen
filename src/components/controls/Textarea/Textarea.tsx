import classNames from 'classnames';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { FormControl } from '../../../types/form-control.type';

import styles from './Textarea.module.scss';

const Textarea = React.forwardRef<HTMLTextAreaElement, FormControl>(
  ({ disabled, touched, valid, status, ...props }, ref) => (
    <div
      className={classNames(styles.textarea, {
        [styles['input--disabled']]: disabled,
        [styles['input--valid']]: touched && valid === true,
        [styles['input--invalid']]: touched && valid === false,
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

Textarea.displayName = 'Textarea';

export default Textarea as React.ForwardRefExoticComponent<
  FormControl & React.RefAttributes<HTMLTextAreaElement>
>;
