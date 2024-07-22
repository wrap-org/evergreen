import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';
import { Collapse as ReactCollapse } from 'react-collapse';

import styles from './Collapse.module.scss';

import Grid from 'components/composition/Grid/Grid';
import Icon from 'components/content/Icon/Icon';

export interface CollapseProps {
  children?: React.ReactNode;
  headerLabel: React.ReactNode;
  align?: 'left' | 'right';
  iconOpen?: string;
  iconClosed?: string;
  onToggle?: (open?: boolean) => void;
  defaultOpen?: boolean;
}

const Collapse = ({
  children,
  headerLabel,
  align = 'left',
  iconOpen = 'chevron-up',
  iconClosed = 'chevron-down',
  onToggle,
  defaultOpen = false,
}: CollapseProps) => {
  const [open, setOpen] = useState(defaultOpen);

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
            <Icon icon={open ? iconOpen : iconClosed} size="lg" />
          </Grid.Item>
          <Grid.Item grow shrink>
            {headerLabel}
          </Grid.Item>
        </Grid>
      </button>
      <ReactCollapse isOpened={open}>
        <div id={controlId} className={styles.collapse__content}>
          {children}
        </div>
      </ReactCollapse>
    </div>
  );
};

export default Collapse;
