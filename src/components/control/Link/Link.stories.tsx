import {
  a11yLink,
  a11yButton,
} from '@etchteam/storybook-addon-a11y-interaction-tests';
import { StoryFn } from '@storybook/react-vite';
import React from 'react';

import './Link';

const description = `
Links can be styled in various ways to indicate their purpose (inline, standalone, button-like), and include
proper focus states, optional icons, and external link indicators when appropriate.
`;

export default {
  component: 'evg-link',
  parameters: {
    docs: {
      subtitle:
        'A navigational element directing users to different pages or sections with appropriate styling.',
      fima: 'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6298-11258&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
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

Link.play = async ({ canvasElement, step }) => {
  await a11yLink({ canvasElement, step });
};

export const ButtonLink: StoryFn = (props) => (
  <evg-link {...props}>
    <button type="button">Link text</button>
  </evg-link>
);

ButtonLink.args = {
  variant: 'underline',
};

export const Chip: StoryFn = (args) => {
  return (
    <evg-chip {...args}>
      <button type="button">Chip</button>
    </evg-chip>
  );
};

Chip.args = {
  variant: 'light',
};

ButtonLink.play = async ({ canvasElement, step }) => {
  await a11yButton({ canvasElement, step });
};
