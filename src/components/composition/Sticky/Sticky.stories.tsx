import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import './Sticky';

const description = `
Sticky offers configuration for offset positions, containing elements, and z-index management to maintain
important UI elements within view regardless of scroll position.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'A sticky component is used to keep an element fixed at the top of the viewport when scrolling.',
      figma:
        'https://figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7242&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    largeScreenOnly: {
      control: {
        type: 'boolean',
      },
    },
    top: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta;

export const Default: StoryFn = ({ ...args }) => (
  <>
    <evg-sticky {...args}>
      <evg-box class="evg-theme-earth-light" padding="md">
        <evg-box-section>
          <h2>Sticky Box</h2>
        </evg-box-section>
      </evg-box>
    </evg-sticky>
    <div style={{ height: '120vh' }}>Scroll down</div>
  </>
);

Default.args = {
  largeScreenOnly: false,
  top: '20',
};

Default.parameters = {
  docs: {
    story: {
      iframeHeight: 300,
      inline: false,
    },
  },
};
