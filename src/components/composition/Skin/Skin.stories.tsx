import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Grid from 'components/composition/Grid/Grid';
import Section from 'components/canvas/Section/Section';
import Card from 'components/canvas/Card/Card';
import Spacing from 'components/composition/Spacing/Spacing';

import Skin, { skins } from './Skin';

export default {
  title: 'Composition/Skin',
  component: Skin,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export function Default() {
  return (
    <Grid spacing="none" wrap>
      {skins.map((skin, i) => (
        <Grid.Item xs={12} md={4}>
          <Skin skin={skin}>
            <Section>
              <Spacing top="lg" bottom="lg" left="lg" right="lg">
                <Skin skin={skins[i + 1] || skins[0]}>
                  <Card>
                    <Card.Header>
                      <h3>
                        Card title
                      </h3>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
                        Pellentesque et metus nunc.
                      </p>
                    </Card.Body>
                  </Card>
                </Skin>
              </Spacing>
            </Section>
          </Skin>
        </Grid.Item>
      ))}
    </Grid>
  );
}

Default.storyName = 'Skin';
