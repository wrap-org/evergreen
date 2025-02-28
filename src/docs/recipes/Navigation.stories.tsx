import React from 'react';

export default {
  title: 'Recipes/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Wrap(props) {
  return (
    <evg-section padding="md" {...props}>
      <evg-wrap size="xxl">
        <docs-placeholder>Navigation</docs-placeholder>
      </evg-wrap>
    </evg-section>
  );
}

export function Data(props) {
  return (
    <evg-section padding="md" {...props}>
      <evg-wrap size="xxl">
        <docs-placeholder>Navigation</docs-placeholder>
      </evg-wrap>
    </evg-section>
  );
}
