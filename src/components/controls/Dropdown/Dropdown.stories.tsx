import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import Dropdown from './Dropdown';

import Button from 'components/controls/Button/Button';

export default {
  title: 'Controls/Dropdown',
  component: Dropdown,
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown open={open} onClickAway={() => setOpen(false)}>
      <Button onClick={() => setOpen(!open)}>Dropdown</Button>
      <Dropdown.Content>
        <div>Content</div>
      </Dropdown.Content>
    </Dropdown>
  );
};

Default.storyName = 'Dropdown';
