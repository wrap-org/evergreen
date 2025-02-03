import { Meta } from '@storybook/react';
import React from 'react';

import Badge, { BadgeProps } from './Badge';

import { emphasis } from 'lib/theme';

export default {
  title: 'React/Components/Content/Badge',
  component: Badge,
  parameters: {
    docs: {
      theming: true,
    },
  },
} as Meta;

export const Default = (args: BadgeProps) => (
  <evg-grid wrap="wrap">
    {emphasis.map((theme) => (
      <evg-grid-item key={theme}>
        <Badge
          className={`m-theme-${theme} m-text-transform-capitalize`}
          {...args}
        >
          {theme}
        </Badge>
      </evg-grid-item>
    ))}
  </evg-grid>
);

Default.storyName = 'Badge';

Default.args = {
  size: 'base',
  rounded: false,
};
