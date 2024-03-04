import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Card from './Card';

import Grid from 'components/composition/Grid/Grid';
import Skin, { skins } from 'components/composition/Skin/Skin';

export default {
  title: 'Canvas/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Grid wrap>
    {skins.map((skin) => (
      <Grid.Item key={skin} xs={12} md={4}>
        <Skin skin={skin}>
          <Card {...args}>
            <Card.Header>
              <h2>Card title</h2>
            </Card.Header>
            <Card.Body>
              Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
              Pellentesque et metus nunc. Fusce ante arcu, mattis pretium semper
              ac, pretium vitae velit. Donec vitae eros et arcu accumsan auctor
              at id ipsum. Aliquam finibus, mi ac tincidunt blandit, purus elit
              ornare dui, nec dignissim mi ante sit amet mauris. Nulla eget dui
              in mauris tempus tincidunt a eget enim. Proin eu neque lorem. Sed
              quis tellus magna. Nunc scelerisque nisi eget dictum laoreet.
              Nullam aliquam et massa id euismod. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nulla vehicula ornare ligula nec
              rutrum. Maecenas convallis rutrum metus sed ultricies.
            </Card.Body>
          </Card>
        </Skin>
      </Grid.Item>
    ))}
  </Grid>
);

export const Default = Template.bind({});

export const Border = Template.bind({});
Border.args = { border: true };

export const Link = Template.bind({});
Link.args = { border: true, href: '#somewhere' };

export const Arrow = Template.bind({});
Arrow.args = {
  border: true,
  arrow: true,
  onClick: () => {
    console.log('clicked');
  },
};

export const MutedBody = () => (
  <Card>
    <Card.Header>
      <h2>Card title</h2>
    </Card.Header>
    <Card.Body muted>
      Aliquam egestas mi quam, a tincidunt lectus faucibus euismod. Pellentesque
      et metus nunc. Fusce ante arcu, mattis pretium semper ac, pretium vitae
      velit. Donec vitae eros et arcu accumsan auctor at id ipsum. Aliquam
      finibus, mi ac tincidunt blandit, purus elit ornare dui, nec dignissim mi
      ante sit amet mauris. Nulla eget dui in mauris tempus tincidunt a eget
      enim. Proin eu neque lorem. Sed quis tellus magna. Nunc scelerisque nisi
      eget dictum laoreet. Nullam aliquam et massa id euismod. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Nulla vehicula ornare
      ligula nec rutrum. Maecenas convallis rutrum metus sed ultricies.
    </Card.Body>
  </Card>
);
