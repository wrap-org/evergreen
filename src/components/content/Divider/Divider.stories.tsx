import { Meta, StoryFn } from '@storybook/react-vite';
import React from 'react';

const description = `
Divider component can be configured with different styles (solid, dashed, dotted), thicknesses, colours,
and orientations (horizontal or vertical) to establish visual hierarchy and improve content scanability.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'A visual separator creating clear boundaries between content sections.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6273-832&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

export const Divider: StoryFn = (args) => <evg-divider {...args} />;
