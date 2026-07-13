import React from 'react';

import { Full, Minimal } from './Footer.stories';
import {
  Light,
  LaPortal as LaPortalHeader,
  Data as DataHeader,
} from './Header.stories';

export default {
  title: 'Recipes/App',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export function Brochureware({ children }) {
  return (
    <>
      <evg-skip-link>
        <a href="#main">Skip to main content</a>
      </evg-skip-link>
      <evg-app>
        <Light slot="header" />
        <main id="main">
          {children ?? (
            <evg-section padding="fluid" class="evg-theme-sand">
              <evg-wrapper size="xxl">
                <docs-placeholder>Content</docs-placeholder>
              </evg-wrapper>
            </evg-section>
          )}
        </main>
        <Full slot="footer" />
      </evg-app>
    </>
  );
}

export function LaPortal({
  secondaryNav,
  children,
}: {
  readonly secondaryNav?: boolean;
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <evg-skip-link>
        <a href="#main">Skip to main content</a>
      </evg-skip-link>
      <evg-app header="sticky">
        <LaPortalHeader secondaryNav={secondaryNav} slot="header" />
        <main id="main">
          {children ?? (
            <evg-section padding="md">
              <evg-wrapper size="xxl">
                <docs-placeholder>Content</docs-placeholder>
              </evg-wrapper>
            </evg-section>
          )}
        </main>
      </evg-app>
    </>
  );
}

export function Data({ children }) {
  return (
    <>
      <evg-skip-link>
        <a href="#main">Skip to main content</a>
      </evg-skip-link>
      <evg-app>
        <DataHeader slot="header" />
        <main id="main">
          {children ?? (
            <evg-section padding="fluid" class="evg-theme-sand">
              <evg-wrapper size="xxl">
                <docs-placeholder>Content</docs-placeholder>
              </evg-wrapper>
            </evg-section>
          )}
        </main>
        <Minimal slot="footer" />
      </evg-app>
    </>
  );
}
