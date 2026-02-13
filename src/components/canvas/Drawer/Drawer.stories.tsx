import { Meta, StoryFn } from '@storybook/react-vite';
import React, { useEffect, useState, useId } from 'react';

import { a11yModal } from '@/lib/a11y-tests/a11y-modal';

const description = `
A flexible panel that slides in from the edge of the screen, providing additional
context without navigating away from the current view. Drawers can be configured to
appear from different sides of the viewport with customisable sizes, backdrop options,
and transition animations.
`;

export default {
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle:
        'A sliding panel providing additional context without navigating away.',
      description: {
        component: description,
      },
      story: {
        inline: false,
        height: '22rem',
      },
    },
  },
} satisfies Meta;

function DrawerExpandable({
  title,
  children,
}: {
  readonly title: string;
  readonly children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <evg-menu-item>
        <button
          type="button"
          aria-controls={id}
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <evg-menu-item-content>{title}</evg-menu-item-content>
          <evg-icon icon={open ? 'chevron-up' : 'chevron-down'} />
        </button>
      </evg-menu-item>
      <evg-collapse open={open} id={id}>
        {children}
      </evg-collapse>
    </>
  );
}

const Template: StoryFn = (args) => {
  useEffect(() => {
    const drawer = document.querySelector(
      'evg-drawer dialog',
    ) as HTMLDialogElement;
    const openTrigger = document.querySelector(
      '[aria-label="Open mobile navigation"]',
    ) as HTMLButtonElement;
    if (drawer && !openTrigger) {
      drawer.showModal();
    }
  }, []);

  return (
    <evg-drawer {...args}>
      <dialog aria-modal="true" aria-label="Main menu">
        <evg-section padding="md">
          <evg-wrapper>
            <evg-grid justify-content="flex-end" class="evg-spacing-bottom-lg">
              <evg-grid-item>
                <evg-button width="square">
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => {
                      const drawer = document.querySelector(
                        'evg-drawer dialog',
                      ) as HTMLDialogElement;
                      if (drawer) {
                        drawer.close();
                      }
                    }}
                  >
                    <evg-icon icon="close" />
                  </button>
                </evg-button>
              </evg-grid-item>
            </evg-grid>
            <DrawerExpandable title="What we do">
              <div className="evg-spacing-left-sm">
                <DrawerExpandable title="Circular living">
                  <div className="evg-spacing-left-sm">
                    {[
                      'Mission and vision',
                      'Services',
                      'Impact',
                      'Case studies',
                      'Key reports',
                      'Get in touch',
                    ].map((item) => (
                      <evg-menu-item key={item}>
                        <a href="https://wrap.ngo">{item}</a>
                      </evg-menu-item>
                    ))}
                  </div>
                </DrawerExpandable>
                <DrawerExpandable title="Focus areas">
                  <div className="evg-spacing-left-sm">
                    {[
                      'Future-proof food',
                      'Prevent problem plastics',
                      'Transform textiles',
                      'Accelerate the Circular Economy',
                    ].map((item) => (
                      <evg-menu-item key={item}>
                        <a href="https://wrap.ngo">{item}</a>
                      </evg-menu-item>
                    ))}
                  </div>
                </DrawerExpandable>
              </div>
            </DrawerExpandable>
            <evg-divider />
            <DrawerExpandable title="Take action">
              <DrawerExpandable title="Future-proof food">
                <div className="evg-spacing-left-sm">
                  {[
                    'Food Pact Network',
                    'UK Food and Drink Pact',
                    'UK Food and Drink Pact Water Roadmap',
                    'UK Food and Drink Pact Food Waste Reduction Roadmap',
                    'Guardians of Grub',
                    'Love Food Hate Waste',
                    'All food initiatives',
                  ].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">{item}</a>
                    </evg-menu-item>
                  ))}
                </div>
              </DrawerExpandable>
              <DrawerExpandable title="Prevent problem plastics">
                <div className="evg-spacing-left-sm">
                  {[
                    'The Plastics Pact Network',
                    'UK Plastics Pact',
                    'Collaborative partnerships',
                    'Global Treaty to End Plastic Pollution',
                    'All plastics initiatives',
                  ].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">{item}</a>
                    </evg-menu-item>
                  ))}
                </div>
              </DrawerExpandable>
              <DrawerExpandable title="Transform textiles">
                <div className="evg-spacing-left-sm">
                  {[
                    'Textiles Action Network',
                    'Textiles 2030',
                    'Circular Change Council',
                    'Extended producer responsibility',
                    'All textiles initiatives',
                  ].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">{item}</a>
                    </evg-menu-item>
                  ))}
                </div>
              </DrawerExpandable>
              <DrawerExpandable title="Accelerate the circular economy">
                <div className="evg-spacing-left-sm">
                  {[
                    'Business recycling support',
                    'Circular Change Council',
                    'Extended producer responsibility',
                    'Finance for action and innovation',
                    'Local authority recycling support',
                    'Market analysis for the recycling industry',
                    'Policy design and implementation',
                    'Recycle Now',
                    'All circular economy initiatives',
                  ].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">{item}</a>
                    </evg-menu-item>
                  ))}
                </div>
              </DrawerExpandable>
            </DrawerExpandable>
            <evg-divider />
            <DrawerExpandable title="Resources">
              <div className="evg-spacing-left-sm">
                {['Publications', 'Campaign assets'].map((item) => (
                  <evg-menu-item key={item}>
                    <a href="https://wrap.ngo">{item}</a>
                  </evg-menu-item>
                ))}
              </div>
            </DrawerExpandable>
            <evg-divider />
            <DrawerExpandable title="About">
              <div className="evg-spacing-left-sm">
                {[
                  'About us',
                  'Our team',
                  'Annual report',
                  'Careers',
                  'Media Centre',
                ].map((item) => (
                  <evg-menu-item key={item}>
                    <a href="https://wrap.ngo">{item}</a>
                  </evg-menu-item>
                ))}
              </div>
            </DrawerExpandable>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>Latest</evg-menu-item-content>
              </button>
            </evg-menu-item>
          </evg-wrapper>
        </evg-section>
        <evg-section padding="md" class="evg-theme-sand">
          <evg-wrapper>
            <evg-menu-item>
              <button type="button">
                <evg-icon icon="user" />
                <evg-menu-item-content>Log in / Sign up</evg-menu-item-content>
              </button>
            </evg-menu-item>
            <evg-divider />
            <DrawerExpandable title="Region">
              <div className="evg-spacing-left-sm">
                {[
                  'Global',
                  'Americas',
                  'Asia Pacific',
                  'EU',
                  'Northern Ireland',
                  'UK',
                  'Cymru',
                ].map((item) => (
                  <evg-menu-item key={item}>
                    <a href="https://wrap.ngo">{item}</a>
                  </evg-menu-item>
                ))}
              </div>
            </DrawerExpandable>
            <evg-divider />
          </evg-wrapper>
        </evg-section>
      </dialog>
    </evg-drawer>
  );
};

export const Drawer = Template.bind({});

Drawer.play = async ({ canvasElement, step }) => {
  await a11yModal({ canvasElement, step });
};
