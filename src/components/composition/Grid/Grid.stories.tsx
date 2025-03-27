import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

const description = `
The grid and grid item components are used to create a grid layout by exposing
the most commonly used flexbox properties as attributes. The best way to understand
how to use the grid, is to understand
[flexbox layouts](https://css-tricks.com/snippets/css/a-guide-to-flexbox/),
but there are some common examples in the [grid docs](?path=/docs/components-composition-grid--docs).

The Evergreen Design System uses a fluid 12 column grid across all screen sizes,
which gives many options for dividing space into 2, 3, 4, or 6 columns.

The grid item component has various device size properties that allow you to
control the number of columns that the item will span on different screen sizes.
These come in mobile (375px), tablet (768px) and desktop (1440px), as well as small
and large variants of each (e.g. small-mobile at 320px).
`;

export default {
  title: 'Components/Composition/Grid',
  argTypes: {
    wrap: {
      control: {
        type: 'select',
      },
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    direction: {
      control: {
        type: 'select',
      },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyContent: {
      control: {
        type: 'select',
      },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: {
        type: 'select',
      },
      options: ['flex-start', 'flex-end', 'center'],
    },
    gap: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

const Template: StoryFn = (args) => (
  <evg-grid {...args}>
    {[...Array(12).keys()].map((i) => (
      <evg-grid-item grow shrink key={i}>
        <docs-placeholder class="evg-text-align-center">
          {i + 1}
        </docs-placeholder>
      </evg-grid-item>
    ))}
  </evg-grid>
);

export const Grid = Template.bind({});

Grid.args = {
  wrap: 'wrap',
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 'md',
  inline: false,
};

export const StretchOneSide = () => (
  <>
    <evg-grid class="evg-spacing-bottom-sm">
      <evg-grid-item grow shrink>
        <docs-placeholder>Grow</docs-placeholder>
      </evg-grid-item>
      <evg-grid-item>
        <docs-placeholder>Fixed</docs-placeholder>
      </evg-grid-item>
    </evg-grid>
    <evg-grid>
      <evg-grid-item>
        <docs-placeholder>Fixed</docs-placeholder>
      </evg-grid-item>
      <evg-grid-item grow shrink>
        <docs-placeholder>Grow</docs-placeholder>
      </evg-grid-item>
    </evg-grid>
  </>
);

export const PushApart = () => (
  <evg-grid justify-content="space-between">
    <evg-grid-item>
      <docs-placeholder>Left</docs-placeholder>
    </evg-grid-item>
    <evg-grid-item>
      <docs-placeholder>Right</docs-placeholder>
    </evg-grid-item>
  </evg-grid>
);

export const Centered = () => (
  <evg-grid justify-content="center">
    <evg-grid-item>
      <docs-placeholder>Centered</docs-placeholder>
    </evg-grid-item>
    <evg-grid-item>
      <docs-placeholder>Centered</docs-placeholder>
    </evg-grid-item>
    <evg-grid-item>
      <docs-placeholder>Centered</docs-placeholder>
    </evg-grid-item>
  </evg-grid>
);

export const ResponsiveColumns = () => (
  <evg-grid wrap="wrap">
    <evg-grid-item mobile="12" tablet="6" desktop="3">
      <docs-placeholder>Cell</docs-placeholder>
    </evg-grid-item>
    <evg-grid-item mobile="12" tablet="6" desktop="3">
      <docs-placeholder>Cell</docs-placeholder>
    </evg-grid-item>
    <evg-grid-item mobile="12" tablet="6" desktop="3">
      <docs-placeholder>Cell</docs-placeholder>
    </evg-grid-item>
    <evg-grid-item mobile="12" tablet="6" desktop="3">
      <docs-placeholder>Cell</docs-placeholder>
    </evg-grid-item>
  </evg-grid>
);

const responsiveColumnsDescription = `
Changes from 1-4 columns through mobile-desktop
`;

ResponsiveColumns.parameters = {
  docs: {
    description: {
      story: responsiveColumnsDescription,
    },
  },
};

export const MobileCTA = () => (
  <evg-wrapper gutter="none" size="md">
    <evg-grid wrap="wrap" direction="row-reverse">
      <evg-grid-item small-mobile="12" small-tablet="auto">
        <evg-button variant="primary" width="full-width-mobile">
          <button type="button">Continue</button>
        </evg-button>
      </evg-grid-item>
      <evg-grid-item small-mobile="12" small-tablet="auto">
        <evg-button width="full-width-mobile">
          <button type="button">Cancel</button>
        </evg-button>
      </evg-grid-item>
    </evg-grid>
  </evg-wrapper>
);

const mobileCTADescription = `
This grid uses direction and justify to put the buttons in the right
order on mobile and desktop, with primary top on mobile and right on desktop.
`;

MobileCTA.parameters = {
  docs: {
    description: {
      story: mobileCTADescription,
    },
  },
};

export const VerticalCenterContent = () => (
  <evg-wrapper gutter="none" size="sm">
    <evg-grid align-items="center">
      <evg-grid-item grow shrink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo in velit euismod ultricies id sit amet diam. Vivamus convallis
          molestie urna.
        </p>
      </evg-grid-item>
      <evg-grid-item>
        <img
          src="https://placehold.co/200x150"
          alt="Placeholder"
          width="200"
          height="150"
        />
      </evg-grid-item>
    </evg-grid>
  </evg-wrapper>
);
