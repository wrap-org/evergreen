import tokens from '@wrap.ngo/tokens/dist/index.css?raw';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

export interface Dictionary<T> {
  [index: string]: T;
}

function colorName(color: string, prefix) {
  return color.replace(prefix, '').replace(/-/g, ' ');
}

function sortColors(colors: string[]) {
  return [...colors].sort((a, b) => {
    const aNumberString = a.split('-').slice(-1)[0];
    const aNumber = parseInt(aNumberString, 10);

    const bNumberString = b.split('-').slice(-1)[0];
    const bNumber = parseInt(bNumberString, 10);

    if (aNumber < bNumber) {
      return -1;
    }

    if (aNumber > bNumber) {
      return 1;
    }

    return 0;
  });
}

function formatColors(colors: string[], prefix) {
  return Object.fromEntries(
    colors.map((color) => [colorName(color, prefix), `var(${color})`]),
  );
}

function formatGroups(groups: Dictionary<string[]>, prefix = '--evg-color-') {
  return map(groups, (group, groupName) => ({
    name: groupName.charAt(0).toUpperCase() + groupName.slice(1).toLowerCase(),
    colors: formatColors(sortColors(group), prefix),
  }));
}

function groupColors(colors: string[], prefix = '--evg-color-') {
  const groups = groupBy(colors, (color) => {
    if (color.includes('-stream')) {
      return color.replace(prefix, '').replace('-', ' ');
    }

    return color.replace(prefix, '').split('-')[0];
  });

  return groups;
}

const palette = tokens.match(/--evg-color-[a-z0-9-]+(?=: .*;)/g);
const containers = tokens.match(/--evg-container-color-[a-z0-9-]+(?=: .*;)/g);

export const colorGroups = formatGroups(groupColors(palette));
export const containerColorGroups = formatGroups(
  groupColors(containers, '--evg-container-color-'),
  '--evg-container-color-',
);

export const skinColorGroups = [
  'light',
  'muted-light',
  'dark',
  'muted-dark',
  'info',
  'muted-info',
  'attention',
  'muted-attention',
  'neutral',
  'muted-neutral',
  'positive',
  'muted-positive',
  'negative',
  'muted-negative',
].map((skin) => ({
  name: skin.charAt(0).toUpperCase() + skin.slice(1),
  colors: {
    background: `var(--evg-skin-background-${skin})`,
    border: `var(--evg-skin-border-color-${skin})`,
    color: `var(--evg-skin-color-${skin})`,
    heading: `var(--evg-skin-heading-color-${skin.replace('muted-', '')})`,
    link: `var(--evg-skin-link-color-${skin.replace('muted-', '')})`,
  },
}));

export const buttonColorGroups = [
  'default',
  'primary',
  'secondary',
  'positive',
  'negative',
].map((type) => ({
  name: type.charAt(0).toUpperCase() + type.slice(1),
  colors: {
    background: `var(--evg-button-background-${type})`,
    'background hover': `var(--evg-button-background-hover-${type})`,
    'background focus': `var(--evg-button-background-focus-${type})`,
    'background disabled': `var(--evg-button-background-disabled-${type})`,

    border: `var(--evg-button-border-color-${type})`,
    'border hover': `var(--evg-button-border-color-hover-${type})`,
    'border focus': `var(--evg-button-border-color-focus-${type})`,
    'border disabled': `var(--evg-button-border-color-disabled-${type})`,

    color: `var(--evg-button-color-${type})`,
    'color hover': `var(--evg-button-color-hover-${type})`,
    'color focus': `var(--evg-button-color-focus-${type})`,
    'color disabled': `var(--evg-button-color-disabled-${type})`,
  },
}));
