import { StoryFn } from '@storybook/react';
import startCase from 'lodash/startCase';
import React from 'react';

const variants = ['default', 'primary', 'secondary', 'ghost'] as const;

export default {
  component: 'evg-button',
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7485',
      description: {
        component:
          'Provides styles for default HTML button elements that can be enhanced by wrapping them in a `evg-button` component.',
      },
    },
    a11y: {
      config: {
        rules: [{ id: 'label', enabled: false }],
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md'],
    },
    width: {
      control: {
        type: 'select',
      },
      options: ['full-width', 'full-width-mobile', 'square'],
    },
  },
};

export const Button: StoryFn = (props) => (
  <evg-button {...props}>
    <button type="button">Button</button>
  </evg-button>
);

export const AnchorButton: StoryFn = (props) => (
  <evg-button {...props}>
    <a href="https://wrap.ngo">Anchor</a>
  </evg-button>
);

export const Variants: StoryFn = () => (
  <evg-grid wrap="wrap" align-items="center">
    {variants.map((variant) => (
      <evg-grid-item key={variant}>
        <evg-button variant={variant}>
          <button>{startCase(variant)}</button>
        </evg-button>
      </evg-grid-item>
    ))}
  </evg-grid>
);

export const Sizes: StoryFn = () => (
  <evg-grid align-items="center">
    <evg-grid-item>
      <evg-button size="sm">
        <button type="button">Button</button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button size="md">
        <button type="button">Button</button>
      </evg-button>
    </evg-grid-item>
  </evg-grid>
);

export const IconOnlyButton: StoryFn = () => (
  <evg-grid wrap="wrap" align-items="center">
    <evg-grid-item>
      <evg-button width="square">
        <button type="button" aria-label="Button text">
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button variant="ghost" width="square">
        <button type="button" aria-label="Button text">
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </evg-button>
    </evg-grid-item>
  </evg-grid>
);

export const HtmlButtonTypes: StoryFn = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item>
      <evg-button>
        <button>Default</button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <input type="button" value="<input>" />
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <button>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="currentColor"
            ></path>
          </svg>
          Icon
        </button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <button type="submit">Submit</button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <button type="button">Type Button</button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <button type="reset">Reset</button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <button disabled>Disabled</button>
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <input type="file" />
      </evg-button>
    </evg-grid-item>
    <evg-grid-item>
      <evg-button>
        <input type="file" disabled />
      </evg-button>
    </evg-grid-item>
  </evg-grid>
);

HtmlButtonTypes.parameters = {
  docs: {
    description: {
      story: 'Button styles can apply to all button-like HTML elements',
    },
  },
};
