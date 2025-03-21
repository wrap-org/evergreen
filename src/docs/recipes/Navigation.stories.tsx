import React, { useState } from 'react';

import DrawerContent from '../../components/canvas/Drawer/DrawerContent';
import HeaderContent from '../../components/canvas/Header/HeaderContent';
import AboutUs from '../../components/canvas/Header/mega-menu/AboutUs';
import Regions from '../../components/canvas/Header/mega-menu/Regions';
import Resources from '../../components/canvas/Header/mega-menu/Resources';
import TakeAction from '../../components/canvas/Header/mega-menu/TakeAction';
import WhatWeDo from '../../components/canvas/Header/mega-menu/WhatWeDo';

export default {
  title: 'Recipes/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Wrap(props) {
  const [active, setActive] = useState('');
  return (
    <>
      <evg-header class="evg-theme-default" {...props}>
        <HeaderContent active={active} setActive={setActive} />
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
