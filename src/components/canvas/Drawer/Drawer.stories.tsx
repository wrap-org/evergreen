import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';

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
  const [drawer, setDrawer] = useState(null);

  useEffect(() => {
    const drawer = document.querySelector('evg-drawer dialog');
    if (drawer) {
      drawer.showModal();
      setDrawer(drawer);
    }
  }, []);

  return (
    <evg-drawer {...args}>
      <dialog>
        <evg-section padding="md">
          <evg-wrap>
            <evg-grid justify-content="flex-end" class="evg-spacing-bottom-lg">
              <evg-grid-item>
                <evg-button width="square">
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => {
                      drawer?.close();
                    }}
                  >
                    <evg-icon icon="close" />
                  </button>
                </evg-button>
              </evg-grid-item>
            </evg-grid>
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>What we do</evg-menu-item-content>
                <evg-icon icon="chevron-down" />
              </button>
            </evg-menu-item>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>Take action</evg-menu-item-content>
                <evg-icon icon="chevron-down" />
              </button>
            </evg-menu-item>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>Resources</evg-menu-item-content>
                <evg-icon icon="chevron-down" />
              </button>
            </evg-menu-item>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>About</evg-menu-item-content>
                <evg-icon icon="chevron-down" />
              </button>
            </evg-menu-item>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>Latest</evg-menu-item-content>
              </button>
            </evg-menu-item>
          </evg-wrap>
        </evg-section>
        <evg-section padding="md" class="evg-theme-sand">
          <evg-wrap>
            <evg-menu-item>
              <button type="button">
                <evg-icon icon="user" />
                <evg-menu-item-content>Log in / Sign up</evg-menu-item-content>
              </button>
            </evg-menu-item>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>Region</evg-menu-item-content>
                <evg-icon icon="chevron-down" />
              </button>
            </evg-menu-item>
            <evg-divider />
          </evg-wrap>
        </evg-section>
      </dialog>
    </evg-drawer>
  );
};

export const Drawer = Template.bind({});
