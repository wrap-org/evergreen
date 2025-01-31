import { Meta } from '@storybook/react';
import React from 'react';

import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'React/Components/Content/Loading Spinner',
  component: LoadingSpinner,
} as Meta;

export const Default = () => <LoadingSpinner />;

Default.storyName = 'Loading Spinner';
