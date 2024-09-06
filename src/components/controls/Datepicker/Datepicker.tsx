import classNames from 'classnames';
import { format, parse, isValid } from 'date-fns';
import FocusTrap from 'focus-trap-react';
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DayPicker } from 'react-day-picker';
import dayPickerStyles from 'react-day-picker/dist/style.module.css';
import { usePopper } from 'react-popper';

import { FormControl } from '../../../types/form-control.type';

import styles from './Datepicker.module.scss';

import Icon from 'components/content/Icon/Icon';

export enum Format {
  DAY = 'dd/MM',
  DATE = 'dd/MM/yyyy',
  MONTH = 'MM/yyyy',
  YEAR = 'yyyy',
}

interface DatepickerProps extends FormControl {
  readonly value?: string;
  readonly onChange?: (value: string) => void;
  readonly type?: 'date' | 'day' | 'month' | 'year';
  readonly fromMonth?: Date;
  readonly toMonth?: Date;
  readonly fromYear?: number;
  readonly toYear?: number;
}

const Datepicker = React.forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      disabled,
      touched,
      valid,
      status,
      value,
      onChange,
      type = 'date',
      fromYear,
      toYear,
      fromMonth,
      toMonth,
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState<Date>();
    const [isPopperOpen, setIsPopperOpen] = useState<boolean>(false);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null,
    );
    const popperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popper = usePopper(popperRef.current, popperElement, {
      placement: 'bottom-start',
    });
    const dateFormat = Format[type.toLocaleUpperCase()];
    const thisYear = new Date().getFullYear();

    useEffect(() => {
      const date = parse(value ?? '', dateFormat, new Date());

      if (isValid(date)) {
        setSelected(date);
      } else {
        setSelected(undefined);
      }
    }, [dateFormat, value]);

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
        onChange?.(format(date, dateFormat));
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
            className={styles['date-picker__button']}
            onClick={handleButtonClick}
          >
            <Icon icon="calendar" />
          </button>
          <input
            type="text"
            placeholder={dateFormat.toLocaleUpperCase()}
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
              className={styles['date-picker__popper']}
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
                captionLayout={
                  type === 'month' || type === 'year' ? 'dropdown' : 'buttons'
                }
                fromYear={fromYear || thisYear - 10}
                toYear={toYear || thisYear + 10}
                fromMonth={fromMonth}
                toMonth={toMonth}
                classNames={{
                  ...dayPickerStyles,
                  root: styles['date-picker__daypicker'],
                  caption: styles['date-picker__daypicker-caption'],
                  caption_label: `${dayPickerStyles.caption_label} ${styles['date-picker__daypicker-caption-label']}`,
                  head_cell: styles['date-picker__daypicker-head-cell'],
                  cell: styles['date-picker__daypicker-cell'],
                  day: styles['date-picker__daypicker-day'],
                  day_selected: styles['date-picker__daypicker-day-selected'],
                  nav_button: styles['date-picker__daypicker-nav-button'],
                  dropdown_month:
                    styles['date-picker__daypicker-dropdown-month'],
                  dropdown_icon: styles['date-picker__daypicker-dropdown-icon'],
                }}
              />
            </div>
          </FocusTrap>
        )}
      </>
    );
  },
);

Datepicker.displayName = 'Datepicker';

export default Datepicker as React.ForwardRefExoticComponent<
  DatepickerProps & React.RefAttributes<HTMLInputElement>
>;
