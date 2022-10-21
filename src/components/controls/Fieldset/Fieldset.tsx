import React from 'react';

import Legend from './Legend';

import styles from './Fieldset.module.scss';

function Fieldset({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <fieldset
      className={styles.fieldset}
      {...props}
    >
      {children}
    </fieldset>
  );
}

Fieldset.Legend = Legend;

export default Fieldset;
