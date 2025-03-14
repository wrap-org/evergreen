import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import Collapse, { CollapseProps } from './Collapse';

export default {
  title: 'React/Components/Controls/Collapse',
  component: Collapse,
} satisfies Meta;

export const Default: StoryFn<CollapseProps> = (props) => (
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

export const RightAlign: StoryFn = () => (
  <Collapse headerLabel="Click me" align="right">
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);

export const DefaultOpen: StoryFn = () => (
  <Collapse headerLabel="Click me" defaultOpen>
    <div>
      <p>Collapse is open from initial render</p>
    </div>
  </Collapse>
);

DefaultOpen.parameters = {
  docs: {
    description: {
      story:
        'Set `defaultOpen` to `true` to have the collapse open from initial render.',
    },
  },
};

export const CollapseState: StoryFn = () => {
  const [open, setOpen] = useState(false);

  const onToggle = function (open?: boolean) {
    setOpen(open ?? false);
  };

  return (
    <evg-box
      class={open ? 'evg-theme-default' : 'evg-theme-sand'}
      border={open}
    >
      <Collapse onToggle={onToggle} headerLabel="Click me" align="right">
        <div>
          <p>
            When the collapse is toggled the onToggle event handler is called
          </p>
        </div>
      </Collapse>
    </evg-box>
  );
};

CollapseState.parameters = {
  docs: {
    description: {
      story: 'Watch the `onToggle` event to detect the state of the collapse.',
    },
  },
};
