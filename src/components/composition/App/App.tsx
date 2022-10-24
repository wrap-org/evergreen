import React from 'react';

import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppFooter from './AppFooter';

import styles from './App.module.scss';

const App = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.app}>
    {children}
  </div>
);

App.Header = AppHeader;
App.Main = AppMain;
App.Footer = AppFooter;

export default App;
