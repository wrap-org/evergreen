import React from 'react';

export default {
  title: 'Recipes/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Full(props) {
  return (
    <evg-section padding="md" class="evg-theme-forest" {...props}>
      <evg-wrap size="xxl">
        <docs-placeholder>Footer</docs-placeholder>
      </evg-wrap>
    </evg-section>
  );
}

export function Minimal(props) {
  return (
    <evg-section padding="md" class="evg-theme-forest" {...props}>
      <evg-wrap size="xxl">
        <docs-placeholder>Footer</docs-placeholder>
      </evg-wrap>
    </evg-section>
  );
}
