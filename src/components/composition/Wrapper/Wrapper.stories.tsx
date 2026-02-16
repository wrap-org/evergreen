import { Meta, StoryFn } from '@storybook/react-vite';
import React from 'react';

import { Sizes } from '@/types/size.type';
import { Spacing } from '@/types/tokens.type';

const sizes: (Sizes | 'auto')[] = [
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'xxxl',
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

const description = `
A container providing consistent maximum width and inline (horizontal) padding for properly constrained content.
Wrapper helps maintain readable line lengths and consistent margins across different screen sizes.

Wrappers are almost always used inside a [section component](?path=/docs/components-canvas-section--docs)
and each section will have one or more wrappers inside it to set the content widths.
`;

export default {
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
      description: 'The max width of the wrapper.',
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
      subtitle:
        'A container providing consistent maximum width and horizontal padding.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-6734&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

const Template: StoryFn = (args) => (
  <evg-wrapper {...args}>
    <docs-placeholder>Wrap content</docs-placeholder>
  </evg-wrapper>
);

export const Wrapper = Template.bind({});

Wrapper.args = {
  size: 'md',
  gutter: 'md',
};

export const SizesStory = () => {
  return (
    <>
      {sizes.map((size) => (
        <evg-wrapper size={size} class="evg-spacing-bottom-md" key={size}>
          <docs-placeholder>{size}</docs-placeholder>
        </evg-wrapper>
      ))}
    </>
  );
};

SizesStory.storyName = 'Sizes';
