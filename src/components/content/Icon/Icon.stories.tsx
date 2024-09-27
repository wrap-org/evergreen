import { Meta } from '@storybook/react';
import React from 'react';

import Icon from './Icon';

import Card from 'components/canvas/Card/Card';
import Grid from 'components/composition/Grid/Grid';
import TextAlign from 'components/composition/TextAlign/TextAlign';
import Text from 'components/content/Text/Text';

export default {
  title: 'Content/Icon',
  component: Icon,
} as Meta;

function importAll(r) {
  return r.keys().map((i) => i.replace('./', '').replace('.svg', ''));
}

const icons = importAll(
  require.context('../../../../node_modules/mono-icons/svg/', true, /\.svg$/),
);
const customIconNames = importAll(
  require.context('./custom-icons/', true, /\.svg$/),
);

const Template = ({
  iconNames,
  type,
}: {
  readonly iconNames: string[];
  readonly type?: 'mono' | 'custom';
}) => (
  <Grid wrap>
    {iconNames.map((icon) => (
      <Grid.Item xs={6} sm={3} md={2} flex key={icon}>
        <Card border>
          <Card.Body>
            <TextAlign align="center">
              <Text size="xl">
                <Icon icon={icon} type={type} />
              </Text>
              <br />
              <Text size="sm">{icon}</Text>
            </TextAlign>
          </Card.Body>
        </Card>
      </Grid.Item>
    ))}
  </Grid>
);

export const Default = () => <Template iconNames={icons} />;
Default.storyName = 'Icon';

export const Custom = () => (
  <Template iconNames={customIconNames} type="custom" />
);
