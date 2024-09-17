import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import React, { useMemo, useState } from 'react';

import styles from './Collapse.module.scss';

import Grid from 'components/composition/Grid/Grid';
import Icon from 'components/content/Icon/Icon';

export interface CollapseProps {
  readonly children?: React.ReactNode;
  readonly headerLabel: React.ReactNode;
  readonly align?: 'left' | 'right';
  readonly iconOpen?: string;
  readonly iconClosed?: string;
  readonly onToggle?: (open?: boolean) => void;
  readonly defaultOpen?: boolean;
}

const Collapse = ({
  children,
  headerLabel,
  align = 'left',
  iconOpen = 'close',
  iconClosed = 'add',
  onToggle,
  defaultOpen = false,
}: CollapseProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => {
    setOpen(!open);
    onToggle?.(!open);
  };

  const controlId = useMemo(() => `collapse-control-${uniqueId()}`, []);
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
      <div
        id={controlId}
        className={cx(styles.collapse__collapsible, {
          [styles['collapse__collapsible--open']]: open,
        })}
        aria-hidden={!open}
      >
        <div className={styles.collapse__content}>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
