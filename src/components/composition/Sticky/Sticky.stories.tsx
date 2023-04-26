import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Sticky from './Sticky';

export default {
  title: 'Composition/Sticky',
  component: Sticky,
} as Meta;

export const Default = () => (
  <Sticky>Wrap an element in Sticky to make it `position: sticky;`</Sticky>
);

Default.storyName = 'Sticky';
