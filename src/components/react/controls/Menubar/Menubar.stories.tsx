/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Menubar from './Menubar';

export default {
  title: 'React/Components/Controls/Menubar',
  component: Menubar,
  subcomponents: {
    MenubarTabs: Menubar.Tabs as React.FunctionComponent<any>,
    MenubarTab: Menubar.Tab as React.FunctionComponent<any>,
    MenubarBack: Menubar.Back as React.FunctionComponent<any>,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Muted background is a few decimal points out of being a11y compliant with link
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
    docs: {
      theming: true,
    },
  },
} satisfies Meta<typeof Menubar>;

export const FourTabs: StoryFn = (args) => (
  <Menubar {...args}>
    <Menubar.Tabs>
      <Menubar.Tab completed>
        <a href="#">Service</a>
      </Menubar.Tab>
      <Menubar.Tab active>
        <a href="#">Economic</a>
      </Menubar.Tab>
      <Menubar.Tab>
        <a href="#">Environmental</a>
      </Menubar.Tab>
      <Menubar.Tab disabled>
        <span>Technical</span>
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
        <span>Disposal</span>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);

export const WithBackButton = () => (
  <Menubar>
    <Menubar.Back>
      <a href="#">
        <evg-icon icon="arrow-left" /> Back
      </a>
    </Menubar.Back>
    <Menubar.Tabs>
      <Menubar.Tab active>
        <a href="#">Collection</a>
      </Menubar.Tab>
      <Menubar.Tab>
        <a href="#">Disposal</a>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);

export const Transparent: StoryFn = () => (
  <evg-box class="evg-theme-sand">
    <Menubar transparent>
      <Menubar.Tabs>
        <Menubar.Tab completed>
          <a href="#">Waste</a>
        </Menubar.Tab>
        <Menubar.Tab active>
          <a href="#">Containers</a>
        </Menubar.Tab>
        <Menubar.Tab>
          <a href="#">Cost</a>
        </Menubar.Tab>
        <Menubar.Tab disabled>
          <span>Results</span>
        </Menubar.Tab>
      </Menubar.Tabs>
    </Menubar>
  </evg-box>
);
