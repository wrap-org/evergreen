import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from 'components/content/Icon/Icon';

import List from './List';

export default {
  title: 'Composition/List',
  component: List,
  subcomponents: {
    ListItem: List.Item,
  },
} as Meta;

export function Default() {
  return (
    <List>
      <List.Item>List Item</List.Item>
      <List.Item
        icon={<Icon icon="home" />}
      >
        Icon List Item
      </List.Item>
    </List>
  );
}

Default.storyName = 'List';
