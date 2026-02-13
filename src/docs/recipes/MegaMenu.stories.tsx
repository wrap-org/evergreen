import { Meta } from '@storybook/react-vite';
import React from 'react';

import AboutUsComponent from './mega-menu/AboutUs';
import RegionsComponent from './mega-menu/Regions';
import ResourcesComponent from './mega-menu/Resources';
import TakeActionComponent from './mega-menu/TakeAction';
import WhatWeDoComponent from './mega-menu/WhatWeDo';

export default {
  title: 'Recipes/Mega Menu',
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          // This is giving a false positive
          // because of the entrance animation
          {
            id: 'color-contrast',
            selector: 'evg-header-mega-menu',
            enabled: false,
          },
        ],
      },
    },
  },
  tags: ['!autodocs'],
} satisfies Meta;

export const AboutUs = (args) => {
  return <AboutUsComponent {...args} />;
};

AboutUs.args = {
  open: true,
};

export const Regions = (args) => {
  return <RegionsComponent {...args} />;
};

Regions.args = {
  open: true,
};

export const Resources = (args) => {
  return <ResourcesComponent {...args} />;
};

Resources.args = {
  open: true,
};

export const TakeAction = (args) => {
  return <TakeActionComponent {...args} />;
};

TakeAction.args = {
  open: true,
};

export const WhatWeDo = (args) => {
  return <WhatWeDoComponent {...args} />;
};

WhatWeDo.args = {
  open: true,
};
