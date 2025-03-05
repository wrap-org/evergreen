import { Meta } from '@storybook/react';
import React from 'react';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'React/Components/Content/Badge',
  component: Badge,
  parameters: {
    docs: {
      theming: true,
    },
  },
} satisfies Meta;

export const Default = (args: BadgeProps) => (
  <evg-grid wrap="wrap">
    {[1].map((theme) => (
      <evg-grid-item key={theme}>
        <Badge
          className={`evg-theme-${theme} evg-text-transform-capitalize`}
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
