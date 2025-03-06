import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import './Badge';

const types = [
  'light',
  'dark',
  'info',
  'attention',
  'positive',
  'negative',
  'neutral',
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
    type: {
      control: {
        type: 'select',
      },
      options: types,
    },
  },
} as Meta;

export const Badge: StoryFn = (args) => <evg-badge {...args}>Badge</evg-badge>;

Badge.args = {
  type: 'light',
};

export const BadgeTypes = () => (
  <evg-grid>
    {types.map((type) => (
      <evg-grid-item key={type}>
        <evg-badge type={type}>{type}</evg-badge>
      </evg-grid-item>
    ))}
  </evg-grid>
);
