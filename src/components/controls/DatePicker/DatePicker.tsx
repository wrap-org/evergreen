import React, { useRef } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import { format as dateFnsFormat, parse as dateFnsParse } from 'date-fns';
import classNames from 'classnames';

import Icon from 'components/content/Icon/Icon';

import { BaseInputProps } from 'lib/types';
import { defaultInputProps } from 'lib/default-props';
import useCombinedRefs from 'lib/hooks/combined-refs';

import styles from './DatePicker.module.scss';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  return DateUtils.isDate(parsed) ? parsed : undefined;
}

function formatDate(date, format, locale?: any) {
  return dateFnsFormat(date, format, { locale });
}

interface DatePickerProps extends BaseInputProps {
  placeholder?: string;
  defaultValue?: Date;
  format?: string;
  dayPickerProps?: { [index: string]: any }
  name: string;
  [index: string]: any;
}

const DatePicker = React.forwardRef((
  {
    disabled,
    touched,
    valid,
    status,
    placeholder,
    defaultValue,
    format,
    dayPickerProps,
    onDayChange,
    ...inputProps
  }: DatePickerProps,
  forwardedRef: any,
) => {
  const innerRef = useRef(null);
  const ref = useCombinedRefs(forwardedRef, innerRef);

  const handleDayChange = (selectedDay) => {
    if (!selectedDay) {
      return onDayChange?.('');
    }

    const formattedDate = formatDate(selectedDay, format);
    return onDayChange?.(formattedDate);
  };

  return (
    <div
      className={classNames(styles['date-picker'], {
        [styles['date-picker--disabled']]: disabled,
        [styles['date-picker--valid']]: touched && valid === true,
        [styles['date-picker--invalid']]: touched && valid === false,
        [styles[`date-picker--${status}`]]: status,
      })}
    >
      <button
        type="button"
        className={styles['date-picker__icon']}
        onClick={() => {
          ref.current?.focus();
        }}
        aria-label="Choose a date"
      >
        <Icon icon="calendar" />
      </button>
      <DayPickerInput
        value={defaultValue}
        onDayChange={handleDayChange}
        formatDate={formatDate}
        format={format}
        parseDate={parseDate}
        placeholder={placeholder || (format || '').toUpperCase()}
        inputProps={{
          disabled,
          className: styles['date-picker__input'],
          ...inputProps,
          ref,
        }}
        dayPickerProps={dayPickerProps}
      />
    </div>
  );
});

DatePicker.defaultProps = {
  placeholder: undefined,
  format: 'dd/MM/yyyy',
  dayPickerProps: {},
  ...defaultInputProps,
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
