// Using Vite's import.meta.glob to import SVG files
// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

const formatIcons = (imports) =>
  Object.entries(imports).reduce<Record<string, string>>(
    (acc, [path, content]) => {
      const key = path.replace(/\.\/functional\//, '').replace('.svg', '');
      return { ...acc, [key]: content as string };
    },
    {},
  );

const functionalSvgImport = import.meta.glob('./functional/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const functionalIcons = formatIcons(functionalSvgImport);
