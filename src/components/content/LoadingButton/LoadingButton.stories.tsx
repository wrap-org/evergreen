import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingButton';

export default {
  title: 'Components/Content/Loading Button',
  parameters: {
    docs: {
      description: {
        component:
          'Used as a loading placeholder before the content is available.',
      },
    },
  },
} satisfies Meta;

export const LoadingButton = () => (
  <evg-button width="full-width">
    <evg-loading-button>Button text</evg-loading-button>
  </evg-button>
);
