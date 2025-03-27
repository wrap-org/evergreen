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
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6299-12182&t=g3niGv3HxLa5NL0O-0',
      description: {
        component:
          'The form group component is a wrapper for grouping form elements with a label and optional help text.',
      },
    },
  },
};

export const FormGroup: StoryFn = (args) => (
  <evg-form-group {...args}>
    <evg-label>
      <label htmlFor="name">Form group label</label>
    </evg-label>
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
    <evg-grid align-items="center">
      <evg-grid-item grow>
        <evg-label>
          <label htmlFor="composing-elements">Form group label</label>
        </evg-label>
      </evg-grid-item>
      <evg-grid-item>
        <evg-icon icon="circle-information" variant="default" />
      </evg-grid-item>
    </evg-grid>
    <evg-input>
      <input id="composing-elements" type="text" />
    </evg-input>
    <evg-help-text>Help Text</evg-help-text>
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
