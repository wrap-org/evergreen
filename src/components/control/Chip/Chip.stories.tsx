import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import './Chip';

const description = `Chips are used to filter content by category or type. They can be used in groups to represent a selection of options or tag links.

Chips are always interactive - either to select or as a link. If you need a non-interactive tag or label, use the <code><evg-badge></code> component instead.`;

export default {
  component: 'evg-chip',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['light', 'dark'],
    },
  },
};

export const Chip: StoryFn = (args) => {
  return (
    <evg-chip {...args}>
      <button type="button">Chip</button>
    </evg-chip>
  );
};

Chip.args = {
  variant: 'light',
};

export const ControlledChip: StoryFn = () => {
  const [selected, setSelected] = useState(false);
  return (
    <evg-chip>
      <button
        type="button"
        aria-pressed={selected}
        onClick={() => setSelected(!selected)}
      >
        Chip Controlled
      </button>
    </evg-chip>
  );
};

ControlledChip.parameters = {
  docs: {
    description: {
      story: `Chips state can be controlled by the <code>aria-pressed</code> attribute, on the button sub-element.`,
    },
  },
};

export const CheckboxChip: StoryFn = () => (
  <evg-grid gap="sm">
    <evg-grid-item>
      <evg-chip>
        <label>
          <input type="checkbox" /> Option 1
        </label>
      </evg-chip>
    </evg-grid-item>
    <evg-grid-item>
      <evg-chip>
        <label>
          <input type="checkbox" /> Option 2
        </label>
      </evg-chip>
    </evg-grid-item>
    <evg-grid-item>
      <evg-chip>
        <label>
          <input type="checkbox" /> Option 3
        </label>
      </evg-chip>
    </evg-grid-item>
  </evg-grid>
);

CheckboxChip.parameters = {
  docs: {
    description: {
      story:
        'Chips can wrap a button or link, or they can wrap a checkbox input to offer better accessibility when they are used as filter options',
    },
  },
};
