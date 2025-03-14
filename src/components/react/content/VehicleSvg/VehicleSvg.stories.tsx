import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import VehicleSvg from './VehicleSvg';

export default {
  title: 'React/Components/Content/VehicleSvg',
  component: VehicleSvg,
} satisfies Meta;

export const Default: StoryFn = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item tablet="3">
      <VehicleSvg name="Five compartment stillage vehicle" color="sky" />
    </evg-grid-item>
    <evg-grid-item tablet="3">
      <VehicleSvg name="65-35 split 2 compartment RCV" color="rose" />
    </evg-grid-item>
    <evg-grid-item tablet="3">
      <VehicleSvg name="Small single compartment RCV" color="lilac" />
    </evg-grid-item>
    <evg-grid-item tablet="3">
      <VehicleSvg
        name="Single compartment RCV with recycling compaction"
        color="lime"
      />
    </evg-grid-item>
  </evg-grid>
);

Default.storyName = 'VehicleSvg';
