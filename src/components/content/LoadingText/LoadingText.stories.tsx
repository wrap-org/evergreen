import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import LoadingText from './LoadingText';

import Spacing from 'components/composition/Spacing/Spacing';

export default {
  title: 'Content/Loading Text',
  component: LoadingText,
} as Meta;

export const Default = () => (
  <>
    <LoadingText chars={350} />
    <Spacing bottom="md" />
    <LoadingText chars={50} as="h2" />
    <Spacing bottom="md" />
    <LoadingText chars={20} as="p" />
  </>
);

Default.storyName = 'Loading Text';
