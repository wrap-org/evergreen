import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'React/Components/Controls/Dropdown',
  component: Dropdown,
} satisfies Meta;

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown open={open} onClickAway={() => setOpen(false)}>
      <evg-button>
        <button onClick={() => setOpen(!open)}>
          Dropdown <evg-icon icon="chevron-down" />
        </button>
      </evg-button>
      <Dropdown.Content>
        <div>Content</div>
      </Dropdown.Content>
    </Dropdown>
  );
};

Default.storyName = 'Dropdown';
