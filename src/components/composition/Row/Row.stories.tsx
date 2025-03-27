import { Meta } from '@storybook/react';
import React from 'react';

import './Row';

const description = `
Display items next to each other in a row with a small gap.
`;

export default {
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7230&t=g3niGv3HxLa5NL0O-0',
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
