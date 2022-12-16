import React, { useState } from 'react';
import Icon from 'components/content/Icon/Icon';
import Grid from 'components/composition/Grid/Grid';
import { Collapse as ReactCollapse } from 'react-collapse';
import cx from 'classnames';

import styles from './Collapse.module.scss';

const Collapse = ({
  children,
  headerLabel,
  align,
}: {
  children: React.ReactNode;
  headerLabel: React.ReactNode;
  align?: 'right';
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const direction = align === 'right' ? 'row-reverse' : 'row';

  return (
    <div
      className={cx(styles.collapse, {
        [styles['collapse--right']]: align === 'right',
      })}
    >
      <button
        type="button"
        onClick={toggle}
        className={styles.collapse__button}
      >
        <Grid direction={direction} spacing="sm">
          <Grid.Item>
            <Icon icon={open ? 'chevron-up' : 'chevron-down'} size="lg" />
          </Grid.Item>
          <Grid.Item grow shrink>
            {headerLabel}
          </Grid.Item>
        </Grid>
      </button>
      <ReactCollapse isOpened={open}>
        <div>{children}</div>
      </ReactCollapse>
    </div>
  );
};

export default Collapse;
