import React from 'react';

export default function Regions({ open }: { readonly open: boolean }) {
  return (
    <evg-header-mega-menu
      id="regions"
      role="menu"
      aria-label="regions"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrapper gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                Regions
              </span>
            </evg-wrapper>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item grow fill>
          <evg-section padding="lg">
            <evg-wrapper gutter="lg">
              <evg-grid>
                <evg-grid-item small-mobile="3">
                  {[
                    'Global',
                    'Americas',
                    'Asia Pacific',
                    'EU',
                    'Northern Ireland',
                    'UK',
                    'Cymru',
                  ].map((item) => (
                    <evg-menu-item key={item} active={item === 'Global'}>
                      <a href="https://wrap.ngo" role="menuitem">
                        <evg-menu-item-content>{item}</evg-menu-item-content>
                        {item === 'Global' && <evg-icon icon="check" />}
                      </a>
                    </evg-menu-item>
                  ))}
                </evg-grid-item>
              </evg-grid>
            </evg-wrapper>
          </evg-section>
        </evg-grid-item>
      </evg-grid>
    </evg-header-mega-menu>
  );
}
