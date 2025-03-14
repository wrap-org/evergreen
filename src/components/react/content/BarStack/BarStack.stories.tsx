import { Meta } from '@storybook/react';
import React from 'react';

import BarStack from './BarStack';

export default {
  title: 'React/Components/Content/Bar Stack',
  component: BarStack,
  subcomponents: {
    BarStackItem: BarStack.Item as React.FunctionComponent<any>,
  },
} satisfies Meta<typeof BarStack>;

export const Default = (args: {
  readonly children?: React.ReactNode;
  readonly compact?: boolean;
  readonly width?: number;
}) => {
  return (
    <BarStack {...args}>
      <BarStack.Item color="sky" size={20} />
      <BarStack.Item color="rose" size={20} />
      <BarStack.Item color="lilac" size={20} />
      <BarStack.Item color="lime" size={20} />
    </BarStack>
  );
};

Default.storyName = 'Bar Stack';

Default.args = {
  compact: false,
  width: 100,
};

export const Compact = () => {
  return (
    <BarStack compact>
      <BarStack.Item color="sky" size={20} />
      <BarStack.Item color="rose" size={20} />
      <BarStack.Item color="lilac" size={20} />
      <BarStack.Item color="lime" size={20} />
    </BarStack>
  );
};
