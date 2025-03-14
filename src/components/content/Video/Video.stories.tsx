import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Content/Video',
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
