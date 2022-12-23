import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import List from './List';

import Icon from 'components/content/Icon/Icon';

export default {
  title: 'Composition/List',
  component: List,
  subcomponents: {
    ListItem: List.Item,
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <List.Item key={item} icon={<Icon icon="favorite" />}>
        Icon List Item
      </List.Item>
    ))}
  </List>
);

export const Default = Template.bind({});

Default.storyName = 'List';
