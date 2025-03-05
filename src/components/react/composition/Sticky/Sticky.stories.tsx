import { Meta } from '@storybook/react';
import React from 'react';

import Sticky from './Sticky';

export default {
  title: 'React/Components/Composition/Sticky',
  component: Sticky,
} satisfies Meta;

export const Default = () => (
  <Sticky>Wrap an element in Sticky to make it `position: sticky;`</Sticky>
);

Default.storyName = 'Sticky';
