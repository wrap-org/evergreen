import React from 'react';

import AppHeader from './Header';
import AppMain from './Main';
import AppFooter from './Footer';

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
