// Using Vite's import.meta.glob to import SVG files
/// <reference types="vite/client" />

const svgImports = import.meta.glob('./assets/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const icons = Object.entries(svgImports).reduce<Record<string, string>>(
  (acc, [path, content]) => {
    const key = path.replace('./assets/', '').replace('.svg', '');
    return { ...acc, [key]: content as string };
  },
  {},
);

export const iconKeys = Object.keys(icons) as (keyof typeof icons)[];

export type IconName = (typeof iconKeys)[number];

export default icons;
