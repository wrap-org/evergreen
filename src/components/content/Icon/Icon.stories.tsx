import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from './Icon';

export default {
  title: 'Content/Icon',
  component: Icon,
} as Meta;

export const Default = () => (
  <>
    <Icon icon="circle-information" /> Icons from <a href="https://icons.mono.company/" target="_blank" rel="noopener noreferrer">Mono icons</a>
  </>
);
