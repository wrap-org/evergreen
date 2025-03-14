import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Content/Stat',
} satisfies Meta;

export const Stat: StoryFn = (args) => <evg-stat {...args}></evg-stat>;
