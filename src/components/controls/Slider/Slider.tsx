import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import styles from './Slider.module.scss';

import { FormControl } from 'src/types/form-control.type';

interface SliderLabel {
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
  labelLower?: SliderLabel;
  labelUpper?: SliderLabel;
}

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

    const handleInputChange = (values: [number, number]) => {
      const newValue = values[1];
      setLowerValue(newValue);
      setUpperValue(max - newValue);
      onChange?.(newValue);
    };

    const formatPercentage = (value: number) => {
      return `${((value / max) * 100).toFixed(0)}%`;
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
      <div className={styles.slider}>
        <RangeSlider
          className={styles['slider__range-slider']}
          id={id}
          value={value ? [0, value] : undefined}
          defaultValue={[0, defaultValue]}
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
        {(labelLower || labelUpper) && (
          <div className={styles.slider__labels}>
            <div
              className={classNames(
                styles.slider__label,
                styles['slider__label-lower']
              )}
            >
              {labelLower && (
                <p>
                  {labelLower?.text}
                  {labelLower?.text && labelLower?.showValue && <br />}
                  {labelLower?.showValue &&
                    (labelUpper?.asPercentage ? (
                      <>{formatPercentage(lowerValue)}</>
                    ) : (
                      <>{lowerValue}</>
                    ))}
                </p>
              )}
            </div>
            <div
              className={classNames(
                styles.slider__label,
                styles['slider__label-upper']
              )}
            >
              {labelUpper && (
                <p>
                  {labelUpper?.text}
                  {labelUpper?.text && labelUpper?.showValue && <br />}
                  {labelUpper?.showValue &&
                    (labelUpper?.asPercentage ? (
                      <>{formatPercentage(upperValue)}</>
                    ) : (
                      <>{upperValue}</>
                    ))}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
