import { StoryFn } from '@storybook/react';
import React from 'react';

const description = `
A structured container for form elements managing layout, spacing, labels and validation
states. Form Group maintains proper alignment and spacing between related inputs while
supporting accessibility requirements, including proper labelling and error states.
`;

export default {
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
      subtitle:
        'A structured container for form elements managing layout and validation.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6299-12182&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
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
