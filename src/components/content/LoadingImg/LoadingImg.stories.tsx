import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingImg';

const description = `
Loading Skeleton provides a low-fidelity representation of the interface while actual
content is being fetched. These animated placeholders maintain layout stability and
communicate progress to users, reducing perceived loading times and improving the
overall experience.

Consider using an [aria-live region](https://www.a11y-collective.com/blog/aria-live/) with \`aria-busy\`
to inform assistive technologies about the loading (and subsequent loaded) state.
`;

export default {
  title: 'Components/Content/Loading Image',
  parameters: {
    docs: {
      subtitle:
        'A visual placeholder displaying the structure of content during loading states.',
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

export const LoadingImg = ({ width = '400', height = '300' }) => (
  <evg-img>
    <evg-loading-img width={width} height={height}></evg-loading-img>
  </evg-img>
);

LoadingImg.args = {
  width: '400',
  height: '300',
};
