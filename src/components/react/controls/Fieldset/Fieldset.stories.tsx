import { Meta } from '@storybook/react';
import React from 'react';

import Fieldset from './Fieldset';
import Legend from './Legend';

export default {
  title: 'React/Components/Controls/Fieldset',
  component: Fieldset,
  subcomponents: {
    Legend: Legend as React.FunctionComponent<any>,
  },
} satisfies Meta<typeof Legend>;

export function Default() {
  return (
    <Fieldset>
      <Fieldset.Legend>Legend</Fieldset.Legend>A group of form fields usually go
      here
    </Fieldset>
  );
}

Default.storyName = 'Fieldset';
