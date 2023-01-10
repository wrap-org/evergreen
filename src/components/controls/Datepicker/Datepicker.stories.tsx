import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Datepicker from './Datepicker';

export default {
  title: 'Controls/Datepicker',
  component: Datepicker,
} as Meta;

export function Default() {
  const [value, setValue] = useState('');

  return <Datepicker name="my-input" id="my-input" value={value} onChange={setValue} />;
}

// export function MonthPicker() {
//   return <Input name="my-input" id="my-input" prefix="£" />;
// }

// export function WithReactHookForm() {
//   return <Input name="my-input" id="my-input" suffix="kr" />;
// }
