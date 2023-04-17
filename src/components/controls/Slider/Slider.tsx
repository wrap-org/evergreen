import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './Slider.module.scss';

import { FormControl } from 'src/types/form-control.type';

interface SliderLabelProps {
  text?: string;
  showValue?: boolean;
  asPercentage?: boolean;
}

export interface SliderProps extends FormControl {
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  labelLower?: SliderLabelProps;
  labelUpper?: SliderLabelProps;
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

const Slider = React.forwardRef(
  (
    {
      onChange,
      defaultValue,
      min = 0,
      max = 100,
      disabled,
      labelLower,
      labelUpper,
      ...props
    }: SliderProps,
    ref: any
  ) => {
    const value = defaultValue ?? (max < min ? min : min + (max - min) / 2);
    const [lowerValue, setLowerValue] = useState(value);
    const [upperValue, setUpperValue] = useState(max - value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e?.target?.value);
      setLowerValue(newValue);
      setUpperValue(max - newValue);
      onChange?.(e);
    };

    return (
      <div
        className={classNames(styles.slider, {
          [styles['slider--disabled']]: disabled,
        })}
        style={
          {
            '--slider-value': lowerValue,
            '--slider-max': max,
            '--slider-min': min,
          } as React.CSSProperties
        }
      >
        <div className={styles.slider__input}>
          <input
            type="range"
            defaultValue={value}
            min={min}
            max={max}
            disabled={disabled}
            onChange={handleInputChange}
            {...props}
            ref={ref}
          />
        </div>
        {(labelLower || labelUpper) && (
          <div className={styles.slider__labels}>
            <SliderLabel
              label={labelLower}
              position="lower"
              value={lowerValue}
              max={max}
            />
            <SliderLabel
              label={labelUpper}
              position="upper"
              value={upperValue}
              max={max}
            />
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
