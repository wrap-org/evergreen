import { Meta } from '@storybook/react';
import React from 'react';

const description = `
All pages start with an app wrapper. The app component wraps the whole site and provides
slots for the header, footer and main content.

The app wrapper's role is to keep the header at the top and the footer at the bottom,
even when the content is too short to keep it there.

The header component needs to be passed to the header slot with \`slot="header"\` and the footer
component needs to be passed to the footer slot with \`slot="footer"\`. All other HTML passed into
this component will go into the main content slot.

There is an option to make the header area sticky so it stays fixed to the top of the users screen.
This is a great option in an 'app like' context using the compact header.
`;

export default {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: description,
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
  <>
    <evg-skip-link>
      <a href="#main">Skip to main content</a>
    </evg-skip-link>
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
          <main id="main" tabIndex={-1}>
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
  </>
);
