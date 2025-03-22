import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

const sizes = ['sm', 'md', 'lg', 'xl'] as const;

export default {
  title: 'Components/Content/Thumbnail',
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
  },
} satisfies Meta;

export const Thumbnail: StoryFn = (args) => (
  <evg-thumbnail {...args}>
    <img
      src="/images/placeholder/400x400.svg"
      alt="Thumbnail"
      width="400"
      height="400"
    />
  </evg-thumbnail>
);

export const WithIcon: StoryFn = (args) => (
  <evg-thumbnail {...args}>
    <evg-icon icon="document-download" />
  </evg-thumbnail>
);

export const Sizes: StoryFn = () => (
  <>
    <evg-grid class="evg-spacing-bottom-lg">
      {sizes.map((size) => (
        <evg-grid-item key={size}>
          <evg-thumbnail size={size}>
            <img
              src="/images/placeholder/400x400.svg"
              alt="Thumbnail"
              width="400"
              height="400"
            />
          </evg-thumbnail>
        </evg-grid-item>
      ))}
    </evg-grid>
    <evg-grid class="evg-spacing-bottom-lg">
      {sizes.map((size) => (
        <evg-grid-item key={size}>
          <evg-thumbnail size={size}>
            <evg-icon icon="document-download" />
          </evg-thumbnail>
        </evg-grid-item>
      ))}
    </evg-grid>
  </>
);
