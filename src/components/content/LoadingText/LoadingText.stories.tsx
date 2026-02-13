import { Meta } from '@storybook/react-vite';
import React from 'react';

import './LoadingText';

const description = `
Loading Skeleton provides a low-fidelity representation of the interface while actual
content is being fetched. These animated placeholders maintain layout stability and
communicate progress to users, reducing perceived loading times and improving the
overall experience.

Semantic elements that contain \`evg-loading-text\` should be marked as \`aria-hidden\` to
prevent screen readers announcing them as empty text elements.

Consider using an [aria-live region](https://www.a11y-collective.com/blog/aria-live/) with \`aria-busy\`
to inform assistive technologies about the loading (and subsequent loaded) state.
`;

export default {
  title: 'Components/Content/Loading Text',
  parameters: {
    docs: {
      subtitle:
        'A visual placeholder displaying the structure of content during loading states.',
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

export const LoadingText = () => (
  <div aria-hidden>
    <h1 className="evg-spacing-bottom-sm">
      <evg-loading-text>Loading title</evg-loading-text>
    </h1>
    <p>
      <evg-loading-text>Loading text</evg-loading-text>
    </p>
  </div>
);
