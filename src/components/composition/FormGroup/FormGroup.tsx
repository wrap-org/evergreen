import classnames from 'classnames';
import React from 'react';

import styles from './FormGroup.module.scss';

export interface FormGroupProps {
  readonly children?: React.ReactNode;
  readonly horizontal?: boolean;
  readonly className?: string;
  readonly as?: 'div' | 'fieldset';
}

const Info = ({
  open,
  controlId,
  children,
}: {
  readonly open?: boolean;
  readonly controlId?: string;
  readonly children?: React.ReactNode;
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

const Label = ({
  children,
  as,
}: {
  readonly children?: React.ReactNode;
  readonly as?: 'div' | 'legend';
}) => {
  const Component = as ?? 'div';
  return (
    <Component className={styles['form-group__label']}>{children}</Component>
  );
};

const Control = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles['form-group__control']}>{children}</div>
);

const FormGroup = ({ children, horizontal, className, as }: FormGroupProps) => (
  <div
    className={classnames(styles['form-group'], {
      [styles['form-group--horizontal']]: horizontal,
      [`${className}`]: className,
    })}
  >
    {as === 'fieldset' ? (
      <fieldset className={styles['form-group__fieldset']}>{children}</fieldset>
    ) : (
      children
    )}
  </div>
);

FormGroup.Label = Label;
FormGroup.Control = Control;
FormGroup.Info = Info;

export default FormGroup;
