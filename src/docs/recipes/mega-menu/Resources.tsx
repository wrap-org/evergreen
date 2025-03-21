import React from 'react';

export default function Resources({ open }: { readonly open: boolean }) {
  return (
    <evg-header-mega-menu
      id="resources"
      aria-label="resources"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrap gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                Resources
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
                    Type
                  </span>
                  <evg-divider />

                  {[
                    'Reports',
                    'Guides',
                    'Case studies',
                    'Tools',
                    'Webinars',
                    'Campaign assets',
                  ].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">{item}</a>
                    </evg-menu-item>
                  ))}
                </evg-grid-item>
                <evg-grid-item>
                  <span className="evg-text-color-forest-75 evg-text-size-heading-xs evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                    Topic
                  </span>
                  <evg-divider />

                  {[
                    'Food',
                    'Plastics',
                    'Textiles',
                    'Collections and recycling',
                    'All resources',
                    'Archive',
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
