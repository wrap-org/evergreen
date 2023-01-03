import React from 'react';

import styles from './Fieldset.module.scss';

function Legend({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <legend className={styles.fieldset__legend} {...props}>
      {children}
    </legend>
  );
}

export default Legend;
