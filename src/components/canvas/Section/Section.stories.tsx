import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

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
      theming: true,
    },
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: themes,
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
} satisfies Meta;

const Content = ({ theme }: { readonly theme?: string }) => (
  <evg-wrapper size="lg">
    <h2 className="evg-spacing-bottom-sm">Section title</h2>
    <p className="evg-spacing-bottom-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam.
    </p>
    <evg-grid>
      <evg-grid-item small-mobile="6" small-tablet="auto">
        <evg-button
          variant={theme === 'lime' ? 'default' : 'primary'}
          width="full-width-mobile"
        >
          <button type="button">Button text</button>
        </evg-button>
      </evg-grid-item>
      <evg-grid-item small-mobile="6" small-tablet="auto">
        <evg-button
          width="full-width-mobile"
          variant={theme === 'lime' ? 'secondary' : 'default'}
        >
          <button type="button">Button text</button>
        </evg-button>
      </evg-grid-item>
    </evg-grid>
  </evg-wrapper>
);

export const Section: StoryFn = ({ theme, ...props }) => (
  <evg-section class={`evg-theme-${theme}`} {...props}>
    <Content theme={theme} />
  </evg-section>
);

Section.args = {
  padding: 'fluid',
  theme: 'light',
};

export const Theming: StoryFn = () => (
  <>
    {themes.map((theme) => (
      <evg-section padding="fluid" class={`evg-theme-${theme}`} key={theme}>
        <Content theme={theme} />
      </evg-section>
    ))}
  </>
);

export const WithImage: StoryFn = () => (
  <evg-section padding="fluid">
    <evg-section-img text="light">
      <img
        src="/images/placeholder/page-header.webp"
        alt="Placeholder"
        slot="image"
        width="1280"
        height="640"
      />
      <Content />
    </evg-section-img>
  </evg-section>
);

export const WithNestedImage: StoryFn = () => (
  <>
    {['sand', 'earth', 'forest'].map((theme) => (
      <evg-section padding="fluid" class={`evg-theme-${theme}`} key={theme}>
        <evg-section-img text="light" layout="nested">
          <img
            src="/images/placeholder/page-header.webp"
            alt="Placeholder"
            slot="image"
            width="1280"
            height="640"
          />
          <Content />
        </evg-section-img>
      </evg-section>
    ))}
  </>
);
