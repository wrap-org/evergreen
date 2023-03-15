import { Meta, StoryFn } from '@storybook/react/types-6-0';
import React from 'react';

import Menubar from './Menubar';

import Icon from 'components/content/Icon/Icon';

export default {
  title: 'Controls/Menubar',
  component: Menubar,
  subcomponents: {
    MenubarTabs: Menubar.Tabs,
    MenubarTab: Menubar.Tab,
    MenubarBack: Menubar.Back,
  },
} as Meta;

export const FourTabs: StoryFn = (args) => (
  <Menubar {...args}>
    <Menubar.Tabs>
      <Menubar.Tab>
        <a href="#">Service</a>
      </Menubar.Tab>
      <Menubar.Tab active>
        <a href="#">Economic</a>
      </Menubar.Tab>
      <Menubar.Tab disabled>
        <a href="#">Environmental</a>
      </Menubar.Tab>
      <Menubar.Tab disabled>
        <a href="#">Technical</a>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);

export const TwoTabs: StoryFn = () => (
  <Menubar>
    <Menubar.Tabs>
      <Menubar.Tab active>
        <a href="#">Collection</a>
      </Menubar.Tab>
      <Menubar.Tab disabled>
        <a href="#">Disposal</a>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);

export const WithBackButton = () => (
  <Menubar>
    <Menubar.Back>
      <a href="#">
        <Icon icon="arrow-left" /> Back
      </a>
    </Menubar.Back>
    <Menubar.Tabs>
      <Menubar.Tab active>
        <a href="#">Collection</a>
      </Menubar.Tab>
      <Menubar.Tab disabled>
        <a href="#">Disposal</a>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);
