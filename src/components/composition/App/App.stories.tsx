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
      <evg-wrapper gutter="md">
        <header>
          <docs-placeholder>Header</docs-placeholder>
        </header>
      </evg-wrapper>
    </evg-section>
    <evg-section padding="xl" class="evg-theme-default">
      <evg-wrapper gutter="md">
        <main>
          <docs-placeholder>Main</docs-placeholder>
        </main>
      </evg-wrapper>
    </evg-section>
    <evg-section padding="lg" class="evg-theme-forest" slot="footer">
      <evg-wrapper gutter="md">
        <footer>
          <docs-placeholder>Footer</docs-placeholder>
        </footer>
      </evg-wrapper>
    </evg-section>
  </evg-app>
);
