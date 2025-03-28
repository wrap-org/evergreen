import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

const description = `
Visual indicators that provide feedback about system operations or important information.
Alerts come in various severity levels (info, success, warning, error) with appropriate styling and can include dismiss options, icons, and action buttons.
`;

const types = {
  info: {
    title: 'Info',
    text: 'You may be interested to know this',
    button: 'Learn more',
  },
  attention: {
    title: 'Attention',
    text: 'You need to know this!',
    button: 'Try again',
  },
  positive: {
    title: 'Positive',
    text: 'It was a success!',
    button: 'Done',
  },
  negative: {
    title: 'Negative',
    text: 'Something terrible happened!',
    button: 'Try again',
  },
  neutral: {
    title: 'Neutral',
    text: 'All is as expected.',
    button: 'Learn more',
  },
};

const typeOptions = Object.keys(types) as (keyof typeof types)[];

export default {
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6337-13561&t=g3niGv3HxLa5NL0O-0',
      subtitle: 'Visual indicators providing feedback about system operations.',
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
  type: 'info',
};

export const Types: StoryFn = () => (
  <evg-grid wrap="wrap" direction="column">
    {typeOptions.map((type) => (
      <evg-grid-item key={type} small-mobile="12">
        <evg-alert type={type}>
          <evg-grid wrap="wrap" align-items="center">
            <evg-grid-item grow shrink small-mobile="12" large-mobile="auto">
              <h4 className="evg-text-size-body-sm evg-text-family-body">
                {types[type].title}
              </h4>
              <p className="evg-text-size-body-sm">{types[type].text}</p>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-mobile="auto">
              <evg-button width="full-width-mobile">
                <button>
                  {types[type].button}
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
