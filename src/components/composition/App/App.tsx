import React from 'react';

import styles from './App.module.scss';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';

const App = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.app}>{children}</div>
);

App.Header = AppHeader;
App.Main = AppMain;
App.Footer = AppFooter;

export default App;
