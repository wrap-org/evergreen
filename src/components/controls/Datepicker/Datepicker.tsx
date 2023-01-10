import React, {
  ChangeEventHandler,
  useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { format, parse, isValid } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import FocusTrap from 'focus-trap-react';
import { usePopper } from 'react-popper';

import Icon from 'components/content/Icon/Icon';
import { FormControl } from '../../../types/form-control.type';

import 'react-day-picker/dist/style.css';
import styles from './Datepicker.module.scss';

interface DatepickerProps extends FormControl {
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
}

const Datepicker = React.forwardRef((
  {
    disabled,
    touched,
    valid,
    status,
    value,
    onChange,
    ...props
  }: DatepickerProps,
  ref: any,
) => {
  const [selected, setSelected] = useState<Date>();
  const [isPopperOpen, setIsPopperOpen] = useState<boolean>(false);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  });

  useEffect(() => {
    const date = parse(value ?? '', 'dd-MM-y', new Date());

    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  }, [value]);

  const closePopper = useCallback(() => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  }, [setIsPopperOpen, buttonRef]);

  const handleButtonClick = useCallback(() => {
    setIsPopperOpen(true);
  }, [setIsPopperOpen]);

  const handleDaySelect = (date?: Date) => {
    setSelected(date);
    if (date) {
      onChange?.(format(date, 'dd-MM-y'));
      closePopper();
    } else {
      onChange?.('');
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <>
      <div
        ref={popperRef}
        className={classNames(styles['date-picker'], {
          [styles['date-picker--disabled']]: disabled,
          [styles['date-picker--valid']]: touched && valid === true,
          [styles['date-picker--invalid']]: touched && valid === false,
          [styles[`date-picker--${status}`]]: status,
        })}
      >
        <button
          ref={buttonRef}
          type="button"
          aria-label="Pick a date"
          className={styles['date-picker__icon']}
          onClick={handleButtonClick}
        >
          <Icon icon="calendar" />
        </button>
        <input
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={value}
          onChange={handleInputChange}
          className={styles['date-picker__input']}
          ref={ref}
          disabled={disabled}
          {...props}
        />
      </div>
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper,
            fallbackFocus: buttonRef.current ?? undefined,
          }}
        >
          <div
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
          >
            <DayPicker
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
            />
          </div>
        </FocusTrap>
      )}
    </>
  );
});

Datepicker.displayName = 'Datepicker';

export default Datepicker;
