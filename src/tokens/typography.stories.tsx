import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import map from 'lodash/map';
import { Sizes } from 'src/types/font.type';
import Text from '../components/content/Text/Text';
import Spacing from '../components/composition/Spacing/Spacing';

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
