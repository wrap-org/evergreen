import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './Slider.module.scss';
import Label, { SliderLabelProps } from './SliderLabel';

import { FormControl } from 'src/types/form-control.type';

export interface SliderProps extends FormControl {
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  labelLower?: SliderLabelProps;
  labelUpper?: SliderLabelProps;
}

const Slider = React.forwardRef(
  (
    {
      children,
      onChange,
      defaultValue,
      min = 0,
      max = 100,
      disabled,
      ...props
    }: SliderProps,
    ref: any
  ) => {
    const value = defaultValue ?? (max < min ? min : min + (max - min) / 2);
    const [lowerValue, setLowerValue] = useState(value);
    // const [upperValue, setUpperValue] = useState(max - value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e?.target?.value);
      setLowerValue(newValue);
      // setUpperValue(max - newValue);
      onChange?.(e);
    };

    // augment slider label children with value and max props
    const childrenWithValues = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          value: lowerValue,
          max,
        });
      }
      return child;
    });

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
        <div className={styles.slider__labels}>{childrenWithValues}</div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Object.assign({}, Slider, { Label });
