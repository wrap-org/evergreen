import { StoryFn } from '@storybook/react-vite';
import React from 'react';

import './Breadcrumb';

const description = `
A navigation aid showing the user's location within the application hierarchy. Breadcrumbs display the
path from the home page to the current page with clear separators, providing context and allowing quick
navigation to parent sections while maintaining a compact footprint.
`;

export default {
  component: 'evg-breadcrumb',
  parameters: {
    docs: {
      subtitle:
        "A navigation aid showing the user's location within the application.",
      description: {
        component: description,
      },
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7983&t=g3niGv3HxLa5NL0O-0',
    },
  },
};

export const Breadcrumb: StoryFn = (props) => (
  <evg-breadcrumb {...props}>
    <nav aria-label="Breadcrumb">
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/landing-page">Landing page</a>
        </li>
        <li>
          <a href="/landing-page/sub-page">Sub page</a>
        </li>
        <li>
          <a href="/landing-page/sub-page/full-details" aria-current="page">
            Full details
          </a>
        </li>
      </ol>
    </nav>
  </evg-breadcrumb>
);
