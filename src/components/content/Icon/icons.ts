// Using Vite's import.meta.glob to import SVG files
// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

import { distinctiveIcons } from './distinctive-icons';
import { functionalIcons } from './functional-icons';

const formatIcons = (imports) =>
  Object.entries(imports).reduce<Record<string, string>>(
    (acc, [path, content]) => {
      const key = path
        .replace(/\.\/(icons|functional|distinctive)\//, '')
        .replace('.svg', '');
      return { ...acc, [key]: content as string };
    },
    {},
  );

const svgImports = import.meta.glob('./icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const icons = formatIcons(svgImports);
export { functionalIcons, distinctiveIcons };

export const iconKeys = Object.keys(icons) as (keyof typeof icons)[];
export const functionalIconKeys = Object.keys(
  functionalIcons,
) as (keyof typeof functionalIcons)[];
export const distinctiveIconKeys = Object.keys(
  distinctiveIcons,
) as (keyof typeof distinctiveIcons)[];

export type IconName = (typeof iconKeys)[number];
export type FunctionalIconName = (typeof functionalIconKeys)[number];
export type DistinctiveIconName = (typeof distinctiveIconKeys)[number];

export default icons;
