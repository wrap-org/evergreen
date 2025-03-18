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
  },
} satisfies Meta;

export const LoadingText = () => (
  <>
    <h1>
      <evg-loading-text>Loading title</evg-loading-text>
    </h1>
    <p>
      <evg-loading-text>Loading text</evg-loading-text>
    </p>
  </>
);
