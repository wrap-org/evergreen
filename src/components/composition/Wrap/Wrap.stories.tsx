import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Breakpoints } from '../../../types/breakpoints.type';
import { Spacing } from '../../../types/spacing.type';

const sizes: (Breakpoints | 'auto')[] = [
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'tablet',
  'desktop',
  'max',
  'auto',
];

const gutters: (Spacing | 'none')[] = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'fluid',
  'fluid-lg',
];

export default {
  title: 'Components/Composition/Wrap',
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
      description: 'The max width of the wrap.',
    },
    gutter: {
      control: {
        type: 'select',
      },
      options: gutters,
      description: 'The padding around the content.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A wrapper component that centers content and sets a max-width. It also sets inline padding to create gutters.',
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <evg-wrap {...args}>
    <docs-placeholder>Wrap content</docs-placeholder>
  </evg-wrap>
);

export const Wrap = Template.bind({});

Wrap.args = {
  size: 'md',
  gutter: 'md',
};

export const Sizes = () => {
  return (
    <>
      {sizes.map((size) => (
        <evg-wrap size={size} class="m-spacing-bottom-md" key={size}>
          <docs-placeholder>{size}</docs-placeholder>
        </evg-wrap>
      ))}
    </>
  );
};
