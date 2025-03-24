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
    <evg-app>
      <Light slot="header" />
      {children ?? (
        <evg-section padding="fluid" class="evg-theme-sand">
          <evg-wrap size="xxl">
            <docs-placeholder>Content</docs-placeholder>
          </evg-wrap>
        </evg-section>
      )}
      <Full slot="footer" />
    </evg-app>
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
    <evg-app header="sticky">
      <LaPortalHeader secondaryNav={secondaryNav} slot="header" />
      {children ?? (
        <evg-section padding="md">
          <evg-wrap size="xxl">
            <docs-placeholder>Content</docs-placeholder>
          </evg-wrap>
        </evg-section>
      )}
    </evg-app>
  );
}

export function Data({ children }) {
  return (
    <evg-app>
      <DataHeader slot="header" />
      {children ?? (
        <evg-section padding="fluid" class="evg-theme-sand">
          <evg-wrap size="xxl">
            <docs-placeholder>Content</docs-placeholder>
          </evg-wrap>
        </evg-section>
      )}
      <Minimal slot="footer" />
    </evg-app>
  );
}
