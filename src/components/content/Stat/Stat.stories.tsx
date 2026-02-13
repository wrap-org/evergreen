import { Meta, StoryFn } from '@storybook/react-vite';
import React from 'react';

import { iconKeys } from '../Icon/icons';

const description = `
A component highlighting important numeric values and metrics with consistent formatting.
Stat provides consistent formatting for numbers, percentages, and currency values with
options for labels, trends, and visual emphasis to make key metrics stand out in dashboards
and reports.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'A component highlighting important numeric values and metrics.',
      description: {
        component: description,
      },
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6238-3739&t=g3niGv3HxLa5NL0O-0',
    },
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: iconKeys,
    },
  },
} satisfies Meta;

export const Stat: StoryFn = ({ icon, ...args }) => (
  <evg-stat {...args}>
    {icon && (
      <evg-stat-icon>
        <evg-icon icon={icon} />
      </evg-stat-icon>
    )}
    <evg-stat-value>2nd</evg-stat-value>
    <evg-stat-content>
      Helping Wales become 2nd best in the world at recycling
    </evg-stat-content>
  </evg-stat>
);

export const Variations: StoryFn = () => (
  <evg-wrapper size="md">
    <evg-grid wrap="wrap" gap="xl">
      <evg-grid-item small-mobile="12" small-tablet="6">
        <evg-stat layout="stack">
          <evg-stat-icon>
            <evg-icon icon="success-stories" set="functional" />
          </evg-stat-icon>
          <evg-stat-value>2nd</evg-stat-value>
          <evg-stat-content>
            Helping Wales become 2nd best in the world at recycling
          </evg-stat-content>
        </evg-stat>
      </evg-grid-item>
      <evg-grid-item small-mobile="12" small-tablet="6">
        <evg-stat layout="stack" align="center">
          <evg-stat-icon>
            <evg-icon icon="success-stories" set="functional" />
          </evg-stat-icon>
          <evg-stat-value>2nd</evg-stat-value>
          <evg-stat-content>
            Helping Wales become 2nd best in the world at recycling
          </evg-stat-content>
        </evg-stat>
      </evg-grid-item>
      <evg-grid-item small-mobile="12" small-tablet="6">
        <evg-stat layout="stack">
          <evg-stat-value>2nd</evg-stat-value>
          <evg-stat-content>
            Helping Wales become 2nd best in the world at recycling
          </evg-stat-content>
        </evg-stat>
      </evg-grid-item>
      <evg-grid-item small-mobile="12" small-tablet="6">
        <evg-stat layout="stack" align="center">
          <evg-stat-value>2nd</evg-stat-value>
          <evg-stat-content>
            Helping Wales become 2nd best in the world at recycling
          </evg-stat-content>
        </evg-stat>
      </evg-grid-item>
      <evg-grid-item small-mobile="12">
        <evg-stat layout="row">
          <evg-stat-icon>
            <evg-icon icon="success-stories" set="functional" />
          </evg-stat-icon>
          <evg-stat-value>2nd</evg-stat-value>
          <evg-stat-content>
            Helping Wales become 2nd best in the world at recycling
          </evg-stat-content>
        </evg-stat>
      </evg-grid-item>
      <evg-grid-item small-mobile="12">
        <evg-stat layout="row">
          <evg-stat-value>2nd</evg-stat-value>
          <evg-stat-content>
            Helping Wales become 2nd best in the world at recycling
          </evg-stat-content>
        </evg-stat>
      </evg-grid-item>
    </evg-grid>
  </evg-wrapper>
);
