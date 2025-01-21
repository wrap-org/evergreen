import React from 'react';

const description = `
Spacing is a set of utility classes that can be added to any component or element.

The spacing class name format is \`m-spacing-{direction}-{size}\`, e.g. \`m-spacing-bottom-sm\`.

Spacing tweaks are one of the most common reasons for introducing page level CSS, which is a slippery slope to a bloated CSS file. Keeping spacing separate to the component allows for a more modular and maintainable codebase.

Individual components should not create spacing around themselves. Instead, they should use spacing classes to create the desired layout.

It is generally recommended to use bottom spacing and no top spacing to prevent margin collapse.
`;

export default {
  title: 'Foundations/Utilities/Spacing',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fluid', 'fluid-lg'],
    },
  },
};

export const Spacing = (args) => {
  const cx = `m-spacing-bottom-${args.size}`;

  return (
    <>
      <div className={cx}>The future is in our hands to shape.</div>
      <div className={cx}>The future is in our hands to shape.</div>
      <div className={cx}>The future is in our hands to shape.</div>
    </>
  );
};

Spacing.args = {
  size: 'md',
};
