import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Label, { LabelProps } from './Label';

export default {
  title: 'Content/Label',
  component: Label,
} as Meta;

export const Default = (args: LabelProps) => (
  <>
    <Label {...args}>Label text</Label>
  </>
);

Default.storyName = 'Label';

Default.args = {
  size: 'base',
  textColor: 'green',
  backgroundColor: 'white',
  rounded: false,
};
