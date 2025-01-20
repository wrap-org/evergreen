import { Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Foundations/Tokens/Typography',
} as Meta;

export const Typography = () => (
  <>
    <span>base</span>
    <div className="m-text-size-base m-spacing-bottom-md">
      The future is in our hands to shape.
    </div>

    <span>xs</span>
    <div className="m-text-size-xs m-spacing-bottom-md">
      The future is in our hands to shape.
    </div>

    <span>sm</span>
    <div className="m-text-size-base m-spacing-bottom-md">
      The future is in our hands to shape.
    </div>

    <span>md</span>
    <div className="m-text-size-md m-spacing-bottom-md">
      The future is in our hands to shape.
    </div>

    <span>lg</span>
    <div className="m-text-size-lg m-spacing-bottom-md">
      The future is in our hands to shape.
    </div>

    <span>xl</span>
    <div className="m-text-size-xl m-spacing-bottom-md">
      The future is in our hands to shape.
    </div>

    <span>h1</span>
    <h1 className="m-spacing-bottom-md">
      The future is in our hands to shape.
    </h1>

    <span>h2</span>
    <h2 className="m-spacing-bottom-md">
      The future is in our hands to shape.
    </h2>

    <span>h3</span>
    <h3 className="m-spacing-bottom-md">
      The future is in our hands to shape.
    </h3>

    <span>h4</span>
    <h4 className="m-spacing-bottom-md">
      The future is in our hands to shape.
    </h4>

    <span>h5</span>
    <h5 className="m-spacing-bottom-md">
      The future is in our hands to shape.
    </h5>

    <span>h6</span>
    <h6 className="m-spacing-bottom-md">
      The future is in our hands to shape.
    </h6>
  </>
);
