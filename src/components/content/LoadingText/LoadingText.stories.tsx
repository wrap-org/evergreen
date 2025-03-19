import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingText';

export default {
  title: 'Components/Content/Loading Text',
  parameters: {
    docs: {
      description: {
        component:
          'Used as a loading placeholder before the content is available.',
      },
    },
    a11y: {
      config: {
        // Getting a false positive: h1 element correctly has no findable text content
        rules: [{ id: 'empty-heading', enabled: false }],
      },
    },
  },
} satisfies Meta;

export const LoadingText = () => (
  <>
    <h1 className="evg-spacing-bottom-sm">
      <evg-loading-text>Loading title</evg-loading-text>
    </h1>
    <p>
      <evg-loading-text>Loading text</evg-loading-text>
    </p>
  </>
);
