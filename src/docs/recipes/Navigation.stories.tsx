import React, { useState, useId } from 'react';

import AboutUs from './mega-menu/AboutUs';
import Regions from './mega-menu/Regions';
import Resources from './mega-menu/Resources';
import TakeAction from './mega-menu/TakeAction';
import WhatWeDo from './mega-menu/WhatWeDo';

export default {
  title: 'Recipes/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export function Wrap(props) {
  const [active, setActive] = useState('');
  return (
    <>
      <Header active={active} setActive={setActive} {...props} />
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
}

export function Data(props) {
  return (
    <evg-header class="evg-theme-default" {...props}>
      <evg-header-logo>
        <a href="https://wrap.ngo">
          <img
            src="/images/logo/forest.svg"
            alt="WRAP logo"
            width="152"
            height="44"
            loading="eager"
          />
        </a>
      </evg-header-logo>
      <evg-header-primary-nav>
        <nav aria-label="Main navigation">
          <evg-menu-item>
            <a href="https://wrap.ngo">
              <evg-menu-item-content>Data stories</evg-menu-item-content>
            </a>
          </evg-menu-item>
        </nav>
      </evg-header-primary-nav>
      <evg-header-secondary-nav>
        <nav aria-label="Secondary navigation">
          <evg-button>
            <a href="https://wrap.ngo">
              Go to main site
              <evg-icon icon="external-link" />
            </a>
          </evg-button>
        </nav>
      </evg-header-secondary-nav>
      <evg-header-mobile-nav>
        <nav aria-label="Mobile navigation">
          <evg-button>
            <a href="https://wrap.ngo">
              Main site
              <evg-icon icon="external-link" />
            </a>
          </evg-button>
        </nav>
      </evg-header-mobile-nav>
    </evg-header>
  );
}

export function LaPortal({
  secondaryNav,
  slot,
  ...props
}: {
  readonly secondaryNav?: boolean;
  readonly slot?: string;
}) {
  return (
    <div slot={slot} {...props}>
      <evg-header compact class="evg-theme-forest">
        <evg-header-logo>
          <img
            src="/images/placeholder/400x200.svg"
            alt="LA Portal logo"
            width="75"
            height="37"
          />
        </evg-header-logo>
        <evg-header-primary-nav>
          <nav aria-label="Main navigation">
            <evg-menu-item>
              <a href="https://wrap.ngo">
                <evg-menu-item-content>eTEEP</evg-menu-item-content>
              </a>
            </evg-menu-item>
          </nav>
        </evg-header-primary-nav>
        <evg-header-secondary-nav>
          <nav aria-label="Secondary navigation">
            <evg-menu-item>
              <a href="https://wrap.ngo">
                Manage data
                <evg-icon icon="edit" />
              </a>
            </evg-menu-item>
            <evg-menu-item>
              <a href="https://wrap.ngo">
                Firstname
                <evg-icon icon="user" />
              </a>
            </evg-menu-item>
          </nav>
        </evg-header-secondary-nav>
        <evg-header-mobile-nav>
          <nav aria-label="Mobile navigation">
            <evg-button width="square" variant="secondary">
              <button type="button" aria-label="Manage data">
                <evg-icon icon="edit" />
              </button>
            </evg-button>
            <evg-button width="square" variant="secondary">
              <button type="button" aria-label="Firstname">
                <evg-icon icon="user" />
              </button>
            </evg-button>
          </nav>
        </evg-header-mobile-nav>
      </evg-header>
      {secondaryNav && (
        <evg-header compact class="evg-theme-default">
          <nav aria-label="Tertiary navigation">
            <evg-menu-item>
              <a href="https://wrap.ngo">
                <evg-icon icon="arrow-left" />
                <evg-menu-item-content>
                  Southampton City Council
                </evg-menu-item-content>
              </a>
            </evg-menu-item>
          </nav>
        </evg-header>
      )}
    </div>
  );
}

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

export function Header({
  theme = 'default',
  active = '',
  setActive = () => {},
  ...props
}: {
  readonly theme?: string;
  readonly active?: string;
  readonly setActive?: (active: string) => void;
}) {
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
    <evg-header class={`evg-theme-${theme}`} {...props}>
      <evg-header-logo>
        <a href="https://wrap.ngo">
          <img
            src={
              theme === 'forest'
                ? '/images/logo/white.svg'
                : '/images/logo/forest.svg'
            }
            alt="WRAP logo"
            width="152"
            height="44"
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
                    (document.querySelector(`#${id}`) as HTMLElement)?.focus();
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
  );
}

export function MobileNav() {
  return (
    <>
      <evg-section padding="md">
        <evg-wrap>
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
        </evg-wrap>
      </evg-section>
    </>
  );
}
