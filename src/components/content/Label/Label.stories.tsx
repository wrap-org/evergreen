import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Text from '../Text/Text';

import Label, { LabelProps } from './Label';

import Grid from 'components/composition/Grid/Grid';
import Skin, { emphasisSkins, skins } from 'components/composition/Skin/Skin';

export default {
  title: 'Content/Label',
  component: Label,
} as Meta;

export const Default = (args: LabelProps) => (
  <>
    {[...skins, ...emphasisSkins].map((skin) => (
      <Skin skin={skin} key={skin}>
        <Grid.Item xs={3}>
          <Label {...args}>
            <Text transform="capitalize">{skin}</Text>
          </Label>
        </Grid.Item>
      </Skin>
    ))}
  </>
);

Default.storyName = 'Label';

Default.args = {
  size: 'base',
  rounded: false,
};
