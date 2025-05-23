import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

const description = `
This versatile graphic asset maintains brand identity while allowing for creative applications
across different formats and contexts. Use it to enhance brand consistency while adding visual
depth to your designs.

A supergraphic component can be wrapped around a section to apply a subtle branded finish.
The [theme](?path=/docs/foundations-utilities-theme--docs) should be applied to the supergraphic
and the section will inherit it.

The supergraphic can be positioned in one of the four corners of the section.
`;

export default {
  argTypes: {
    position: {
      control: {
        type: 'select',
      },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle:
        'An adaptable visual element derived from WRAP’s globe emblem that adds texture and visual interest to the brand.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6339-14667&t=g3niGv3HxLa5NL0O-0',
      description: {
        component: description,
      },
      theming: true,
    },
  },
} satisfies Meta;

const Content = ({ title = 'Section title' }: { readonly title?: string }) => (
  <evg-section padding="fluid">
    <evg-wrapper size="xl">
      <evg-grid>
        <evg-grid-item small-mobile="12" tablet="8" small-desktop="7">
          <h2 className="evg-spacing-bottom-sm">{title}</h2>
          <p className="evg-spacing-bottom-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
          <evg-grid>
            <evg-grid-item small-mobile="6" small-tablet="auto">
              <evg-button variant="primary" width="full-width-mobile">
                <button type="button">Button text</button>
              </evg-button>
            </evg-grid-item>
            <evg-grid-item small-mobile="6" small-tablet="auto">
              <evg-button width="full-width-mobile">
                <button type="button">Button text</button>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </evg-grid-item>
      </evg-grid>
    </evg-wrapper>
  </evg-section>
);

export const Supergraphic: StoryFn = (args) => (
  <evg-supergraphic {...args}>
    <Content />
  </evg-supergraphic>
);

Supergraphic.args = {
  position: 'bottom-right',
};

export const Theming: StoryFn = (args) => (
  <>
    {themes.map((theme) => (
      <evg-supergraphic class={`evg-theme-${theme}`} key={theme} {...args}>
        <Content />
      </evg-supergraphic>
    ))}
  </>
);

Theming.args = {
  position: 'bottom-right',
};

export const Positioning: StoryFn = () => (
  <>
    <evg-supergraphic class="evg-theme-earth-light" position="top-left">
      <Content title="Top left" />
    </evg-supergraphic>
    <evg-supergraphic class="evg-theme-earth-light" position="top-right">
      <Content title="Top right" />
    </evg-supergraphic>
    <evg-supergraphic class="evg-theme-earth-light" position="bottom-left">
      <Content title="Bottom left" />
    </evg-supergraphic>
    <evg-supergraphic class="evg-theme-earth-light" position="bottom-right">
      <Content title="Bottom right" />
    </evg-supergraphic>
  </>
);
