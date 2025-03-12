import { Meta } from '@storybook/react';
import React from 'react';

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
} satisfies Meta;

export const App = (args) => (
  <evg-app {...args}>
    <evg-section padding="lg" slot="header" class="evg-theme-forest">
      <evg-wrap gutter="md">
        <header>
          <docs-placeholder>Header</docs-placeholder>
        </header>
      </evg-wrap>
    </evg-section>
    <evg-section padding="xl" class="evg-theme-default">
      <evg-wrap gutter="md">
        <main>
          <docs-placeholder>Main</docs-placeholder>
        </main>
      </evg-wrap>
    </evg-section>
    <evg-section padding="lg" class="evg-theme-forest" slot="footer">
      <evg-wrap gutter="md">
        <footer>
          <docs-placeholder>Footer</docs-placeholder>
        </footer>
      </evg-wrap>
    </evg-section>
  </evg-app>
);
