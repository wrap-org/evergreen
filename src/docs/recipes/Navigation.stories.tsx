import React from 'react';

export default {
  title: 'Recipes/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Wrap(props) {
  return (
    <evg-menu-bar class="evg-theme-default" {...props}>
      <a href="https://wrap.ngo">
        <img
          src="/images/logo/forest.svg"
          alt="WRAP logo"
          width="166"
          height="48"
          loading="eager"
        />
      </a>
      <nav>
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
      <nav>
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
          <button type="button">
            <evg-icon icon="search" />
          </button>
        </evg-button>
      </nav>
    </evg-menu-bar>
  );
}

export function Data(props) {
  return (
    <evg-menu-bar class="evg-theme-default" {...props}>
      <a href="https://wrap.ngo">
        <img
          src="/images/logo/forest.svg"
          alt="WRAP logo"
          width="166"
          height="48"
          loading="eager"
        />
      </a>
      <nav>
        <evg-menu-item>
          <a href="https://wrap.ngo">
            <evg-menu-item-content>Data stories</evg-menu-item-content>
          </a>
        </evg-menu-item>
      </nav>
      <nav>
        <evg-button>
          <a href="https://wrap.ngo">
            Go to main site
            <evg-icon icon="external-link" />
          </a>
        </evg-button>
      </nav>
    </evg-menu-bar>
  );
}
