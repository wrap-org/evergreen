import { Meta } from '@storybook/react';
import React from 'react';

import Eyebrow from './Eyebrow';

export default {
  title: 'React/Components/Content/Eyebrow',
  component: Eyebrow,
} satisfies Meta;

export const Default = () => (
  <>
    <Eyebrow>Eyebrow text</Eyebrow>
    <h1>Page title</h1>
    <p>
      Aliquam egestas mi quam, a tincidunt lectus faucibus euismod. Pellentesque
      et metus nunc.
    </p>
  </>
);

Default.storyName = 'Eyebrow';
