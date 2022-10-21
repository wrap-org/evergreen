import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TextAlign from './TextAlign';

export default {
  title: 'Composition/Text align',
  component: TextAlign,
} as Meta;

export function Default() {
  return (
    <>
      <TextAlign align="left">
        Align some text
      </TextAlign>
      <TextAlign align="center">
        Align some text
      </TextAlign>
      <TextAlign align="right">
        Align some text
      </TextAlign>
    </>
  );
}

Default.storyName = 'Text align';
