import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import './Badge';

const variants = [
  'forest',
  'forest-light',
  'earth',
  'sand',
  'sky',
  'sky-light',
  'lime',
  'lime-light',
  'rose',
  'rose-light',
  'orange',
  'lemon',
  'violet',
  'lilac',
  'coal',
] as const;

const description = `
A small visual indicator highlighting status, counts, or categories with customisable styling.
Badges can be customised with different colours, sizes to represent various states, and can contain
short text, numbers, or icons to provide at-a-glance information.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'A small visual indicator highlighting status, counts, or categories.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=5104-2952&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
    },
  },
} as Meta;

export const Badge: StoryFn = (args) => <evg-badge {...args}>Badge</evg-badge>;

export const BadgeTypes = () => (
  <evg-grid wrap="wrap">
    {variants.map((variant) => (
      <evg-grid-item key={variant}>
        <evg-badge variant={variant}>{variant}</evg-badge>
      </evg-grid-item>
    ))}
  </evg-grid>
);
