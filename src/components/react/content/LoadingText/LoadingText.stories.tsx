import { Meta } from '@storybook/react';
import React from 'react';

import LoadingText from './LoadingText';

export default {
  title: 'React/Components/Content/Loading Text',
  component: LoadingText,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'empty-heading',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = () => (
  <>
    <LoadingText chars={350} />
    <div className="m-spacing-bottom-md" />
    <LoadingText chars={50} as="h2" />
    <div className="m-spacing-bottom-md" />
    <LoadingText chars={20} as="p" />
  </>
);

Default.storyName = 'Loading Text';
