import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import { MobileNav, Header } from '../../../docs/recipes/Navigation.stories';
import AboutUs from '../../../docs/recipes/mega-menu/AboutUs';
import Regions from '../../../docs/recipes/mega-menu/Regions';
import Resources from '../../../docs/recipes/mega-menu/Resources';
import TakeAction from '../../../docs/recipes/mega-menu/TakeAction';
import WhatWeDo from '../../../docs/recipes/mega-menu/WhatWeDo';

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
      <Header theme={theme} active={active} setActive={setActive} {...args} />
      <WhatWeDo open={active === 'what-we-do'} />
      <TakeAction open={active === 'take-action'} />
      <Resources open={active === 'resources'} />
      <AboutUs open={active === 'about-us'} />
      <Regions open={active === 'regions'} />
      <evg-drawer>
        <dialog>
          <MobileNav />
        </dialog>
      </evg-drawer>
    </>
  );
};

export const Default = Template.bind({});

Default.storyName = 'Header';

Default.args = {
  theme: 'default',
  compact: false,
  raised: false,
};
