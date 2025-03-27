import { StoryFn } from '@storybook/react';
import React from 'react';

export default {
  component: 'label',
  parameters: {
    docs: {
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6299-12182&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: `Evergreen provides base styles applied to the \`<label>\` and \`<legend>\` elements.`,
      },
    },
  },
};

export const Label: StoryFn = () => (
  <>
    <evg-label>
      <label htmlFor="input-with-label">Label</label>
    </evg-label>
    <evg-input>
      <input id="input-with-label" />
    </evg-input>
    <evg-label variant="secondary">
      <label
        htmlFor="input-with-secondary-label"
        className="evg-spacing-top-lg"
      >
        Secondary Label
      </label>
    </evg-label>
    <evg-input>
      <input id="input-with-secondary-label" />
    </evg-input>
  </>
);

export const Legend: StoryFn = () => (
  <fieldset>
    <evg-label>
      <legend id="input-fieldset">Legend</legend>
    </evg-label>
    <evg-input>
      <input aria-labelledby="input-fieldset" />
    </evg-input>
  </fieldset>
);

export const ScreenReaderOnly: StoryFn = () => (
  <>
    <p>The invisible label content below is read by screen readers</p>
    <evg-label className="evg-sr-only">
      <label htmlFor="input-with-sr-label">Label</label>
    </evg-label>
  </>
);

ScreenReaderOnly.parameters = {
  docs: {
    description: {
      story:
        'Occasionally, a label is only helpful when a screen reader is in use. In this case, the `.evg-sr-only` class can be used to visually hide the label.',
    },
  },
};
