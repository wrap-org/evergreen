import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect } from 'react';

import { MobileNav } from '../../../docs/recipes/Navigation.stories';

export default {
  title: 'Components/Canvas/Drawer',
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        height: '22rem',
      },
    },
  },
} satisfies Meta;

const Template: StoryFn = (args) => {
  useEffect(() => {
    const drawer = document.querySelector(
      'evg-drawer dialog',
    ) as HTMLDialogElement;
    if (drawer) {
      drawer.showModal();
    }
  }, []);

  return (
    <evg-drawer {...args}>
      <dialog>
        <MobileNav />
      </dialog>
    </evg-drawer>
  );
};

export const Drawer = Template.bind({});
