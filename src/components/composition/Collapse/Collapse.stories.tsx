import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import './Collapse';

const description = `
An expandable container showing or hiding content based on user interaction with animation support.
Collapse supports smooth animations, customisable triggers, and can be configured to allow multiple
sections to open simultaneously or restrict to a single expanded section.

Animates the expansion and collapse of content within when the open prop is toggled.

The button to control the collapse must include aria-controls and aria-expanded attributes.
`;

export default {
  component: 'evg-collapse',
  parameters: {
    docs: {
      subtitle:
        'An expandable container showing or hiding content based on user interaction.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7190&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
};

export const Collapse: StoryFn = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <evg-button class="evg-spacing-bottom-md">
        <button
          type="button"
          id="toggle"
          aria-controls="collapse"
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Toggle collapse
        </button>
      </evg-button>
      <evg-collapse open={open} id="collapse">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit leo sodales sem sollicitudin maximus.
        </p>
        <p>
          Vestibulum viverra turpis sed nisl malesuada lacinia. Aliquam turpis
          mauris, egestas vulputate erat ut, maximus efficitur augue. Phasellus
          in ante sit amet enim tristique viverra aliquam vitae libero.
        </p>
        <p>
          Nulla id enim vehicula, varius leo et, sagittis libero. Nam vel dolor
          fringilla, viverra massa ut, pharetra enim. Praesent non varius nisl.
        </p>
      </evg-collapse>
    </>
  );
};

export const CollapseMenu: StoryFn = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <evg-menu-item class="evg-spacing-bottom-md">
        <button
          type="button"
          id="toggle"
          aria-controls="collapse"
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <evg-menu-item-content>Toggle collapse</evg-menu-item-content>
          <evg-icon icon={open ? 'chevron-up' : 'chevron-down'} />
        </button>
      </evg-menu-item>
      <evg-collapse open={open} id="collapse">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit leo sodales sem sollicitudin maximus.
        </p>
      </evg-collapse>
    </>
  );
};
