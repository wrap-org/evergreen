import { StoryFn } from '@storybook/react';
import React from 'react';

import './Enter';

export default {
  component: 'evg-enter',
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['fade', 'fade-in-down', 'fade-in-up', 'boing'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The enter component can be wrapped around content to animate it into view.`,
      },
    },
  },
};

export const Enter: StoryFn = (args) => (
  <evg-enter {...args}>
    <evg-box padding="md" class={`evg-theme-earth-light`}>
      <docs-placeholder>Box content</docs-placeholder>
    </evg-box>
  </evg-enter>
);

Enter.args = {
  type: 'fade',
  enter: true,
  delay: '0.5',
  fill: false,
  enterOnScroll: false,
};

export const EnterTypes: StoryFn = (args) => (
  <evg-grid>
    <evg-grid-item>
      <evg-enter {...args} type="fade">
        <evg-box padding="md" class={`evg-theme-earth-light`}>
          <docs-placeholder>Fade in</docs-placeholder>
        </evg-box>
      </evg-enter>
    </evg-grid-item>
    <evg-grid-item>
      <evg-enter {...args} type="fade-in-up">
        <evg-box padding="md" class={`evg-theme-earth-light`}>
          <docs-placeholder>Fade in up</docs-placeholder>
        </evg-box>
      </evg-enter>
    </evg-grid-item>
    <evg-grid-item>
      <evg-enter {...args} type="fade-in-down">
        <evg-box padding="md" class={`evg-theme-earth-light`}>
          <docs-placeholder>Fade in down</docs-placeholder>
        </evg-box>
      </evg-enter>
    </evg-grid-item>
    <evg-grid-item>
      <evg-enter {...args} type="boing">
        <evg-box padding="md" class={`evg-theme-earth-light`}>
          <docs-placeholder>Boing</docs-placeholder>
        </evg-box>
      </evg-enter>
    </evg-grid-item>
  </evg-grid>
);

EnterTypes.args = {
  enter: true,
  'enter-on-scroll': true,
};

export const OnScroll: StoryFn = (args) => (
  <>
    <div style={{ height: '120vh' }}>Scroll down</div>
    <evg-enter {...args}>
      <evg-box padding="md" class={`evg-theme-earth-light`}>
        <docs-placeholder>Box content</docs-placeholder>
      </evg-box>
    </evg-enter>
  </>
);

OnScroll.args = {
  type: 'boing',
  enter: true,
  'enter-on-scroll': true,
};
