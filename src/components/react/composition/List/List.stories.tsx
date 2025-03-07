import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import List from './List';

import '@/components/control/RadioCheckbox/RadioCheckbox';

export default {
  title: 'React/Components/Composition/List',
  component: List,
  subcomponents: {
    ListItem: List.Item,
  },
} satisfies Meta<typeof List>;

const Template: StoryFn<typeof List> = (args) => (
  <List {...args}>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <List.Item key={item} icon={<evg-icon icon="favorite" />}>
        Icon List Item
      </List.Item>
    ))}
  </List>
);

export const Default = Template.bind({});

Default.storyName = 'List';

export const Animated: StoryFn<typeof List> = (args) => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

  const remove = () => {
    const i = Math.floor(Math.random() * items.length);
    setItems(items.filter((val, key) => key !== i));
  };

  const add = () => {
    const i = Math.floor(Math.random() * 100);
    setItems([...items, i]);
  };

  return (
    <>
      <List {...args} className="evg-spacing-bottom-md">
        {items.map((item) => (
          <List.Item key={item} icon={<evg-icon icon="favorite" />}>
            Icon List Item
          </List.Item>
        ))}
      </List>
      <evg-grid>
        <evg-grid-item>
          <evg-button>
            <button onClick={remove}>Remove item</button>
          </evg-button>
        </evg-grid-item>
        <evg-grid-item>
          <evg-button variant="primary">
            <button onClick={add}>Add item</button>
          </evg-button>
        </evg-grid-item>
      </evg-grid>
    </>
  );
};

export const ListOfCheckboxes: StoryFn<typeof List> = (args) => (
  <List {...args}>
    {[1, 2, 3, 4, 5].map((item) => (
      <List.Item key={item}>
        <evg-radio-checkbox>
          <label>
            <input type="checkbox" />
            {' * '.repeat(item)}
          </label>
        </evg-radio-checkbox>
      </List.Item>
    ))}
  </List>
);

ListOfCheckboxes.args = {
  spacing: 'sm',
};
