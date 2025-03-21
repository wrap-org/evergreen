import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import './Sticky';

export default {
  parameters: {
    docs: {
      description: {
        component:
          'A sticky component is used to keep an element fixed at the top of the viewport when scrolling.',
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
