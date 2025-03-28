import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingText';

const description = `
Loading Skeleton provides a low-fidelity representation of the interface while actual
content is being fetched. These animated placeholders maintain layout stability and
communicate progress to users, reducing perceived loading times and improving the
overall experience.
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
  <>
    <h1 className="evg-spacing-bottom-sm">
      <evg-loading-text ariaHidden={false}>Loading title</evg-loading-text>
    </h1>
    <p>
      <evg-loading-text>Loading text</evg-loading-text>
    </p>
  </>
);
