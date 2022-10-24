import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Select from './Select';

export default {
  title: 'Controls/Select',
  component: Select,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export function Default() {
  return (
    <Select name="select" id="select">
      <option>Please select</option>
    </Select>
  );
}

Default.storyName = 'Select';
