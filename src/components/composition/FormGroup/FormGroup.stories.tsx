import { StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Composition/Form Group',
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The form group component is a wrapper for grouping form elements with a label and optional help text.',
      },
    },
  },
};

export const FormGroup: StoryFn = (args) => (
  <evg-form-group {...args}>
    <label htmlFor="name">Form group label</label>
    <evg-input>
      <input id="name" type="text" />
    </evg-input>
    <evg-help-text>Help text</evg-help-text>
  </evg-form-group>
);

FormGroup.args = {
  orientation: 'horizontal',
};

export const ComposingElements: StoryFn = () => (
  <evg-form-group orientation="horizontal">
    <evg-grid direction="column" gap="sm">
      <evg-grid-item>
        <evg-grid align-items="center">
          <evg-grid-item grow>
            <label htmlFor="composing-elements">Form group label</label>
          </evg-grid-item>
          <evg-grid-item>
            <evg-icon icon="circle-information" variant="default" />
          </evg-grid-item>
        </evg-grid>
      </evg-grid-item>
      <evg-grid-item>
        <evg-help-text>
          Collapsable help text can be grouped with the label on the left
        </evg-help-text>
      </evg-grid-item>
    </evg-grid>
    <evg-input>
      <input id="name" type="text" />
    </evg-input>
  </evg-form-group>
);

ComposingElements.parameters = {
  docs: {
    description: {
      story:
        'The form group expects the first child element to be label-like, but its not opinionated about what elements are used.',
    },
  },
};
