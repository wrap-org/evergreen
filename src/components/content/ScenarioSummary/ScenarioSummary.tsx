import React from 'react';

import BarStack from '../BarStack/BarStack';
import StreamDot from '../StreamDot/StreamDot';
import Text from '../Text/Text';

import Grid from 'components/composition/Grid/Grid';
import Spacing from 'components/composition/Spacing/Spacing';

export interface ScenarioProps {
  id?: number;
  wrapId?: number;
  recommended?: boolean;
  cost?: string;
  streams?: {
    dry?: number;
    residual?: number;
    food?: number;
    total?: number;
  };
}

const ScenarioSummary = ({
  scenario,
  streamDots = false,
}: {
  scenario: ScenarioProps;
  streamDots?: boolean;
}) => {
  return (
    <Grid wrap>
      <Grid.Item xs={12} sm={10}>
        <BarStack>
          <BarStack.Item
            color="dry-stream"
            size={scenario?.streams?.dry ?? 0}
          />
          <BarStack.Item
            color="residual-stream"
            size={scenario?.streams?.residual ?? 0}
          />
          <BarStack.Item
            color="food-stream"
            size={scenario?.streams?.food ?? 0}
          />
          <BarStack.Item
            color={scenario.recommended ? 'yellow' : 'blue-dark'}
            size={scenario?.streams?.total ?? 0}
          />
        </BarStack>

        <Spacing bottom="md" />

        <Grid wrap>
          <Grid.Item xs={12} lg={4}>
            <Text size="sm">
              {streamDots && <StreamDot stream="dry" />} Dry{' '}
              <Text weight="bold">Fortnightly - Co-Mingled</Text>
            </Text>
          </Grid.Item>
          <Grid.Item xs={12} lg={4}>
            <Text size="sm">
              {streamDots && <StreamDot stream="residual" />} Residual{' '}
              <Text weight="bold">Fortnightly</Text>
            </Text>
          </Grid.Item>
          <Grid.Item xs={12} lg={4}>
            <Text size="sm">
              {streamDots && <StreamDot stream="food" />} Food{' '}
              <Text weight="bold">Separate collection</Text>
            </Text>
          </Grid.Item>
        </Grid>
      </Grid.Item>
      <Grid.Item sm={2}>
        <Text size="h2" align="right" display="block" color="blue-darkest">
          {scenario.cost}
        </Text>
      </Grid.Item>
    </Grid>
  );
};

export default ScenarioSummary;
