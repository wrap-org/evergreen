import React from 'react';

import { Default as Header } from '../../components/canvas/Header/Header.stories';

export default {
  title: 'Recipes/Header',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export function Light(props) {
  return <Header theme="default" {...props} />;
}

export function Dark(props) {
  return <Header theme="forest" {...props} />;
}

export function Raised(props) {
  return <Header theme="default" raised {...props} />;
}

export function Compact(props) {
  return <Header theme="default" compact {...props} />;
}

export function CompactDark(props) {
  return <Header theme="forest" compact {...props} />;
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
