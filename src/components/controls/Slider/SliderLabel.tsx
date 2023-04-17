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
  return (
    <div
      className={classNames(
        styles.slider__label,
        styles[`slider__label--${position}`]
      )}
    >
      <p>
        {children}
        {children && showValue && <br />}
        {showValue &&
          (asPercentage && value && max ? (
            <>{formatPercentage(value, max)}</>
          ) : (
            <>{value}</>
          ))}
      </p>
    </div>
  );
};

export default SliderLabel;
