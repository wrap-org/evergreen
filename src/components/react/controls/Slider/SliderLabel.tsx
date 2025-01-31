import classNames from 'classnames';
import React from 'react';

import styles from './Slider.module.scss';

export interface SliderLabelProps {
  readonly children?: React.ReactNode;
  readonly position: 'upper' | 'lower';
  readonly value?: number;
  readonly maxValue?: number;
  readonly showValue?: boolean;
  readonly asPercentage?: boolean;
}
const formatPercentage = (value: number, maxValue: number) => {
  return `${((value / maxValue) * 100).toFixed(0)}%`;
};

const SliderLabel = ({
  children,
  position,
  value,
  maxValue,
  showValue = false,
  asPercentage = false,
}: SliderLabelProps) => {
  if (value === undefined || value === null) {
    return null;
  }

  const displayValue =
    position === 'upper' && maxValue ? maxValue - value : value;

  return (
    <div
      className={classNames(styles.slider__label, {
        [styles[`slider__label--${position}`]]: position,
      })}
    >
      {children && <div>{children}</div>}
      {showValue &&
        (asPercentage && maxValue ? (
          <div>{formatPercentage(displayValue, maxValue)}</div>
        ) : (
          <div>{displayValue}</div>
        ))}
    </div>
  );
};

export default SliderLabel;
