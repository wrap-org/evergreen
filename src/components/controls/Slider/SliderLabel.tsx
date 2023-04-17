import classNames from 'classnames';
import React from 'react';

import styles from './Slider.module.scss';

export interface SliderLabelProps {
  children?: React.ReactNode;
  position: 'upper' | 'lower';
  value?: number;
  max?: number;
  showValue?: boolean;
  asPercentage?: boolean;
}
const formatPercentage = (value: number, max: number) => {
  return `${((value / max) * 100).toFixed(0)}%`;
};

const SliderLabel = ({
  children,
  position,
  value,
  max,
  showValue = false,
  asPercentage = false,
}: SliderLabelProps) => {
  if (!value) {
    return null;
  }

  const displayValue = position === 'upper' && max ? max - value : value;

  return (
    <div
      className={classNames(styles.slider__label, {
        [styles[`slider__label--${position}`]]: position,
      })}
    >
      {children && <div>{children}</div>}
      {showValue &&
        (asPercentage && max ? (
          <div>{formatPercentage(displayValue, max)}</div>
        ) : (
          <div>{displayValue}</div>
        ))}
    </div>
  );
};

export default SliderLabel;
