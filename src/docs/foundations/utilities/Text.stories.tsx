import { Meta } from '@storybook/react';
import classNames from 'classnames';
import React from 'react';

import { colors } from 'lib/tokens';

const alignments = ['left', 'center', 'right'];

const sizes = [
  'display-lg',
  'display-md',
  'display-sm',
  'heading-xl',
  'heading-lg',
  'heading-md',
  'heading-sm',
  'heading-xs',
  'heading-xxs',
  'body-xl',
  'body-lg',
  'body-md',
  'body-sm',
  'body-xs',
];

const transforms = ['uppercase', 'lowercase', 'capitalize'];

const weights = ['base', 'light', 'bold', 'black'];

const wraps = ['balance', 'pretty'];

export default {
  title: 'Foundations/Utilities/Text',
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: [
        'div',
        'span',
        'p',
        'a',
        'strong',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
    },
    align: {
      control: {
        type: 'radio',
      },
      options: alignments,
    },
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
    transform: {
      control: {
        type: 'radio',
      },
      options: transforms,
    },
    weight: {
      control: {
        type: 'select',
      },
      options: weights,
    },
    wrap: {
      control: {
        type: 'radio',
      },
      options: wraps,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A set of utility classes that can be added to any component or element to alter the text style.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta;

export const Text = (args) => {
  const { as, ...rest } = args;

  const cxObj = {};

  Object.keys(rest).forEach((key) => {
    if (rest[key]) {
      cxObj[`evg-text-${key}-${rest[key]}`] = true;
    }
  });

  const cx = classNames(cxObj);

  const Element = as ?? 'span';

  return <Element className={cx}>The future is in our hands to shape.</Element>;
};

Text.args = {};

export const Sizes = () => {
  return (
    <>
      {sizes.map((size) => (
        <p key={size} className={`evg-text-size-${size}`}>
          This text is size {size}
        </p>
      ))}
    </>
  );
};

export const Colors = () => {
  return (
    <>
      {colors.map((color) => (
        <p key={color} className={`evg-text-color-${color}`}>
          {color}
        </p>
      ))}
    </>
  );
};

export const Weights = () => {
  return (
    <>
      {weights.map((weight) => (
        <p key={weight} className={`evg-text-weight-${weight}`}>
          This text is weighted {weight}.
        </p>
      ))}
    </>
  );
};

export const Align = () => {
  return (
    <>
      {alignments.map((alignment) => (
        <p key={alignment} className={`evg-text-align-${alignment}`}>
          This text is {alignment} aligned.
        </p>
      ))}
    </>
  );
};
