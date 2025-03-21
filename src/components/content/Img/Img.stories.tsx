import { StoryFn } from '@storybook/react';
import React from 'react';

import { radius } from '@/lib/tokens';

import './Img';

const description = `
The image component wraps an img tag to provide some common image controls,
such as making it responsive or fitting a specific aspect ratio.
`;

export default {
  component: 'evg-img',
  argTypes: {
    radius: {
      control: {
        type: 'select',
      },
      options: radius,
    },
    'object-fit': {
      control: {
        type: 'radio',
      },
      options: ['fill', 'cover', 'contain'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const Img: StoryFn = (props) => (
  <evg-img {...props}>
    <img
      src="/images/placeholder/400x300.svg"
      alt="Placeholder"
      width="300"
      height="300"
    />
  </evg-img>
);

Img.args = {
  block: false,
  responsive: false,
  'aspect-ratio': 'auto',
  'object-fit': 'fill',
  'object-position': '50% 50%',
};

export const Icon: StoryFn = (props) => (
  <evg-grid>
    <evg-grid-item>
      <evg-img padding="sm" {...props}>
        <evg-icon icon="document" class="evg-text-size-body-lg" />
      </evg-img>
    </evg-grid-item>
    <evg-grid-item>
      <evg-img padding="sm" {...props}>
        <evg-icon icon="document" class="evg-text-size-heading-md" />
      </evg-img>
    </evg-grid-item>
    <evg-grid-item>
      <evg-img padding="md" {...props}>
        <evg-icon icon="document" class="evg-text-size-heading-lg" />
      </evg-img>
    </evg-grid-item>
    <evg-grid-item>
      <evg-img padding="md" {...props}>
        <evg-icon icon="document" class="evg-text-size-display-sm" />
      </evg-img>
    </evg-grid-item>
  </evg-grid>
);

Icon.args = {
  'aspect-ratio': '1 / 1',
  radius: 'sm',
};

Icon.parameters = {
  docs: {
    description: {
      story: 'Img can also be used with an icon for thumbnails.',
    },
  },
};
