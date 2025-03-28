import { Meta } from '@storybook/react';
import React from 'react';

import './Row';

const description = `
A specialised component displaying content-related metadata like dates, authors, and tags.
Meta provides consistent styling and layout options for these supporting details in articles
and content-heavy interfaces.
`;

export default {
  parameters: {
    docs: {
      subtitle: 'A specialised component displaying content-related metadata.',
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
    <evg-badge variant="earth">Case study</evg-badge>
    <span className="evg-text-size-body-sm">January 2025</span>
  </evg-row>
);
