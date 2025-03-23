import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

export default {
  title: 'Components/Canvas/Supergraphic',
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
      description: {
        component: 'Used with sections to apply a subtle branded finish',
      },
    },
  },
} satisfies Meta;

const Content = ({ title = 'Section title' }: { readonly title?: string }) => (
  <evg-section padding="fluid">
    <evg-wrap size="xl">
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
    </evg-wrap>
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
