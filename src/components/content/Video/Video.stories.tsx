import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

const description = `
An embeddable player component providing consistent playback functionality with accessibility features.
Video supports various sources (internal or external) and responsive sizing.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'An embeddable player component providing consistent playback functionality.',
      description: {
        component: description,
      },
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6238-3731&t=g3niGv3HxLa5NL0O-0',
    },
  },
} satisfies Meta;

export const Video: StoryFn = (args) => (
  <evg-video {...args}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cTD-X0lhMWY?si=XrIxoMQQDj0nV34K"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </evg-video>
);
