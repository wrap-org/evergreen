import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import Dropdown from './Dropdown';

import Icon from 'components/react/content/Icon/Icon';

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
          Dropdown <Icon icon="chevron-down" />
        </button>
      </evg-button>
      <Dropdown.Content>
        <div>Content</div>
      </Dropdown.Content>
    </Dropdown>
  );
};

Default.storyName = 'Dropdown';
