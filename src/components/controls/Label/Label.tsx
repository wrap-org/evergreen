import classNames from 'classnames';
import React from 'react';

import styles from './Label.module.scss';

interface LabelProps {
  children?: React.ReactNode;
  htmlFor?: string;
  hidden?: boolean;
  as?: 'label' | 'legend' | 'span';
  type?: 'secondary';
  [index: string]: any;
}

function Label({
  children,
  htmlFor,
  hidden = false,
  as,
  type,
  ...props
}: Readonly<LabelProps>) {
  const CustomTag = as ?? ('label' as keyof JSX.IntrinsicElements);
  const classes = classNames(styles.label, {
    [styles['label--hidden']]: hidden,
    [styles[`label--type-${type}`]]: type,
  });

  return (
    <CustomTag className={classes} htmlFor={htmlFor} {...props}>
      {children}
    </CustomTag>
  );
}

export default Label;
