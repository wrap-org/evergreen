import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Spacing from '../components/composition/Spacing/Spacing';
import Text from '../components/content/Text/Text';

export default {
  title: 'Tokens/Typography',
} as Meta;

export const Typography = () => (
  <>
    <Spacing bottom="md">
      <span>base</span>
      <Text size="base" as="div">
        The future is in our hands to shape.
      </Text>
    </Spacing>
    <Spacing bottom="md">
      <span>xs</span>
      <Text size="xs" as="div">
        The future is in our hands to shape.
      </Text>
    </Spacing>
    <Spacing bottom="md">
      <span>sm</span>
      <Text size="base" as="div">
        The future is in our hands to shape.
      </Text>
    </Spacing>
    <Spacing bottom="md">
      <span>md</span>
      <Text size="md" as="div">
        The future is in our hands to shape.
      </Text>
    </Spacing>
    <Spacing bottom="md">
      <span>lg</span>
      <Text size="lg" as="div">
        The future is in our hands to shape.
      </Text>
    </Spacing>
    <Spacing bottom="md">
      <span>xl</span>
      <Text size="xl" as="div">
        The future is in our hands to shape.
      </Text>
    </Spacing>
    <Spacing bottom="md">
      <span>h1</span>
      <h1>The future is in our hands to shape.</h1>
    </Spacing>
    <Spacing bottom="md">
      <span>h2</span>
      <h2>The future is in our hands to shape.</h2>
    </Spacing>
    <Spacing bottom="md">
      <span>h3</span>
      <h3>The future is in our hands to shape.</h3>
    </Spacing>
    <Spacing bottom="md">
      <span>h4</span>
      <h4>The future is in our hands to shape.</h4>
    </Spacing>
  </>
);
