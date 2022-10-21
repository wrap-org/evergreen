import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Checkbox from './Checkbox';

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as Meta;

export function Default() {
  return <Checkbox name="checkbox" id="checkbox">Checkbox label</Checkbox>;
}

Default.storyName = 'Checkbox';
