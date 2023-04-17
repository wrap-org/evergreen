import classNames from 'classnames';
import React from 'react';

import styles from './Slider.module.scss';

export interface SliderLabelProps {
  text?: string;
  showValue?: boolean;
  asPercentage?: boolean;
}
const formatPercentage = (value: number, max: number) => {
  return `${((value / max) * 100).toFixed(0)}%`;
};

const SliderLabel = ({
  label,
  position,
  value,
  max,
}: {
  label?: SliderLabelProps;
  position: 'upper' | 'lower';
  value: number;
  max: number;
}) => {
  if (!label) {
    return (
      <div
        className={classNames(
          styles.slider__label,
          styles[`slider__label--${position}`]
        )}
      ></div>
    );
  }
  const { text, showValue, asPercentage } = label;
  return (
    <div
      className={classNames(
        styles.slider__label,
        styles[`slider__label--${position}`]
      )}
    >
      <p>
        {text}
        {text && showValue && <br />}
        {showValue &&
          (asPercentage ? <>{formatPercentage(value, max)}</> : <>{value}</>)}
      </p>
    </div>
  );
};

export default SliderLabel;
