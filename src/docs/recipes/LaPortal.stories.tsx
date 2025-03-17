import React from 'react';

import { LaPortal as Navigation } from './Navigation.stories';

export default {
  title: 'Recipes/La Portal',
  parameters: {
    layout: 'fullscreen',
  },
};

export function AppLayout({
  secondaryNav,
  children,
}: {
  readonly secondaryNav?: boolean;
  readonly children: React.ReactNode;
}) {
  return (
    <evg-app header="sticky">
      <Navigation secondaryNav={secondaryNav} slot="header" />
      {children}
    </evg-app>
  );
}
