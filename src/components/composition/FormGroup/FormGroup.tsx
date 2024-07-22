import classnames from 'classnames';
import React from 'react';

import styles from './FormGroup.module.scss';

export interface FormGroupProps {
  children?: React.ReactNode;
  horizontal?: boolean;
}

const Info = ({
  open,
  controlId,
  children,
}: {
  open?: boolean;
  controlId?: string;
  children?: React.ReactNode;
}) => (
  <div
    id={controlId}
    className={classnames(styles['form-group__info'], {
      [styles['form-group__info--open']]: open,
    })}
    aria-hidden={!open}
  >
    <div
      className={classnames(styles['form-group__info-inner'], {
        [styles['form-group__info-inner--open']]: open,
      })}
    >
      {children}
    </div>
  </div>
);

const Label = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles['form-group__label']}>{children}</div>
);

const Control = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles['form-group__control']}>{children}</div>
);

const FormGroup = ({ children, horizontal }: FormGroupProps) => (
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
FormGroup.Info = Info;

export default FormGroup;
