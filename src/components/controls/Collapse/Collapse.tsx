import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import React, { useEffect, useState } from 'react';
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
  initiallyOpen?: boolean;
}

const Collapse = ({
  children,
  headerLabel,
  align = 'left',
  iconOpen = 'chevron-up',
  iconClosed = 'chevron-down',
  onToggle,
  initiallyOpen = false,
}: CollapseProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(initiallyOpen);
  }, [initiallyOpen]);

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
        <div id={controlId}>{children}</div>
      </ReactCollapse>
    </div>
  );
};

export default Collapse;
