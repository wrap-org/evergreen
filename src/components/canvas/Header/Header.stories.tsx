import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import AboutUs from '../../../docs/recipes/mega-menu/AboutUs';
import Regions from '../../../docs/recipes/mega-menu/Regions';
import Resources from '../../../docs/recipes/mega-menu/Resources';
import TakeAction from '../../../docs/recipes/mega-menu/TakeAction';
import WhatWeDo from '../../../docs/recipes/mega-menu/WhatWeDo';
import { Drawer } from '../Drawer/Drawer.stories';

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

const Template: StoryFn = ({ theme, compact, ...props }) => {
  const [active, setActive] = useState('');

  const primary = [
    {
      id: 'what-we-do',
      title: 'What we do',
    },
    {
      id: 'take-action',
      title: 'Take action',
    },
    {
      id: 'resources',
      title: 'Resources',
    },
    {
      id: 'about-us',
      title: 'About us',
    },
  ];

  return (
    <>
      <evg-header class={`evg-theme-${theme}`} compact={compact} {...props}>
        <evg-header-logo>
          <a href="https://wrap.ngo">
            <img
              src={
                theme === 'forest'
                  ? '/images/logo/white.svg'
                  : '/images/logo/forest.svg'
              }
              alt="WRAP logo"
              width={compact ? '83' : '152'}
              height={compact ? '24' : '44'}
              loading="eager"
            />
          </a>
        </evg-header-logo>
        <evg-header-primary-nav>
          <nav aria-label="Main navigation">
            {primary.map(({ id, title }) => (
              <evg-menu-item key={id} active={active === id}>
                <button
                  type="button"
                  aria-controls={id}
                  aria-expanded={active === id}
                  onClick={() => {
                    setActive(active === id ? '' : id);
                    setTimeout(() => {
                      (
                        document.querySelector(`#${id}`) as HTMLElement
                      )?.focus();
                    }, 450);
                  }}
                >
                  <evg-menu-item-content>{title}</evg-menu-item-content>
                  <evg-icon
                    icon={active === id ? 'chevron-up' : 'chevron-down'}
                  />
                </button>
              </evg-menu-item>
            ))}
            <evg-menu-item>
              <a href="https://wrap.ngo">
                <evg-menu-item-content>Latest</evg-menu-item-content>
              </a>
            </evg-menu-item>
          </nav>
        </evg-header-primary-nav>
        <evg-header-secondary-nav>
          <nav aria-label="Secondary navigation">
            <evg-button>
              <button
                type="button"
                aria-controls="regions"
                aria-expanded={active === 'regions'}
                onClick={() => {
                  setActive(active === 'regions' ? '' : 'regions');
                }}
              >
                Regions
                <evg-icon
                  icon={active === 'regions' ? 'chevron-up' : 'chevron-down'}
                />
              </button>
            </evg-button>
            <evg-button>
              <button type="button">
                Log in / Sign up
                <evg-icon icon="user" />
              </button>
            </evg-button>
            <evg-button width="square">
              <button type="button" aria-label="Search">
                <evg-icon icon="search" />
              </button>
            </evg-button>
          </nav>
        </evg-header-secondary-nav>
        <evg-header-mobile-nav>
          <evg-button width="square">
            <button
              type="button"
              aria-label="Open mobile navigation"
              onClick={() => {
                const drawer = document.querySelector(
                  'evg-drawer dialog',
                ) as HTMLDialogElement;
                if (drawer) {
                  drawer.showModal();
                }
              }}
            >
              <evg-icon icon="menu" />
            </button>
          </evg-button>
        </evg-header-mobile-nav>
      </evg-header>
      <WhatWeDo open={active === 'what-we-do'} />
      <TakeAction open={active === 'take-action'} />
      <Resources open={active === 'resources'} />
      <AboutUs open={active === 'about-us'} />
      <Regions open={active === 'regions'} />
      <Drawer />
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
