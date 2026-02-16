import {
  a11yRadio,
  a11yCheckbox,
} from '@etchteam/storybook-addon-a11y-interaction-tests';
import { StoryFn } from '@storybook/react-vite';
import React from 'react';

import './RadioCheckbox';

const description = `
Radio buttons enforce single selection while Checkboxes allow multiple selections, both featuring consistent
styling, proper spacing, label alignment, and support for indeterminate states (checkboxes only).
`;

export default {
  component: 'evg-radio-checkbox',
  parameters: {
    docs: {
      subtitle:
        'Selection controls for single or multiple choices with consistent styling and proper accessibility.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6298-11670&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    state: {
      control: {
        type: 'radio',
      },
      options: ['valid', 'invalid'],
    },
  },
};

export const Radio: StoryFn = (props) => (
  <div role="radiogroup" aria-label="Group label">
    <evg-radio-checkbox class="evg-spacing-bottom-sm" {...props}>
      <label>
        <input type="radio" name="my-radio" value="yes" defaultChecked />
        Item label one
      </label>
    </evg-radio-checkbox>
    <evg-radio-checkbox class="evg-spacing-bottom-sm" {...props}>
      <label>
        <input type="radio" name="my-radio" value="no" />
        Item label two
      </label>
    </evg-radio-checkbox>
    <evg-radio-checkbox {...props}>
      <label>
        <input type="radio" name="my-radio" value="maybe" />
        Item label three
      </label>
    </evg-radio-checkbox>
  </div>
);

Radio.play = async ({ canvasElement, step }) => {
  await a11yRadio({ canvasElement, step });
};

export const Checkbox: StoryFn = (props) => (
  <div role="group" aria-label="Group label">
    <evg-radio-checkbox class="evg-spacing-bottom-sm" {...props}>
      <label>
        <input type="checkbox" name="my-checkbox" value="yes" defaultChecked />
        Item label one
      </label>
    </evg-radio-checkbox>
    <evg-radio-checkbox class="evg-spacing-bottom-sm" {...props}>
      <label>
        <input type="checkbox" name="my-checkbox" value="no" />
        Item label two
      </label>
    </evg-radio-checkbox>
    <evg-radio-checkbox {...props}>
      <label>
        <input type="checkbox" name="my-checkbox" value="maybe" disabled />
        Item label three
      </label>
    </evg-radio-checkbox>
  </div>
);

Checkbox.play = async ({ canvasElement, step }) => {
  await a11yCheckbox({ canvasElement, step });
};
