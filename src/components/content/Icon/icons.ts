const svgContext = require.context('./assets', false, /\.svg$/);

const icons = svgContext.keys().reduce(
  (acc, path) => {
    const key = path.replace('./', '').replace('.svg', '');
    return { ...acc, [key]: require(`./assets/${key}.svg?raw`) };
  },
  {} as Record<string, string>,
);

export const iconKeys = Object.keys(icons) as (keyof typeof icons)[];

export type IconName = (typeof iconKeys)[number];

export default icons;
