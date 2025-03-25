import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import './Badge';

const variants = [
  'forest',
  'forest light',
  'earth',
  'sand',
  'sky',
  'sky light',
  'lime',
  'lime light',
  'rose',
  'rose light',
  'orange',
  'lemon',
  'violet',
  'lilac',
  'coal',
] as const;

export default {
  parameters: {
    docs: {
      description: {
        component: 'Badges are used to tag an item or to display a status.',
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
  <evg-grid>
    {variants.map((variant) => (
      <evg-grid-item key={variant}>
        <evg-badge variant={variant}>{variant}</evg-badge>
      </evg-grid-item>
    ))}
  </evg-grid>
);
