import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';
import { Collapse as ReactCollapse } from 'react-collapse';

import styles from './Collapse.module.scss';

import Grid from 'components/composition/Grid/Grid';
import Icon from 'components/content/Icon/Icon';

interface CollapseProps {
  children?: React.ReactNode;
  headerLabel: React.ReactNode;
  align?: 'right';
  onToggle?: (open?: boolean) => void;
}

const Collapse = ({
  children,
  headerLabel,
  align,
  onToggle,
}: CollapseProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    onToggle?.(!open);
  };

  const controlId = `collapse-control-${uniqueId()}`;
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
