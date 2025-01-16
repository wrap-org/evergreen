import { Meta } from '@storybook/react';
import React from 'react';

import Badge, { BadgeProps } from './Badge';

import Grid from 'components/composition/Grid/Grid';
import Skin, { emphasisSkins, skins } from 'components/composition/Skin/Skin';

export default {
  title: 'Components/Content/Badge',
  component: Badge,
} as Meta;

export const Default = (args: BadgeProps) => (
  <>
    {[...skins, ...emphasisSkins].map((skin) => (
      <Skin skin={skin} key={skin}>
        <Grid.Item xs={3}>
          <Badge {...args}>
            <span className="m-text-transform-capitalize">{skin}</span>
          </Badge>
        </Grid.Item>
      </Skin>
    ))}
  </>
);

Default.storyName = 'Badge';

Default.args = {
  size: 'base',
  rounded: false,
};
