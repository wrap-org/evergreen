/** eslint-disable spaced-comment */
// Using Vite's import.meta.glob to import SVG files
// / <reference types="vite/client" />

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
const functionalSvgImport = import.meta.glob('./functional/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});
const distinctiveSvgImport = import.meta.glob('./distinctive/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const icons = formatIcons(svgImports);
export const functionalIcons = formatIcons(functionalSvgImport);
export const distinctiveIcons = formatIcons(distinctiveSvgImport);

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
