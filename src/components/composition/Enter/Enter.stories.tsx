import { StoryFn, Meta } from '@storybook/react-vite';
import React from 'react';

import './Enter';

const description = `
A component providing entrance animations when elements appear in the interface. Enter
offers various animation options, including fade, slide, and scale effects with customisable
timing and easing to create polished transitions when content is added to the view.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'A component providing entrance animations when elements appear.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7201&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['fade', 'fade-in-down', 'fade-in-up', 'boing'],
    },
    delay: {
      control: {
        type: 'text',
      },
    },
    enterOnScroll: {
      control: {
        type: 'boolean',
      },
    },
    fill: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta;

export const Enter: StoryFn = (args) => (
  <evg-enter {...args}>
    <evg-box padding="md" class={`evg-theme-earth-light`}>
      <docs-placeholder>Box content</docs-placeholder>
    </evg-box>
  </evg-enter>
);

Enter.args = {
  type: 'fade',
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
  'enter-on-scroll': true,
};
