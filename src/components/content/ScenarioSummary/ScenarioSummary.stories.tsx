import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import BarStack from '../BarStack/BarStack';

import ScenarioSummary from './ScenarioSummary';

export default {
  title: 'Content/Scenario Summary',
  component: ScenarioSummary,
} as Meta;

export const Default = () => (
  <ScenarioSummary cost="£100.00">
    <BarStack>
      <BarStack.Item color="dry-stream" size={50} />
      <BarStack.Item color="residual-stream" size={20} />
      <BarStack.Item color="food-stream" size={15} />
    </BarStack>
  </ScenarioSummary>
);

Default.storyName = 'Scenario Summary';
