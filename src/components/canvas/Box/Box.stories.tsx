import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';
import { radius } from '@/lib/tokens';

const description = `
A box is a rectangle on a page to group related content together visually.
`;

export default {
  parameters: {
    docs: {
      description: {
        component: description,
      },
      theming: true,
    },
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: themes,
    },
    padding: {
      control: {
        type: 'select',
      },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'fluid-sm',
        'fluid',
        'fluid-lg',
        'none',
      ],
    },
    border: {
      control: {
        type: 'boolean',
      },
    },
    radius: {
      control: {
        type: 'select',
      },
      options: radius,
    },
  },
} satisfies Meta;

export const Box: StoryFn = ({ theme, ...props }) => (
  <evg-box class={`evg-theme-${theme}`} {...props}>
    <docs-placeholder>Box content</docs-placeholder>
  </evg-box>
);

Box.args = {
  padding: 'md',
  theme: 'earth-light',
};

export const Theming: StoryFn = () => (
  <evg-grid wrap="wrap" gap="none">
    {themes.map((theme) => (
      <evg-grid-item key={theme} small-mobile="12" large-mobile="6">
        <evg-box padding="md" class={`evg-theme-${theme}`}>
          <docs-placeholder>Box content</docs-placeholder>
        </evg-box>
      </evg-grid-item>
    ))}
  </evg-grid>
);

export const BoxSection: StoryFn = ({ theme, ...props }) => (
  <evg-box class={`evg-theme-${theme}`} {...props}>
    <evg-box-section padding="md">
      <docs-placeholder>Box section content</docs-placeholder>
    </evg-box-section>
    <evg-box-section padding="md">
      <docs-placeholder>Box section content</docs-placeholder>
    </evg-box-section>
    <evg-box-section padding="md">
      <docs-placeholder>Box section content</docs-placeholder>
    </evg-box-section>
  </evg-box>
);

BoxSection.args = {
  theme: 'default',
  border: true,
  radius: 'md',
};

BoxSection.parameters = {
  docs: {
    description: {
      story:
        'Box are made up of sections, which enable consistent division and spacing between groups of content',
    },
  },
};
