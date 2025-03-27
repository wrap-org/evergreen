import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Content/Divider',
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6273-832&t=g3niGv3HxLa5NL0O-0',
    },
  },
} satisfies Meta;

export const Divider: StoryFn = (args) => <evg-divider {...args} />;
