import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect } from 'react';

import DrawerContent from './DrawerContent';

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
        <DrawerContent />
      </dialog>
    </evg-drawer>
  );
};

export const Drawer = Template.bind({});
