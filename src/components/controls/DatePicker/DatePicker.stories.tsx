import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import DatePicker from './DatePicker';

export default {
  title: 'Controls/Date picker',
  component: DatePicker,
} as Meta;

export function Default() {
  return <DatePicker name="date" />;
}

Default.storyName = 'Date picker';
