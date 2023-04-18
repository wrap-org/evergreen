import { Meta } from '@storybook/react/types-6-0';
import map from 'lodash/map';
import React from 'react';

import Spacing from '../components/composition/Spacing/Spacing';
import Text from '../components/content/Text/Text';
import { Sizes } from '../types/font.type';

import fonts from './typography.module.scss';

export default {
  title: 'Tokens/Typography',
} as Meta;

export const Typography = () => (
  <>
    {map(fonts, (size, key) => (
      <Spacing bottom="md" key={key}>
        <span>{key}</span>
        <Text size={key as Sizes} as="div">
          The future is in our hands to shape.
        </Text>
      </Spacing>
    ))}
  </>
);
