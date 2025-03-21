import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import DrawerContent from '../Drawer/DrawerContent';

import HeaderContent from './HeaderContent';
import AboutUs from './mega-menu/AboutUs';
import Regions from './mega-menu/Regions';
import Resources from './mega-menu/Resources';
import TakeAction from './mega-menu/TakeAction';
import WhatWeDo from './mega-menu/WhatWeDo';

export default {
  title: 'Components/Canvas/Header',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
      },
      options: ['default', 'forest'],
    },
    raised: {
      control: {
        type: 'boolean',
      },
    },
    compact: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta;

const Template: StoryFn = ({ theme, ...args }) => {
  const [active, setActive] = useState('');

  return (
    <>
      <evg-header class={`evg-theme-${theme}`} {...args}>
        <HeaderContent theme={theme} active={active} setActive={setActive} />
      </evg-header>
      <WhatWeDo open={active === 'what-we-do'} />
      <TakeAction open={active === 'take-action'} />
      <Resources open={active === 'resources'} />
      <AboutUs open={active === 'about-us'} />
      <Regions open={active === 'regions'} />
      <evg-drawer>
        <dialog>
          <DrawerContent />
        </dialog>
      </evg-drawer>
    </>
  );
};

export const Header = Template.bind({});

Header.args = {
  theme: 'default',
  compact: false,
  raised: false,
};
