import classNames from 'classnames';
import React, { useState } from 'react';

import { FormControl } from '@/types/form-control.type';

import styles from './Slider.module.scss';
import Label from './SliderLabel';

export interface SliderProps extends FormControl {
  readonly children?: React.ReactNode;
  readonly onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    values: { lowerValue: number; upperValue: number },
  ) => void;
  readonly defaultValue?: number;
  readonly minValue?: number;
  readonly maxValue?: number;
}

export interface SliderComponent
  extends React.ForwardRefExoticComponent<
    SliderProps & React.RefAttributes<HTMLInputElement>
  > {
  Label: typeof Label;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      children,
      onChange,
      defaultValue,
      minValue = 0,
      maxValue = 100,
      disabled,
      ...props
    },
    ref,
  ) => {
    const defaultVal =
      defaultValue ??
      (maxValue < minValue ? minValue : minValue + (maxValue - minValue) / 2);
    const [value, setValue] = useState(defaultVal);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e?.target?.value);
      setValue(newValue);
      onChange?.(e, { lowerValue: newValue, upperValue: maxValue - newValue });
    };

    // augment slider label children with value and max props
    const childrenWithValues = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          value,
          maxValue,
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
            '--slider-max': maxValue,
            '--slider-min': minValue,
          } as React.CSSProperties
        }
      >
        <div className={styles.slider__input}>
          <div
            className={classNames(
              styles.slider__track,
              styles['slider__track--upper'],
            )}
          ></div>
          <div
            className={classNames(
              styles.slider__track,
              styles['slider__track--lower'],
            )}
          ></div>
          <input
            type="range"
            defaultValue={defaultVal}
            min={minValue}
            max={maxValue}
            disabled={disabled}
            onChange={handleInputChange}
            {...props}
            ref={ref}
          />
        </div>
        <div className={styles.slider__labels}>{childrenWithValues}</div>
      </div>
    );
  },
);

Slider.displayName = 'Slider';

export default Object.assign({}, Slider, { Label }) as SliderComponent;
