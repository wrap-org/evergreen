import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Content/Help text',
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['neutral', 'positive', 'negative'],
      defaultValue: 'neutral',
    },
    inline: {
      control: {
        type: 'boolean',
      },
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
  <evg-form-group orientation="horizontal">
    <evg-label>
      <label htmlFor="my-input">Input label</label>
    </evg-label>
    <evg-input state={args.type === 'negative' ? 'invalid' : undefined}>
      <input
        id="my-input"
        name="my-input"
        aria-invalid={args.type === 'negative'}
        aria-describedby="my-input-helptext"
      />
    </evg-input>
    <evg-help-text id="my-input-helptext" type={args.type}>
      Some help text for this input
    </evg-help-text>
  </evg-form-group>
);

HelpText.args = {
  type: 'neutral',
  inline: false,
};

export const HelpTextTypes: StoryFn = () => (
  <evg-grid direction="column">
    <evg-grid-item>
      <evg-help-text type="neutral">
        Some help text for this input
      </evg-help-text>
    </evg-grid-item>
    <evg-grid-item>
      <evg-help-text type="positive">Yay, it worked!</evg-help-text>
    </evg-grid-item>
    <evg-grid-item>
      <evg-help-text type="negative">There was a problem!</evg-help-text>
    </evg-grid-item>
  </evg-grid>
);

export const HelpTextInline: StoryFn = () => (
  <evg-form-group>
    <evg-label>
      <label htmlFor="my-input">Input label</label>
    </evg-label>
    <evg-input>
      <input
        id="my-input"
        name="my-input"
        aria-describedby="my-input-helptext"
      />
    </evg-input>
    <div>
      This is{' '}
      <evg-help-text id="my-input-helptext" inline>
        some help text
      </evg-help-text>{' '}
      inline.
    </div>
  </evg-form-group>
);
