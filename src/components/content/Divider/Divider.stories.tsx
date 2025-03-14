import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Content/Divider',
} satisfies Meta;

export const Divider: StoryFn = (args) => <evg-divider {...args} />;
