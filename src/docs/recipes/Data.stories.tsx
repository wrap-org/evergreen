import React from 'react';

import { Minimal as Footer } from './Footer.stories';
import { Data as Navigation } from './Header.stories';

export default {
  title: 'Recipes/Data',
  parameters: {
    layout: 'fullscreen',
  },
};

export function AppLayout({ children }) {
  return (
    <evg-app>
      <Navigation slot="header" />
      {children}
      <Footer slot="footer" />
    </evg-app>
  );
}
