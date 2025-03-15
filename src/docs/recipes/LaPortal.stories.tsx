import React from 'react';

import { LaPortal as Navigation } from './Navigation.stories';

export default {
  title: 'Recipes/La Portal',
  parameters: {
    layout: 'fullscreen',
  },
};

export function AppLayout({ children }) {
  return (
    <evg-app header="sticky">
      <Navigation slot="header" />
      {children}
    </evg-app>
  );
}
