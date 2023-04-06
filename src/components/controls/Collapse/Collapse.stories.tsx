import { Meta, Story } from '@storybook/react';
import React from 'react';

import Collapse, { CollapseProps } from './Collapse';

export default {
  title: 'Controls/Collapse',
  component: Collapse,
} as Meta;

export const Default: Story<CollapseProps> = (props) => (
  <Collapse {...props}>
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);

Default.storyName = 'Collapse';
Default.args = {
  headerLabel: 'Click me',
  align: 'left',
  iconOpen: 'chevron-up',
  iconClosed: 'chevron-down',
  defaultOpen: false,
};

export const RightAlign: Story = () => (
  <Collapse headerLabel="Click me" align="right">
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);

export const DefaultOpen: Story = () => (
  <Collapse headerLabel="Click me" defaultOpen>
    <div>
      <p>Collapse is open from initial render</p>
    </div>
  </Collapse>
);
