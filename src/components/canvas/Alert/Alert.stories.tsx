import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

const description = `
Callout for key information within a page. Use and content should be kept to a minimum.
`;

const variants = {
  postive: {
    title: 'Postive',
    text: 'It was a success!',
    button: 'Continue',
  },
  'postive light': {
    title: 'Postive light',
    text: 'It was a success!',
    button: 'Continue',
  },
  negative: {
    title: 'Negative',
    text: 'Something terrible happened!',
    button: 'Try again',
  },
  'negative light': {
    title: 'Negative light',
    text: 'Something terrible happened!',
    button: 'Try again',
  },
  neutral: {
    title: 'Neutral',
    text: 'All is as expected.',
    button: 'Learn more',
  },
  'neutral light': {
    title: 'Neutral light',
    text: 'All is as expected.',
    button: 'Learn more',
  },
};

const typeOptions = Object.keys(variants) as (keyof typeof variants)[];

export default {
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6337-13561&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: typeOptions,
    },
  },
} satisfies Meta;

export const Alert: StoryFn = ({ ...props }) => (
  <evg-alert {...props}>
    <docs-placeholder>Alert content</docs-placeholder>
  </evg-alert>
);

Alert.args = {
  type: 'postive',
};

export const Types: StoryFn = () => (
  <evg-grid wrap="wrap" direction="column">
    {typeOptions.map((variant) => (
      <evg-grid-item key={variant} small-mobile="12">
        <evg-alert type={variant}>
          <evg-grid wrap="wrap" align-items="center">
            <evg-grid-item grow shrink small-mobile="12" large-mobile="auto">
              <h4 className="evg-text-size-body-sm evg-text-family-body">
                {variants[variant].title}
              </h4>
              <p className="evg-text-size-body-sm">{variants[variant].text}</p>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-mobile="auto">
              <evg-button width="full-width-mobile">
                <button>
                  {variants[variant].button}
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </evg-alert>
      </evg-grid-item>
    ))}
  </evg-grid>
);
