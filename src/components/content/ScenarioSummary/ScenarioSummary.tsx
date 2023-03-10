import React from 'react';

import Text from '../Text/Text';

import Grid from 'components/composition/Grid/Grid';

const ScenarioSummary = ({
  children,
  cost,
}: {
  children?: React.ReactNode;
  cost?: string;
}) => {
  return (
    <Grid wrap>
      <Grid.Item xs={12} sm={10}>
        {children}
      </Grid.Item>
      <Grid.Item sm={2}>
        <Text size="h2" align="right" display="block" color="blue-darkest">
          {cost}
        </Text>
      </Grid.Item>
    </Grid>
  );
};

export default ScenarioSummary;
