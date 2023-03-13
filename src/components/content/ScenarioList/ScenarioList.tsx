import React from 'react';

import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import ScenarioSummary, {
  ScenarioProps,
} from '../ScenarioSummary/ScenarioSummary';

import Card from 'components/canvas/Card/Card';
import Grid from 'components/composition/Grid/Grid';

const ScenarioList = ({
  scenarios,
  streamDots = false,
}: {
  scenarios: ScenarioProps[];
  streamDots?: boolean;
}) => (
  <>
    {scenarios.map((scenario) => (
      <Card key={scenario.id} arrow muted={scenario.recommended}>
        <Card.Body border padded>
          <Grid wrap>
            <Grid.Item xs={12} lg={3} xl={2}>
              <h3>
                {scenario.recommended && (
                  <Icon icon="favorite" color="yellow" />
                )}{' '}
                Scenario {scenario.id}
              </h3>
              {scenario.recommended && <Label>Recommended</Label>}
            </Grid.Item>
            <Grid.Item xs={12} lg={9} xl={10}>
              <ScenarioSummary scenario={scenario} streamDots={streamDots} />
            </Grid.Item>
          </Grid>
        </Card.Body>
      </Card>
    ))}
  </>
);

export default ScenarioList;
