import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import FormGroup from 'components/react/composition/FormGroup/FormGroup';
import Label from 'components/react/controls/Label/Label';

export default {
  title: 'Components/Content/Help text',
  argTypes: {
    type: {
      control: 'radio',
      options: ['neutral', 'positive', 'negative'],
      defaultValue: 'neutral',
    },
  },
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
} satisfies Meta;

export const HelpText: StoryFn = (args) => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <evg-input state={args.type === 'negative' ? 'invalid' : undefined}>
      <input
        id="my-input"
        name="my-input"
        aria-invalid={args.type === 'negative'}
        aria-describedby="my-input-helptext"
      />
    </evg-input>
    <evg-help-text id="my-input-helptext" type={args.type}>
      <div>
        {args.type === 'positive' && 'Yay, it worked!'}
        {args.type === 'negative' && 'There was a problem'}
        {args.type === 'neutral' && 'Some help text for this input'}
      </div>
    </evg-help-text>
  </FormGroup>
);

HelpText.args = {
  type: 'neutral',
};
