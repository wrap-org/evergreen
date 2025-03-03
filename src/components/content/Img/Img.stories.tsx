import { StoryFn } from '@storybook/react';
import React from 'react';

import './Img';

const description = `
The image component wraps an img tag to provide some common image controls,
such as making it responsive or fitting a specific aspect ratio.
`;

export default {
  component: 'evg-img',
  argTypes: {
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
  radius: false,
  'aspect-ratio': 'auto',
  'object-fit': 'fill',
  'object-position': '50% 50%',
};
