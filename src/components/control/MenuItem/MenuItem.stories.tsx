import { StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

export default {
  component: 'evg-menu-item',
  parameters: {
    docs: {
      description: {
        component:
          'Provides styles for default HTML button elements that can be enhanced by wrapping them in a `evg-menu-item` component.',
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
          <evg-meta>
            <evg-badge type="info">Portal</evg-badge>
            <evg-badge type="positive">Locator</evg-badge>
            <evg-badge type="light">API</evg-badge>
          </evg-meta>
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
          <evg-meta>
            <evg-badge type="info">Portal</evg-badge>
            <evg-badge type="positive">Locator</evg-badge>
            <evg-badge type="light">API</evg-badge>
          </evg-meta>
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
                <evg-meta>
                  <evg-badge type="info">Portal</evg-badge>
                  <evg-badge type="positive">Locator</evg-badge>
                  <evg-badge type="light">API</evg-badge>
                </evg-meta>
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
