import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';

import Content from './Content';
import styles from './Dropdown.module.scss';

export interface DropdownProps {
  readonly open?: boolean;
  readonly onClickAway?: () => void;
  readonly children?: React.ReactNode;
}

const Dropdown = ({ open, onClickAway, children }: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway?.();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickAway]);

  return (
    <div
      ref={ref}
      className={classNames(styles.dropdown, {
        [styles['dropdown--open']]: open,
      })}
    >
      {children}
    </div>
  );
};

Dropdown.Content = Content;

export default Dropdown;
