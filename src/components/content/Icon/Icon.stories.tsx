import { StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';
import { fontSizes } from '@/lib/tokens';

import { iconKeys } from './icons';

import './Icon';

const description = `
Wraps an svg icon to provide alignment and sizing.

Icons must have the appropriate fill or stroke set to currentColor.

Icons are hidden from screen readers by default and should be accompanied by text. If an icon is used on its own in a button or link, add a label prop to the component.

Evergreen uses default icons from [mono icons](https://icons.mono.company/) and adds some custom icons just for this library.

If you need to add an extra icon, you can use any SVG icon by passing it as a child of the component.`;

export default {
  component: 'evg-icon',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: iconKeys,
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['default', 'circle'],
    },
    label: {
      control: {
        type: 'text',
      },
      description: 'Aria label for the icon, if used without text.',
    },
  },
};

export const Icon: StoryFn = (props) => (
  <>
    <evg-icon {...props}></evg-icon> This is some text next to the icon
  </>
);

Icon.args = {
  icon: 'home',
  variant: 'default',
};

export const Sizes: StoryFn = () => (
  <>
    {fontSizes.map((size) => (
      <p className={`evg-text-size-${size}`} key={size}>
        <evg-icon icon="home"></evg-icon> The quick brown fox jumps over the
        lazy dog.
      </p>
    ))}
  </>
);

Sizes.parameters = {
  docs: {
    description: {
      story:
        'Icons inherit their size from the current text size or can be sized using text size classes.',
    },
  },
};

export const IconInAGrid: StoryFn = () => (
  <>
    <evg-grid align-items="baseline" gap="xs" class="evg-spacing-bottom-md">
      <evg-grid-item>
        <evg-icon class="evg-text-size-heading-md" icon="grid"></evg-icon>
      </evg-grid-item>
      <evg-grid-item grow shrink>
        <h3 className="evg-text-size-heading-md">Title text</h3>
      </evg-grid-item>
    </evg-grid>
    <evg-grid align-items="baseline" gap="xs">
      <evg-grid-item>
        <evg-icon icon="grid"></evg-icon>
      </evg-grid-item>
      <evg-grid-item grow shrink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate vel magna id varius. Donec non auctor magna, id auctor
          lacus. Vestibulum vitae ex id tortor varius fringilla. Cras in ligula
          vulputate, lacinia metus vitae, suscipit purus. Nunc lacinia porta
          urna eget accumsan. Pellentesque quis condimentum est. Aliquam leo
          risus, blandit vel volutpat et, accumsan eget purus.
        </p>
      </evg-grid-item>
    </evg-grid>
  </>
);

IconInAGrid.parameters = {
  docs: {
    description: {
      story:
        'Icons in a grid can be aligned to the text with the baseline alignment.',
    },
  },
};

export const IconColors: StoryFn = () => (
  <>
    {themes.map((theme) => (
      <evg-section class={`evg-theme-${theme}`} key={theme}>
        <evg-wrap gutter="md">
          <p>
            <evg-icon icon="edit"></evg-icon> This is a {theme} theme
          </p>
        </evg-wrap>
      </evg-section>
    ))}
  </>
);

IconColors.parameters = {
  docs: {
    description: {
      story: 'Icon colours are inherited from the current theme.',
    },
  },
};

export const CustomIcons: StoryFn = () => (
  <>
    <p>
      <evg-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
      </evg-icon>{' '}
      <a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:home:FILL@0;wght@400;GRAD@0;opsz@24">
        Material symbols
      </a>
    </p>

    <p>
      <evg-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </evg-icon>{' '}
      <a href="https://heroicons.com/">Hero icons</a>
    </p>

    <p>
      <evg-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
      </evg-icon>{' '}
      <a href="https://icons.getbootstrap.com/">Bootstrap icons</a>
    </p>

    <p>
      <evg-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </evg-icon>{' '}
      <a href="https://feathericons.com/">Feather icons</a>
    </p>
  </>
);

CustomIcons.parameters = {
  docs: {
    description: {
      story:
        'If necessary, you can use SVGs from any icon library. This story tests a few common libraries for alignment.',
    },
  },
};
