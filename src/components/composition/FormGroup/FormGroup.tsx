import classnames from 'classnames';
import React from 'react';

import styles from './FormGroup.module.scss';

const Label = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles['form-group__label']}>{children}</div>
);

const Control = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles['form-group__control']}>{children}</div>
);

const FormGroup = ({
  children,
  horizontal,
}: {
  children?: React.ReactNode;
  horizontal?: boolean;
}) => (
  <div
    className={classnames(styles['form-group'], {
      [styles['form-group--horizontal']]: horizontal,
    })}
  >
    {children}
  </div>
);

FormGroup.Label = Label;
FormGroup.Control = Control;

export default FormGroup;
