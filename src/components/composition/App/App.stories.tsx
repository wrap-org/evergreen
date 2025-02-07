import { Meta } from '@storybook/react';
import React from 'react';

import './App';

export default {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Wraps the whole site and provides slots for header, footer, and main content.',
      },
    },
  },
  argTypes: {
    header: {
      control: {
        type: 'radio',
      },
      options: ['', 'sticky'],
    },
  },
} as Meta;

export const App = (args) => (
  <evg-app {...args}>
    <evg-section padding="lg" slot="header" class="evg-theme-dark">
      <evg-wrap gutter="md">
        <header>Header</header>
      </evg-wrap>
    </evg-section>
    <evg-section padding="xl" class="evg-theme-light">
      <evg-wrap gutter="md">
        <main>Main</main>
      </evg-wrap>
    </evg-section>
    <evg-section padding="lg" class="evg-theme-dark" slot="footer">
      <evg-wrap gutter="md">
        <footer>Footer</footer>
      </evg-wrap>
    </evg-section>
  </evg-app>
);
