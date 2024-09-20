import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import Dropdown from './Dropdown';

import Icon from 'components/content/Icon/Icon';
import Button from 'components/controls/Button/Button';

export default {
  title: 'Controls/Dropdown',
  component: Dropdown,
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown open={open} onClickAway={() => setOpen(false)}>
      <Button onClick={() => setOpen(!open)}>
        Dropdown <Icon icon="chevron-down" />
      </Button>
      <Dropdown.Content>
        <div>Content</div>
      </Dropdown.Content>
    </Dropdown>
  );
};

Default.storyName = 'Dropdown';
