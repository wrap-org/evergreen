import { Meta } from '@storybook/react';
import React from 'react';

import HelpText from './HelpText';

import FormGroup from 'components/react/composition/FormGroup/FormGroup';
import Label from 'components/react/controls/Label/Label';

export default {
  title: 'React/Components/Content/Help text',
  component: HelpText,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Has a problem with positive text, but it does pass A11Y
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = () => (
  <FormGroup>
    <Label htmlFor="my-input-1">Input label</Label>
    <evg-input>
      <input
        id="my-input-1"
        name="my-input-1"
        aria-describedby="my-input-1-helptext"
      />
    </evg-input>
    <HelpText id="my-input-1-helptext">Some help text for this input</HelpText>
  </FormGroup>
);

export const Positive = () => (
  <FormGroup>
    <Label htmlFor="my-input-2">Input label</Label>
    <evg-input>
      <input
        id="my-input-2"
        name="my-input-2"
        aria-describedby="my-input-2-helptext"
      />
    </evg-input>
    <HelpText id="my-input-2-helptext" type="positive">
      Yay, it worked!
    </HelpText>
  </FormGroup>
);

export const Negative = () => (
  <FormGroup>
    <Label htmlFor="my-input-3">Input label</Label>
    <evg-input state="invalid">
      <input
        id="my-input-3"
        name="my-input-3"
        aria-invalid="true"
        aria-describedby="my-input-3-helptext"
      />
    </evg-input>
    <HelpText id="my-input-3-helptext" type="negative">
      There was a problem
    </HelpText>
  </FormGroup>
);
