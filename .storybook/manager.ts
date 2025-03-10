import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';


addons.setConfig({
  panelPosition: 'bottom',
  theme: create({
    base: 'light',

    colorPrimary: '#0b301a',
    colorSecondary: '#a9ad94',

    // UI
    appBg: '#fff',
    appContentBg: '#fff',
    appBorderColor: '#c2cbc6',
    appBorderRadius: 3,

    // Typography
    fontBase: "Inter, sans-serif",
    fontCode: 'monospace',

    // Text colors
    textColor: '#0b301a',
    textInverseColor: 'rgba(255,255,255,0.8)',

    // Toolbar default and active colors
    barTextColor: '#fff',
    barSelectedColor: '#fff',
    barBg: '#0b301a',

    // Form colors
    inputBg: '#fff',
    inputBorder: '#c2cbc6',
    inputTextColor: '#0b301a',
    inputBorderRadius: 0.25,

    brandTitle: 'Evergreen',
    brandUrl: 'https://wrap.ngo/',
    brandImage: '/logo.png',
  }),
});