import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingImg';

export default {
  title: 'Components/Content/Loading Image',
  parameters: {
    docs: {
      description: {
        component:
          'Used as a loading placeholder before the content is available.',
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
