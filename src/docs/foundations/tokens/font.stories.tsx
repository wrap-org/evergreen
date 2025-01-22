import { Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Foundations/Tokens/Font',
} as Meta;

export const Headings = () => (
  <>
    <h1>Heading level 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>

    <h2>Heading level 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>

    <h3>Heading level 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>

    <h4>Heading level 4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula a
      dui tristique blandit. Vestibulum pellentesque tellus ac lorem bibendum
      ornare.
    </p>
  </>
);

export const Sizes = () => (
  <>
    {['xl', 'lg', 'base', 'sm', 'xs'].map((size) => (
      <p key={size} className={`m-text-size-${size}`}>
        This text is size {size}.
      </p>
    ))}
  </>
);

export const Weights = () => (
  <>
    {['light', 'base', 'bold', 'black'].map((weight) => (
      <p key={weight} className={`m-text-weight-${weight}`}>
        This text is weight {weight}.
      </p>
    ))}
  </>
);
