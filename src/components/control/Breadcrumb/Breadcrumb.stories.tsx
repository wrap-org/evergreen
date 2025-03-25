import { StoryFn } from '@storybook/react';
import React from 'react';

import './Breadcrumb';

export default {
  component: 'evg-breadcrumb',
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
