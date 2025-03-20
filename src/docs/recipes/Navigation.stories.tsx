import React from 'react';

export default {
  title: 'Recipes/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Wrap(props) {
  return (
    <evg-header class="evg-theme-default" {...props}>
      <a href="https://wrap.ngo">
        <img
          src="/images/logo/forest.svg"
          alt="WRAP logo"
          width="166"
          height="48"
          loading="eager"
        />
      </a>
      <nav aria-label="Main navigation">
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>What we do</evg-menu-item-content>
            <evg-icon icon="chevron-down" />
          </a>
        </evg-menu-item>
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>Take action</evg-menu-item-content>
            <evg-icon icon="chevron-down" />
          </a>
        </evg-menu-item>
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>Resources</evg-menu-item-content>
            <evg-icon icon="chevron-down" />
          </a>
        </evg-menu-item>
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>About</evg-menu-item-content>
            <evg-icon icon="chevron-down" />
          </a>
        </evg-menu-item>
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>Latest</evg-menu-item-content>
          </a>
        </evg-menu-item>
      </nav>
      <nav aria-label="Secondary navigation">
        <evg-button>
          <button type="button">
            Regions
            <evg-icon icon="chevron-down" />
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
    </evg-header>
  );
}

export function Data(props) {
  return (
    <evg-header class="evg-theme-default" {...props}>
      <a href="https://wrap.ngo">
        <img
          src="/images/logo/forest.svg"
          alt="WRAP logo"
          width="166"
          height="48"
          loading="eager"
        />
      </a>
      <nav aria-label="Main navigation">
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>Data stories</evg-menu-item-content>
          </a>
        </evg-menu-item>
      </nav>
      <nav aria-label="Secondary navigation">
        <evg-button>
          <a href="https://wrap.ngo">
            Go to main site
            <evg-icon icon="external-link" />
          </a>
        </evg-button>
      </nav>
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
        <img
          src="/images/placeholder/400x200.svg"
          alt="LA Portal logo"
          width="75"
          height="37"
        />
        <nav aria-label="Main navigation">
          <evg-menu-item>
            <a href="https://wrap.ngo">
              <evg-menu-item-content>eTEEP</evg-menu-item-content>
            </a>
          </evg-menu-item>
        </nav>
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
