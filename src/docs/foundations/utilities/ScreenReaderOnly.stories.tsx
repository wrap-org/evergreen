import React from 'react';

const description = `
Screen reader only content is hidden visually but read by screen readers.

This is useful for providing required context to screen reader users without cluttering the visual interface.
`;

export default {
  title: 'Foundations/Utilities/Screen Reader Only',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const ScreenReaderOnly = () => {
  return (
    <>
      <p>The invisible content below is read by screen readers</p>
      <p className="evg-sr-only">
        This content is read by a screen reader only.
      </p>
    </>
  );
};
