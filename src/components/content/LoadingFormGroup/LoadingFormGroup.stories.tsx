import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import LoadingFormGroup from './LoadingFormGroup';

export default {
  title: 'Content/Loading Form Group',
  component: LoadingFormGroup,
} as Meta;

export const Default = () => <LoadingFormGroup />;

Default.storyName = 'Loading Form Group';

export const Horizontal = () => <LoadingFormGroup horizontal />;
