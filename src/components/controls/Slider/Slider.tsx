import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './Slider.module.scss';
import Label from './SliderLabel';

import { FormControl } from 'src/types/form-control.type';

export interface SliderProps extends FormControl {
  children?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    values: { lowerValue: number; upperValue: number }
  ) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
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
    const defaultVal =
      defaultValue ?? (max < min ? min : min + (max - min) / 2);
    const [value, setValue] = useState(defaultVal);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e?.target?.value);
      setValue(newValue);
      onChange?.(e, { lowerValue: newValue, upperValue: max - newValue });
    };

    // augment slider label children with value and max props
    const childrenWithValues = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          value,
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
            '--slider-value': value,
            '--slider-max': max,
            '--slider-min': min,
          } as React.CSSProperties
        }
      >
        <div className={styles.slider__input}>
          <input
            type="range"
            defaultValue={defaultVal}
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

const sliderComponent = Object.assign({}, Slider, { Label });
sliderComponent.displayName = 'Slider';

export default sliderComponent;
