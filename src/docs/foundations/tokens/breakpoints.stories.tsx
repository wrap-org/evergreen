import { Meta } from '@storybook/react';
import map from 'lodash/map';
import React from 'react';

import breakpoints from './breakpoints.module.scss';

export default {
  title: 'Foundations/Tokens/Breakpoints',
} as Meta;

export const Breakpoints = () => (
  <>
    {map(breakpoints, (width, key) => (
      <div
        key={key}
        style={{
          minHeight: '1rem',
          background: 'rgba(0, 0 ,0 , 0.05)',
          width,
          padding: '.5rem',
        }}
        className="m-spacing-bottom-md"
      >
        {key}
      </div>
    ))}
  </>
);
