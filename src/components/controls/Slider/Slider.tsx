import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './Slider.module.scss';

import { FormControl } from 'src/types/form-control.type';

interface SliderLabelProps {
  text?: string;
  showValue?: boolean;
  asPercentage?: boolean;
}

export interface SliderProps extends FormControl {
  id: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
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
          styles[`slider__label-${position}`]
        )}
      ></div>
    );
  }
  const { text, showValue, asPercentage } = label;
  return (
    <div
      className={classNames(
        styles.slider__label,
        styles[`slider__label-${position}`]
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
      id,
      value,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      defaultValue = 50,
      disabled,
      labelLower,
      labelUpper,
      ...props
    }: SliderProps,
    ref: any
  ) => {
    const [lowerValue, setLowerValue] = useState(value ?? defaultValue);
    const [upperValue, setUpperValue] = useState(max - (value ?? defaultValue));

    const handleInputChange = (e: InputEvent) => {
      const newValue = Number(e?.target?.value);
      setLowerValue(newValue);
      setUpperValue(max - newValue);
      onChange?.(newValue);
    };

    useEffect(() => {
      const inputs = document.querySelectorAll(`#${id} input[type="range"]`);
      if (inputs.length === 2) {
        inputs[0].remove();
        inputs[1].setAttribute('role', 'none');
      }

      const lowerSlider = document.querySelector(
        `#${id} div[data-lower="true"]`
      );
      if (lowerSlider) {
        lowerSlider.role = 'none';
        lowerSlider.removeAttribute('aria-valuemin');
        lowerSlider.removeAttribute('aria-valuemax');
        lowerSlider.removeAttribute('aria-valuenow');
        lowerSlider.removeAttribute('aria-valuetext');
      }

      const upperSlider = document.querySelector(
        `#${id} div[data-upper="true"]`
      );
      if (upperSlider) {
        upperSlider.setAttribute('id', `${id}_thumb`);
        const label = document.querySelector(`[for="${id}"]`);
        upperSlider.setAttribute('aria-label', label?.textContent ?? '');
      }
    }, [id]);

    return (
      <div
        className={styles.slider}
        style={{ '--slider-value': lowerValue } as React.CSSProperties}
      >
        <div className={styles.slider__input}>
          <input
            type="range"
            id={id}
            value={value}
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            onInput={handleInputChange}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
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
