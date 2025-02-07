import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import './Section';
import '../../composition/Grid/Grid';
import '../../composition/Grid/GridItem';
import '../../composition/Wrap/Wrap';

const description = `
A section component represents a horizontal slice of a page.

Multiple sections and themes can be used to create visibly grouped parts
of the page with different backgrounds.

Sections support theming, applying a background colour and default
text colour based on the current theme as well as vertical spacing.
`;

export default {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: ['light', 'medium', 'dark'],
    },
    padding: {
      control: {
        type: 'select',
      },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'fluid-sm',
        'fluid',
        'fluid-lg',
        'none',
      ],
    },
  },
} as Meta;

export const Section: StoryFn = ({ padding, theme }) => (
  <evg-section padding={padding} class={`evg-theme-${theme}`}>
    <evg-wrap size="lg">
      <h3>Section title</h3>
      <p className="evg-spacing-bottom-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
      <evg-grid>
        <evg-grid-item mobile="6" tablet="auto">
          <button type="button">Button text</button>
        </evg-grid-item>
        <evg-grid-item mobile="6" tablet="auto">
          <button type="button">Button text</button>
        </evg-grid-item>
      </evg-grid>
    </evg-wrap>
  </evg-section>
);

Section.args = {
  padding: 'fluid',
  theme: 'light',
};

export const Theming: StoryFn = () => (
  <>
    {['light', 'medium', 'dark'].map((theme) => (
      <evg-section padding="fluid" class={`evg-theme-${theme}`} key={theme}>
        <evg-wrap size="lg">
          <h3>Section title</h3>
          <p className="evg-spacing-bottom-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
          <evg-grid>
            <evg-grid-item mobile="6" tablet="auto">
              <button type="button">Button text</button>
            </evg-grid-item>
            <evg-grid-item mobile="6" tablet="auto">
              <button type="button">Button text</button>
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
    ))}
  </>
);
