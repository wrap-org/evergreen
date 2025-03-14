import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import React, { useMemo, useState } from 'react';

import styles from './Collapse.module.scss';

export interface CollapseProps {
  readonly children?: React.ReactNode;
  readonly headerLabel: React.ReactNode;
  readonly align?: 'left' | 'right';
  readonly iconOpen?: string;
  readonly iconClosed?: string;
  readonly textDecoration?: 'hover' | 'none';
  readonly onToggle?: (open?: boolean) => void;
  readonly defaultOpen?: boolean;
  readonly padded?: boolean;
}

const Collapse = ({
  children,
  headerLabel,
  align = 'left',
  iconOpen = 'close',
  iconClosed = 'add',
  textDecoration = 'hover',
  onToggle,
  defaultOpen = false,
  padded = true,
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
        [styles['collapse--padded']]: padded,
        [styles['collapse--text-decoration-none']]: textDecoration === 'none',
      })}
    >
      <button
        type="button"
        onClick={toggle}
        className={styles.collapse__button}
        aria-controls={controlId}
        aria-expanded={open}
      >
        <evg-grid direction={direction} gap="sm">
          <evg-grid-item>
            <evg-icon
              icon={open ? iconOpen : iconClosed}
              class="evg-text-size-body-lg"
            />
          </evg-grid-item>
          <evg-grid-item grow shrink>
            {headerLabel}
          </evg-grid-item>
        </evg-grid>
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
