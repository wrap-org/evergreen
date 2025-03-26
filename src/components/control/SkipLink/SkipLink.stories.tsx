import { StoryFn } from '@storybook/react';
import React from 'react';

const description = `
The very first element on a page is the skip to content link . This provides a way
for keyboard users to skip the main navigation and get straight to the content.

The skip link is hidden until it is focused by tabbing with the keyboard.

The href should point at the \`main\` element and the element will need tabindex="-1" to make
it programmatically focusable. If a user presses the link, the focus will move to the main content
and it will be announced to the screen reader.
`;

export default {
  component: 'evg-skip-link',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const SkipLink: StoryFn = (props) => (
  <>
    <evg-skip-link {...props}>
      <a href="#main">Skip to main content</a>
    </evg-skip-link>
    <main id="main" tabIndex={-1}>
      <h1>Main content</h1>
    </main>
  </>
);
