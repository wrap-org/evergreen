import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

// eslint-disable-next-line import/no-unresolved
import tokens from '!!raw-loader!@etchteam/mobius-tokens/dist/index.css';

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

function formatGroups(
  groups: Dictionary<string[]>,
  prefix = '--mobius-color-',
) {
  return map(groups, (group, groupName) => ({
    name: groupName.charAt(0).toUpperCase() + groupName.slice(1).toLowerCase(),
    colors: formatColors(sortColors(group), prefix),
  }));
}

function groupColors(colors: string[], prefix = '--mobius-color-') {
  const groups = groupBy(colors, (color) => {
    if (color.includes('-stream')) {
      return color.replace(prefix, '').replace('-', ' ');
    }

    return color.replace(prefix, '').split('-')[0];
  });

  return groups;
}

const palette = tokens.match(/--mobius-color-[a-z0-9-]+(?=: .*;)/g);
const containers = tokens.match(
  /--mobius-container-color-[a-z0-9-]+(?=: .*;)/g,
);

export const colorGroups = formatGroups(groupColors(palette));
export const containerColorGroups = formatGroups(
  groupColors(containers, '--mobius-container-color-'),
  '--mobius-container-color-',
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
    background: `var(--mobius-skin-background-${skin})`,
    border: `var(--mobius-skin-border-color-${skin})`,
    color: `var(--mobius-skin-color-${skin})`,
    heading: `var(--mobius-skin-heading-color-${skin.replace('muted-', '')})`,
    link: `var(--mobius-skin-link-color-${skin.replace('muted-', '')})`,
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
    background: `var(--mobius-button-background-${type})`,
    'background hover': `var(--mobius-button-background-hover-${type})`,
    'background focus': `var(--mobius-button-background-focus-${type})`,
    'background disabled': `var(--mobius-button-background-disabled-${type})`,

    border: `var(--mobius-button-border-color-${type})`,
    'border hover': `var(--mobius-button-border-color-hover-${type})`,
    'border focus': `var(--mobius-button-border-color-focus-${type})`,
    'border disabled': `var(--mobius-button-border-color-disabled-${type})`,

    color: `var(--mobius-button-color-${type})`,
    'color hover': `var(--mobius-button-color-hover-${type})`,
    'color focus': `var(--mobius-button-color-focus-${type})`,
    'color disabled': `var(--mobius-button-color-disabled-${type})`,
  },
}));
