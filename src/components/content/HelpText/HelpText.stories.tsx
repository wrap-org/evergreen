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
      <div>Some help text for this input</div>
    </evg-help-text>
  </FormGroup>
);

HelpText.args = {
  type: 'neutral',
};

export const HelpTextTypes: StoryFn = () => (
  <evg-grid direction="column">
    <evg-grid-item>
      <evg-help-text id="my-input-helptext" type={'neutral'}>
        <div>Some help text for this input</div>
      </evg-help-text>
    </evg-grid-item>
    <evg-grid-item>
      <evg-help-text id="my-input-helptext" type={'positive'}>
        <div>Yay, it worked!</div>
      </evg-help-text>
    </evg-grid-item>
    <evg-grid-item>
      <evg-help-text id="my-input-helptext" type={'negative'}>
        <div>There was a problem</div>
      </evg-help-text>
    </evg-grid-item>
  </evg-grid>
);

export const HelpTextElement: StoryFn = () => (
  <evg-grid direction="column">
    <evg-grid-item>
      <FormGroup>
        <Label htmlFor="my-input1">Input label</Label>
        <evg-input>
          <input
            id="my-input1"
            name="my-input1"
            aria-describedby="my-input-helptext1"
          />
        </evg-input>
        <evg-help-text id="my-input-helptext1">
          <div>Some help text in a div element</div>
        </evg-help-text>
      </FormGroup>
    </evg-grid-item>
    <evg-grid-item>
      <FormGroup>
        <Label htmlFor="my-input2">Input label</Label>
        <evg-input>
          <input
            id="my-input2"
            name="my-input2"
            aria-describedby="my-input-helptext2"
          />
        </evg-input>
        <evg-help-text id="my-input-helptext2">
          <span>Some help text in a span element</span>
        </evg-help-text>
      </FormGroup>
    </evg-grid-item>
  </evg-grid>
);

HelpTextElement.parameters = {
  docs: {
    description: {
      story:
        'Help text can wrap a div or a span element to control whether it is used inline or as a block element.',
    },
  },
};
