import { StoryFn } from '@storybook/react-vite';
import React from 'react';

import { radius } from '@/lib/tokens';

import './Img';

const description = `
An enhanced image component handling responsive behaviour, loading states, and fallbacks.
Img supports various aspect ratios, object-fit properties, lazy loading, and placeholder
options to optimise performance and user experience.
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
      subtitle:
        'An enhanced image component handling responsive behaviour and loading states.',
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
