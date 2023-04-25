import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import PieChart from './PieChart';

export default {
  title: 'Content/PieChart',
  component: PieChart,
} as Meta;

export const Default = () => (
  <PieChart
    data={[
      { title: 'Segment title', value: 33, color: '#333' },
      { title: 'Segment title', value: 77, color: '#999' },
      { title: 'Segment title', value: 22, color: '#eee' },
    ]}
  />
);

Default.storyName = 'Pie Chart';
