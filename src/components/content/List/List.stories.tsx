import { Meta, StoryFn } from '@storybook/react-vite';
import React from 'react';

const description = `
A component displaying collections of related items with various marker styles and nesting support.
List offers various styling options, including bulleted, numbered, or custom markers, along with
consistent spacing, indentation, and nested list support for structured content presentation.
`;

export default {
  parameters: {
    docs: {
      subtitle:
        'A component displaying collections of related items with various styles.',
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    spacing: {
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
  variant: {
    control: {
      type: 'radio',
    },
    options: ['unstyled', 'icon'],
  },
} as Meta;

export const List: StoryFn = (args) => (
  <evg-list {...args}>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </evg-list>
);

List.args = {
  spacing: 'none',
};

export const Unstyled: StoryFn = (args) => (
  <evg-list {...args}>
    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
    <ul role="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </evg-list>
);

Unstyled.args = {
  variant: 'unstyled',
};

const unstyledDescription = `
Removes the list styles. This is useful for semantic lists that we don't want to see visually.

**Note**: Safari does not recognize ordered or unordered lists as lists in the accessibility tree if they have a list-style value of none, unless the list is nested within the \`<nav>\` navigation element. This behavior is intentional and is not considered a bug.

To ensure lists are announced as lists, include \`role="list"\` to \`<ol>\` and \`<ul>\` elements, especially if the list is not nested in a \`<nav>\`. This restores list semantics without affecting the design.
`;

Unstyled.parameters = {
  docs: {
    description: {
      story: unstyledDescription,
    },
  },
};

export const DefinitionList: StoryFn = (args) => (
  <evg-list {...args}>
    <dl>
      <div>
        <dt>Term</dt>
        <dd>Definition</dd>
      </div>
      <div>
        <dt>Term</dt>
        <dd>Item 3</dd>
      </div>
      <div>
        <dt>Term</dt>
        <dd>Item 3</dd>
      </div>
    </dl>
  </evg-list>
);

DefinitionList.args = {
  spacing: 'none',
};

const definitionDescription = `
The \`<dl>\` HTML element represents a description list.
The element encloses a list of groups of terms (specified using the \`<dt>\` element) and descriptions (provided by \`<dd>\` elements).
`;

DefinitionList.parameters = {
  docs: {
    description: {
      story: definitionDescription,
    },
  },
};

export const Icon: StoryFn = (args) => (
  <evg-list {...args}>
    <ul>
      <li>
        <evg-icon icon="check" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        fermentum pharetra massa sed convallis. Mauris finibus justo sit amet
        lorem scelerisque consectetur.
      </li>
      <li>
        <evg-icon icon="check" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        fermentum pharetra massa sed convallis. Mauris finibus justo sit amet
        lorem scelerisque consectetur.
      </li>
      <li>
        <evg-icon icon="close" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        fermentum pharetra massa sed convallis. Mauris finibus justo sit amet
        lorem scelerisque consectetur.
      </li>
    </ul>
  </evg-list>
);

Icon.args = {
  variant: 'icon',
};
