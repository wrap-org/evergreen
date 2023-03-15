import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Text from '../Text/Text';

import Badge, { BadgeProps } from './Badge';

import Grid from 'components/composition/Grid/Grid';
import Skin, { emphasisSkins, skins } from 'components/composition/Skin/Skin';

export default {
  title: 'Content/Badge',
  component: Badge,
} as Meta;

export const Default = (args: BadgeProps) => (
  <>
    {[...skins, ...emphasisSkins].map((skin) => (
      <Skin skin={skin} key={skin}>
        <Grid.Item xs={3}>
          <Badge {...args}>
            <Text transform="capitalize">{skin}</Text>
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
