import { StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

const description = `
Menu Items support icons, keyboard navigation, various states (active, disabled, selected), and can include
additional elements like descriptions, shortcuts, or nested submenus.
`;

export default {
  component: 'evg-menu-item',
  parameters: {
    docs: {
      subtitle:
        'An interactive option within dropdown menus supporting icons, states, and nested submenus.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=5604-5934&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
      theming: true,
    },
  },
};

export const MenuItem: StoryFn = (props) => (
  <evg-menu-item {...props}>
    <button type="button">Menu item title</button>
  </evg-menu-item>
);

export const AnchorMenuItem: StoryFn = (props) => (
  <evg-menu-item {...props}>
    <a href="https://wrap.ngo">Menu item title</a>
  </evg-menu-item>
);

export const WithIcons: StoryFn = (props) => (
  <>
    <evg-menu-item {...props}>
      <button type="button">
        <evg-icon icon="document-check" />
        <evg-menu-item-content>Menu item title</evg-menu-item-content>
      </button>
    </evg-menu-item>
    <evg-menu-item {...props}>
      <button type="button">
        <evg-menu-item-content>Menu item title</evg-menu-item-content>
        <evg-icon icon="arrow-right" />
      </button>
    </evg-menu-item>
    <evg-menu-item {...props}>
      <button type="button">
        <evg-icon icon="document-check" />
        <evg-menu-item-content>Menu item title</evg-menu-item-content>
        <evg-icon icon="arrow-right" />
      </button>
    </evg-menu-item>
  </>
);

export const WithDescriptionAndBadges: StoryFn = (props) => (
  <>
    <evg-menu-item {...props}>
      <button type="button">
        <evg-icon icon="document-check" />
        <evg-menu-item-content>
          Menu item title
          <p>Menu item description</p>
        </evg-menu-item-content>
        <evg-icon icon="arrow-right" />
      </button>
    </evg-menu-item>
    <evg-menu-item {...props}>
      <button type="button">
        <evg-icon icon="document-check" />
        <evg-menu-item-content>
          Menu item title
          <evg-row>
            <evg-badge variant="sky-light">Portal</evg-badge>
            <evg-badge variant="lime-light">Locator</evg-badge>
            <evg-badge variant="forest-light">API</evg-badge>
          </evg-row>
        </evg-menu-item-content>
        <evg-icon icon="arrow-right" />
      </button>
    </evg-menu-item>
    <evg-menu-item {...props}>
      <button type="button">
        <evg-icon icon="document-check" />
        <evg-menu-item-content>
          Menu item title
          <p>Menu item description</p>
          <evg-row>
            <evg-badge variant="sky-light">Portal</evg-badge>
            <evg-badge variant="lime-light">Locator</evg-badge>
            <evg-badge variant="forest-light">API</evg-badge>
          </evg-row>
        </evg-menu-item-content>
        <evg-icon icon="arrow-right" />
      </button>
    </evg-menu-item>
  </>
);

export const Theming: StoryFn = (props) => (
  <>
    {themes.map((theme) => (
      <evg-section padding="fluid" class={`evg-theme-${theme}`} key={theme}>
        <evg-wrapper size="lg">
          <evg-menu-item {...props}>
            <button type="button">
              <evg-icon icon="document-check" />
              <evg-menu-item-content>
                Menu item title
                <p>Menu item description</p>
                <evg-row>
                  <evg-badge variant="sky-light">Portal</evg-badge>
                  <evg-badge variant="lime-light">Locator</evg-badge>
                  <evg-badge variant="forest-light">API</evg-badge>
                </evg-row>
              </evg-menu-item-content>
              <evg-icon icon="arrow-right" />
            </button>
          </evg-menu-item>
        </evg-wrapper>
      </evg-section>
    ))}
  </>
);

Theming.parameters = {
  layout: 'fullscreen',
};
