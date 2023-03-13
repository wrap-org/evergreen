import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import ScenarioList from './ScenarioList';

export default {
  title: 'Content/Scenario List',
  component: ScenarioList,
} as Meta;

const laPortalScenarios = [
  { id: 1, cost: '£100.00', streams: { dry: 50, residual: 20, food: 15 } },
  { id: 2, cost: '£250.00', streams: { dry: 40, residual: 30, food: 10 } },
  { id: 3, cost: '£500.00', streams: { dry: 55, residual: 25, food: 20 } },
];

export const ScenarioList1 = () => (
  <ScenarioList scenarios={laPortalScenarios} />
);

ScenarioList1.storyName = 'LA Portal Scenario List';

const eteepScenarios = [
  { id: 1, recommended: true, cost: '£100,000', streams: { total: 40 } },
  { id: 2, recommended: false, cost: '£250,000', streams: { total: 70 } },
  { id: 3, recommended: false, cost: '£500,000', streams: { total: 80 } },
];

export const ScenarioList2 = () => <ScenarioList scenarios={eteepScenarios} />;

ScenarioList2.storyName = 'eTEEP scenario list';
