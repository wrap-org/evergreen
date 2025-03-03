import { Meta } from '@storybook/react';
import React from 'react';

import './Meta';

const description = `
A meta component for displaying metadata in a consistent layout.
Commonly used for showing dates, authors, categories, and other metadata.
`;

export default {
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const Default = () => (
  <evg-meta>
    <span>Author Name</span>
    <span>Category</span>
  </evg-meta>
);
