import { StoryFn } from '@storybook/react';
import React from 'react';

import './Breadcrumb';

export default {
  component: 'evg-breadcrumb',
  parameters: {
    docs: {
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
