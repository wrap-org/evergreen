import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import ScenarioSummary from './ScenarioSummary';

export default {
  title: 'Content/Scenario Summary',
  component: ScenarioSummary,
} as Meta;

export const Default = () => (
  <ScenarioSummary
    scenario={{
      id: 1,
      cost: '£100.00',
      streams: { dry: 50, residual: 20, food: 15 },
    }}
  />
);

Default.storyName = 'Scenario Summary';
