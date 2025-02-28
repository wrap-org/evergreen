import React from 'react';

export default {
  title: 'Recipes/Brochureware',
  parameters: {
    layout: 'fullscreen',
  },
};

export function CardList({
  theme = 'default',
  title,
  cards = [1, 2],
}: {
  readonly theme?: 'default' | 'earth-light';
  readonly title?: string;
  readonly cards?: number[];
}) {
  return (
    <evg-section padding="fluid" class={`evg-theme-${theme}`}>
      <evg-wrap size="lg">
        {title && (
          <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
            {title}
          </h2>
        )}
        {cards.map((card, i) => (
          <docs-placeholder
            key={card}
            class={i < cards.length - 1 ? 'evg-spacing-bottom-lg' : ''}
          >
            Card
          </docs-placeholder>
        ))}
      </evg-wrap>
    </evg-section>
  );
}

export function Featured({
  theme = 'default',
  size = 'xl',
  title = 'Section title',
}: {
  readonly theme?: 'default' | 'lime-light';
  readonly size?: 'lg' | 'xl';
  readonly title?: string;
}) {
  return (
    <evg-section padding="fluid" class={`evg-theme-${theme}`}>
      <evg-wrap size={size}>
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          {title}
        </h2>
        <docs-placeholder>Card</docs-placeholder>
      </evg-wrap>
    </evg-section>
  );
}

export function CardRow({
  theme = 'default',
  title = 'Section title',
  cards = [1, 2, 3, 4],
}: {
  readonly theme?: 'default' | 'earth-light';
  readonly title?: string;
  readonly cards?: number[];
}) {
  return (
    <evg-section padding="fluid" class={`evg-theme-${theme}`}>
      <evg-wrap size="xl">
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          {title}
        </h2>

        <evg-grid wrap="wrap">
          {cards.map((_, index) => (
            <evg-grid-item
              key={index}
              small-mobile="12"
              small-tablet="6"
              large-tablet="3"
            >
              <docs-placeholder>Card</docs-placeholder>
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-wrap>
    </evg-section>
  );
}

export function CallToAction({
  title = 'Section title',
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  button = 'Button',
}: {
  readonly title?: string;
  readonly text?: string;
  readonly button?: string;
}) {
  return (
    <evg-section padding="fluid" class="evg-theme-lime">
      <evg-wrap size="xl">
        <evg-grid wrap="wrap" gap="fluid">
          <evg-grid-item small-mobile="12" tablet="6">
            <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase">
              {title}
            </h2>
          </evg-grid-item>
          <evg-grid-item small-mobile="12" tablet="6">
            <p className="evg-spacing-bottom-md">{text}</p>
            <docs-placeholder inline>{button}</docs-placeholder>
          </evg-grid-item>
        </evg-grid>
      </evg-wrap>
    </evg-section>
  );
}
