import { a11yLink } from '@etchteam/storybook-addon-a11y-interaction-tests';
import { StoryFn } from '@storybook/react-vite';
import React from 'react';

const description = `
The very first element on a page is the skip to content link . This provides a way
for keyboard users to skip the main navigation and get straight to the content.

The skiplink remains visually hidden until activated by keyboard focus, then appears prominently
to provide quick access to the main content. It helps users who navigate via keyboard to avoid
tabbing through lengthy header elements, improving site usability and meeting accessibility standards.

The href should point at the \`main\` element and the element will need tabindex="-1" to make
it programmatically focusable. If a user presses the link, the focus will move to the main content
and it will be announced to the screen reader.
`;

export default {
  component: 'evg-skip-link',
  parameters: {
    docs: {
      subtitle:
        'An accessibility-focused navigation element that allows keyboard users to bypass repetitive navigation menus.',
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

SkipLink.play = async ({ canvasElement, step }) => {
  await a11yLink({ canvasElement, step });
};
