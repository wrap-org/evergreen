import React, { useState } from 'react';
import { Collapse as ReactCollapse } from 'react-collapse';
import uniqueId from 'lodash/uniqueId';
import cx from 'classnames';

import Icon from 'components/content/Icon/Icon';
import Grid from 'components/composition/Grid/Grid';

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

  const controlId = `${uniqueId()}`;
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
        aria-controls={controlId}
        aria-expanded={open}
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
        <div id={controlId}>{children}</div>
      </ReactCollapse>
    </div>
  );
};

export default Collapse;
