import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Canvas/MenuBar',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
      },
      options: ['default', 'forest'],
    },
    raised: {
      control: {
        type: 'boolean',
      },
    },
    compact: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta;

const Template: StoryFn = ({ theme, ...args }) => (
  <evg-menu-bar class={`evg-theme-${theme}`} {...args}>
    <a href="https://wrap.ngo">
      <img
        src={
          theme === 'forest'
            ? '/images/logo/white.svg'
            : '/images/logo/forest.svg'
        }
        alt="WRAP logo"
        width="166"
        height="48"
        loading="eager"
      />
    </a>
    <nav aria-label="Main navigation">
      <evg-menu-item>
        <a href="https://wrap.ngo">
          <evg-menu-item-content>What we do</evg-menu-item-content>
          <evg-icon icon="chevron-down" />
        </a>
      </evg-menu-item>
      <evg-menu-item>
        <a href="https://wrap.ngo">
          <evg-menu-item-content>Take action</evg-menu-item-content>
          <evg-icon icon="chevron-down" />
        </a>
      </evg-menu-item>
      <evg-menu-item>
        <a href="https://wrap.ngo">
          <evg-menu-item-content>Resources</evg-menu-item-content>
          <evg-icon icon="chevron-down" />
        </a>
      </evg-menu-item>
      <evg-menu-item>
        <a href="https://wrap.ngo">
          <evg-menu-item-content>About</evg-menu-item-content>
          <evg-icon icon="chevron-down" />
        </a>
      </evg-menu-item>
      <evg-menu-item>
        <a href="https://wrap.ngo">
          <evg-menu-item-content>Latest</evg-menu-item-content>
        </a>
      </evg-menu-item>
    </nav>
    <nav aria-label="Secondary navigation">
      <evg-button>
        <button type="button">
          Regions
          <evg-icon icon="chevron-down" />
        </button>
      </evg-button>
      <evg-button>
        <button type="button">
          Log in / Sign up
          <evg-icon icon="user" />
        </button>
      </evg-button>
      <evg-button width="square">
        <button type="button" aria-label="Search">
          <evg-icon icon="search" />
        </button>
      </evg-button>
    </nav>
  </evg-menu-bar>
);

export const MenuBar = Template.bind({});

MenuBar.args = {
  theme: 'default',
  compact: false,
  raised: false,
};
