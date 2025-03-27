import { Meta } from '@storybook/react';
import React from 'react';

import './Row';

const description = `
Display items next to each other in a row with a small gap.
`;

export default {
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

export const Default = () => (
  <evg-row>
    <span>Author Name</span>
    <span>Category</span>
  </evg-row>
);
