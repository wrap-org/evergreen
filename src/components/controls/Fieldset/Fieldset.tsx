import React from 'react';

import styles from './Fieldset.module.scss';
import Legend from './Legend';

function Fieldset({
  children,
  ...props
}: {
  children?: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <fieldset className={styles.fieldset} {...props}>
      {children}
    </fieldset>
  );
}

Fieldset.Legend = Legend;

export default Fieldset;
