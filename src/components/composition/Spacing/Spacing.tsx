import classNames from 'classnames';
import React from 'react';

import { Spacing as SpacingType } from '../../../types/spacing.type';

import styles from './Spacing.module.scss';

interface SpacingProps {
  children?: React.ReactNode;
  negative?: boolean;
  top?: SpacingType;
  left?: SpacingType;
  bottom?: SpacingType;
  right?: SpacingType;
}

export default function Spacing({
  children,
  negative = false,
  top,
  left,
  bottom,
  right,
}: Readonly<SpacingProps>) {
  const cx = classNames(styles.spacing, {
    [styles[`spacing--top-${top}`]]: top,
    [styles[`spacing--left-${left}`]]: left,
    [styles[`spacing--bottom-${bottom}`]]: bottom,
    [styles[`spacing--right-${right}`]]: right,
    [styles['spacing--negative']]: negative,
  });
  return <div className={cx}>{children}</div>;
}
