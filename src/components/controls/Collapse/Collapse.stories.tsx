import { Meta, Story } from '@storybook/react';
import React from 'react';

import Collapse from './Collapse';

export default {
  title: 'Controls/Collapse',
  component: Collapse,
} as Meta;

export const Default: Story<{ headerLabel: React.ReactNode }> = ({
  headerLabel,
}) => (
  <Collapse headerLabel={headerLabel}>
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);

Default.storyName = 'Collapse';
Default.args = {
  headerLabel: 'Click me',
};

export const RightAlign: Story = () => (
  <Collapse headerLabel="Click me" align="right">
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);
