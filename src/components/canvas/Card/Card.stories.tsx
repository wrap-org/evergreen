import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { themes } from 'lib/theme';

const description = `
A box is a rectangle on a page to group related content together visually.
`;

export default {
  parameters: {
    docs: {
      description: {
        component: description,
      },
      theming: true,
    },
  },
} as Meta;

export const Card: StoryFn = (props) => (
  <evg-card {...props}>
    <docs-placeholder>Card content</docs-placeholder>
  </evg-card>
);

export const Theming: StoryFn = () => (
  <>
    {themes.map((theme) => (
      <evg-card class={`evg-theme-${theme}`} key={theme}>
        <docs-placeholder>Card content</docs-placeholder>
      </evg-card>
    ))}
  </>
);
