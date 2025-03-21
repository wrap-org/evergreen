import React from 'react';

export default function WhatWeDo({ open }: { readonly open: boolean }) {
  return (
    <evg-header-mega-menu
      id="what-we-do"
      aria-label="what we do"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrap gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                What we do
              </span>
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item grow fill>
          <evg-section padding="lg">
            <evg-wrap gutter="lg">
              <evg-grid gap="xl">
                <evg-grid-item>
                  <span className="evg-text-color-forest-75 evg-text-size-heading-xs evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                    Circular living
                  </span>
                  <evg-divider />

                  <evg-grid>
                    <evg-grid-item>
                      {['Mission and vision', 'Services', 'Impact'].map(
                        (item) => (
                          <evg-menu-item key={item}>
                            <a href="https://wrap.ngo">{item}</a>
                          </evg-menu-item>
                        ),
                      )}
                    </evg-grid-item>
                    <evg-grid-item>
                      {['Case studies', 'Key reports', 'Get in touch'].map(
                        (item) => (
                          <evg-menu-item key={item}>
                            <a href="https://wrap.ngo">{item}</a>
                          </evg-menu-item>
                        ),
                      )}
                    </evg-grid-item>
                  </evg-grid>
                </evg-grid-item>
                <evg-grid-item>
                  <span className="evg-text-color-forest-75 evg-text-size-heading-xs evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                    Focus areas
                  </span>
                  <evg-divider />

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
                </evg-grid-item>
              </evg-grid>
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
      </evg-grid>
    </evg-header-mega-menu>
  );
}
