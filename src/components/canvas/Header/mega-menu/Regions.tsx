import React from 'react';

export default function Regions({ open }: { readonly open: boolean }) {
  return (
    <evg-header-mega-menu
      id="regions"
      aria-label="regions"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrap gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                Regions
              </span>
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item grow fill>
          <evg-section padding="lg">
            <evg-wrap gutter="lg">
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
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
      </evg-grid>
    </evg-header-mega-menu>
  );
}
