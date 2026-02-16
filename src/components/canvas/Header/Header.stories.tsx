import { Meta, StoryFn } from '@storybook/react-vite';
import React, { useState } from 'react';

import AboutUs from '../../../docs/recipes/mega-menu/AboutUs';
import Regions from '../../../docs/recipes/mega-menu/Regions';
import Resources from '../../../docs/recipes/mega-menu/Resources';
import TakeAction from '../../../docs/recipes/mega-menu/TakeAction';
import WhatWeDo from '../../../docs/recipes/mega-menu/WhatWeDo';
import { Drawer } from '../Drawer/Drawer.stories';

const description = `
A consistent navigation component that appears at the top of the interface, providing orientation and primary controls.
Header component supports various configurations, including logo placement, navigation menus, search functionality,
and user account controls.

The header component sits at the top of the page and contains the main and secondary nav, as well as
a trigger to open the [mobile navigation drawer](?path=/docs/components-canvas-drawer--docs).

The header component is passed into the main [app wrapper](?path=/docs/components-composition-app--docs)
using the \`header\` slot, which keeps it at the top of the page.

There are [several different display variants](?path=/story/recipes-header--light) for the header depending
on the app context, such as light, dark,compact and raised styles.
`;

export default {
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle:
        'A navigation component at the top of the interface offering orientation.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=5705-7084&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
      theming: true,
    },
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
              width={compact ? '83' : '110'}
              height={compact ? '24' : '32'}
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
            <evg-button variant={theme === 'forest' ? 'secondary' : 'default'}>
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
            <evg-button variant={theme === 'forest' ? 'secondary' : 'default'}>
              <button type="button">
                Log in / Sign up
                <evg-icon icon="user" />
              </button>
            </evg-button>
            <evg-button
              width="square"
              variant={theme === 'forest' ? 'secondary' : 'default'}
            >
              <button type="button" aria-label="Search">
                <evg-icon icon="search" />
              </button>
            </evg-button>
          </nav>
        </evg-header-secondary-nav>
        <evg-header-mobile-nav>
          <evg-button
            width="square"
            variant={theme === 'forest' ? 'secondary' : 'default'}
          >
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
