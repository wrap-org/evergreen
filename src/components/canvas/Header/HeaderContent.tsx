import React from 'react';

export default function HeaderContent({
  theme = 'default',
  active = '',
  setActive = () => {},
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
    <>
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
    </>
  );
}
