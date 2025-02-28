import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Card from './Card';

import { themes } from 'lib/theme';

export default {
  title: 'React/Components/Canvas/Card',
  component: Card,
  parameters: {
    docs: {
      theming: true,
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <evg-grid wrap="wrap">
    {themes.map((theme) => (
      <evg-grid-item key={theme} small-mobile="12" small-tablet="4">
        <Card className={`evg-theme-${theme}`} {...args}>
          <Card.Header>
            <h2>Card title</h2>
          </Card.Header>
          <Card.Body>
            Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
            Pellentesque et metus nunc. Fusce ante arcu, mattis pretium semper
            ac, pretium vitae velit. Donec vitae eros et arcu accumsan auctor at
            id ipsum. Aliquam finibus, mi ac tincidunt blandit, purus elit
            ornare dui, nec dignissim mi ante sit amet mauris. Nulla eget dui in
            mauris tempus tincidunt a eget enim. Proin eu neque lorem. Sed quis
            tellus magna. Nunc scelerisque nisi eget dictum laoreet. Nullam
            aliquam et massa id euismod. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nulla vehicula ornare ligula nec rutrum.
            Maecenas convallis rutrum metus sed ultricies.
          </Card.Body>
        </Card>
      </evg-grid-item>
    ))}
  </evg-grid>
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
  <evg-grid>
    {themes.map((theme) => (
      <evg-grid-item key={theme} small-mobile="12" small-tablet="4" fill>
        <Card border className={`evg-theme-${theme}`}>
          <Card.Header>
            <h2>Card title</h2>
          </Card.Header>
          <Card.Body muted>
            Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
            Pellentesque et metus nunc. Fusce ante arcu, mattis pretium semper
            ac, pretium vitae velit. Donec vitae eros et arcu accumsan auctor at
            id ipsum. Aliquam finibus, mi ac tincidunt blandit, purus elit
            ornare dui, nec dignissim mi ante sit amet mauris. Nulla eget dui in
            mauris tempus tincidunt a eget enim. Proin eu neque lorem. Sed quis
            tellus magna. Nunc scelerisque nisi eget dictum laoreet.
          </Card.Body>
        </Card>
      </evg-grid-item>
    ))}
  </evg-grid>
);
