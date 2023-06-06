import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Fieldset from './Fieldset';
import Legend from './Legend';

export default {
  title: 'Controls/Fieldset',
  component: Fieldset,
  subcomponents: {
    Legend,
  },
} as Meta;

export function Default() {
  return (
    <Fieldset>
      <Fieldset.Legend>Legend</Fieldset.Legend>A group of form fields usually go
      here
    </Fieldset>
  );
}

Default.storyName = 'Fieldset';
