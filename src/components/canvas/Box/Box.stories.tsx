import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';
import { radius } from '@/lib/tokens';

const description = `
A box is a rectangle on a page to group related content together visually.

A box can seem similar to a [section](?path=/docs/components-canvas-section--docs) or a
[card](?path=/docs/components-canvas-card--docs), but there are some important differences.

A section is used to create a horizontal slice of a whole page, whilst a box is used to group
content within a section. Boxes can also be divided into sections, which is useful for creating
segmented, related, content.

A card is a much more opinionated component, with a specific layout and style, and always has
an action that can be performed on it by clicking. Boxes are more flexible and can be used in
many different ways.
`;

export default {
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=5176-4903&t=g3niGv3HxLa5NL0O-0',
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
        'Boxes are made up of sections, which enable consistent division and spacing between groups of content',
    },
  },
};
