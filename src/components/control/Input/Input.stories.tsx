import { StoryFn } from '@storybook/react-vite';
import React from 'react';

const description = `
Input supports various types (text, email, password, etc.), validation states,
prefixes/suffixes, clear functionality, and responsive behaviour while maintaining
consistent styling and accessibility.
`;

export default {
  component: 'evg-input',
  parameters: {
    docs: {
      subtitle: 'A form control collecting text data with validation states.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=5105-4457&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
    a11y: {
      config: {
        // Keeping these stories simple, so we don't need labels
        rules: [
          { id: 'label', enabled: false },
          { id: 'select-name', enabled: false },
        ],
      },
    },
  },
  argTypes: {
    state: {
      control: {
        type: 'select',
      },
      options: ['valid', 'invalid'],
    },
  },
};

export const Input: StoryFn = (args) => (
  <evg-input {...args}>
    <input />
  </evg-input>
);

export const InputStates: StoryFn = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item>
      <evg-input state="valid">
        <input value="valid" />
      </evg-input>
    </evg-grid-item>
    <evg-grid-item>
      <evg-input state="invalid">
        <input value="invalid" />
      </evg-input>
    </evg-grid-item>
    <evg-grid-item>
      <evg-input>
        <input value="disabled" disabled />
      </evg-input>
    </evg-grid-item>
  </evg-grid>
);

export const Affix: StoryFn = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item>
      <evg-input>
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path
            d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
            fill="currentColor"
          ></path>
        </svg>
        <input value="prefix" />
      </evg-input>
    </evg-grid-item>
    <evg-grid-item>
      <evg-input>
        <input value="suffix" />
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path
            d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
            fill="currentColor"
          ></path>
        </svg>
      </evg-input>
    </evg-grid-item>
  </evg-grid>
);

export const Textarea: StoryFn = (args) => (
  <evg-input {...args}>
    <textarea></textarea>
  </evg-input>
);

const textareaDescription = `
> A multi-line text input for longer form entries with auto-adjusting size.

A multi-line text input for longer form entries with auto-resizing and character counting.
Textarea supports auto-resizing, character counters, minimum and maximum heights, and properly
handles text wrapping while maintaining consistent styling with other form controls.
`;

Textarea.parameters = {
  docs: {
    description: {
      story: textareaDescription,
    },
  },
};

export const Select: StoryFn = (args) => (
  <evg-input {...args}>
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
        fill="currentColor"
      ></path>
    </svg>
  </evg-input>
);

const selectDescription = `
> A dropdown control for choosing from predefined options with selection and filtering capabilities.

Select provides single or multiple selection capabilities, option grouping, search/filtering, custom rendering
of options, and proper keyboard navigation to enhance usability.
`;

Select.parameters = {
  docs: {
    description: {
      story: selectDescription,
    },
  },
};
