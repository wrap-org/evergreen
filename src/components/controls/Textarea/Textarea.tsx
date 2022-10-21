import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import classNames from 'classnames';

import { BaseInputProps } from 'lib/types';
import { defaultInputProps } from 'lib/default-props';

import styles from './Textarea.module.scss';

const Textarea = React.forwardRef((
  {
    disabled,
    touched,
    valid,
    status,
    ...props
  }: BaseInputProps,
  ref: any,
) => (
  <div
    className={classNames(styles.textarea, {
      [styles['input--disabled']]: disabled,
      [styles['input--valid']]: touched && valid === true,
      [styles['input--invalid']]: touched && valid === false,
      [styles[`input--${status}`]]: status,
    })}
  >
    <TextareaAutosize
      ref={ref}
      className={styles.textarea__input}
      disabled={disabled}
      {...props}
    />
  </div>
));

Textarea.defaultProps = {
  ...defaultInputProps,
};

Textarea.displayName = 'Textarea';

export default Textarea;
