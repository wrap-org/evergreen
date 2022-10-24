import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Label from './Label';

export default {
  title: 'Controls/Label',
  component: Label,
} as Meta;

export function Primary() {
  return <Label htmlFor="my-input">Label</Label>;
}

export function Secondary() {
  return <Label htmlFor="my-input" type="secondary">Label</Label>;
}
