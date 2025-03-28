import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingButton';

const description = `
Loading Skeleton provides a low-fidelity representation of the interface while actual
content is being fetched. These animated placeholders maintain layout stability and
communicate progress to users, reducing perceived loading times and improving the
overall experience.
`;

export default {
  title: 'Components/Content/Loading Button',
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

export const LoadingButton = () => (
  <evg-button width="full-width">
    <evg-loading-button>Button text</evg-loading-button>
  </evg-button>
);
