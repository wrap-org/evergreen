import { StoryFn } from '@storybook/react';
import React from 'react';

import './Link';

export default {
  component: 'evg-link',
  parameters: {
    docs: {
      description: {
        component: 'Provides link styles for anchor or button elements.',
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['underline', 'no-underline'],
    },
  },
};

export const Link: StoryFn = (props) => (
  <evg-link {...props}>
    <a href="https://diamond.etch.co">Link text</a>
  </evg-link>
);

Link.args = {
  variant: 'underline',
};

export const ButtonLink: StoryFn = (props) => (
  <evg-link {...props}>
    <button type="button">Link text</button>
  </evg-link>
);

ButtonLink.args = {
  variant: 'underline',
};
