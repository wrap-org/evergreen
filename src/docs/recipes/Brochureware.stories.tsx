import React from 'react';

import Badge from 'components/react/content/Badge/Badge';
import Button from 'components/react/controls/Button/Button';

export default {
  title: 'Recipes/Brochureware',
  parameters: {
    layout: 'fullscreen',
  },
};

const cardsPlaceholder: {
  title: string;
  description: string;
  layout: 'image-left' | 'image-right';
}[] = [
  {
    title: 'Our work in action',
    description: `Our case studies illustrate some of the work we have done to benefit the climate, nature and people. Explore details about the impact we\'ve had through our initiatives, collaborations and resources.`,
    layout: 'image-left',
  },
  {
    title: 'Our global impact',
    description: `Throughout the past 20+ years, we have created meaningful change in over 40 countries. In the UK alone,we have united close to 700 organisations. We have multiple international pacts and partnerships, and we work with governments and governmental organisations around the world.`,
    layout: 'image-right',
  },
];

export function CardList({
  theme = 'default',
  title,
  cards = cardsPlaceholder,
}: {
  readonly theme?: 'default' | 'earth-light';
  readonly title?: string;
  readonly cards?: {
    title: string;
    description: string;
    layout: 'image-left' | 'image-right';
  }[];
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
          <evg-card
            class={`evg-theme-default ${i < cards.length - 1 ? 'evg-spacing-bottom-lg' : ''}`}
            radius="md"
            padding="lg"
            key={i}
            layout={card.layout}
          >
            <evg-card-img>
              <img
                src="/images/placeholder/400x300.svg"
                alt="Placeholder"
                width="400"
                height="300"
                loading="lazy"
              />
            </evg-card-img>
            <evg-card-content>
              <h3 className="evg-text-size-heading-md">{card.title}</h3>
              <p className="evg-text-size-body-sm">{card.description}</p>
              <Button type="primary" block>
                Read more
              </Button>
            </evg-card-content>
          </evg-card>
        ))}
      </evg-wrap>
    </evg-section>
  );
}

export function Featured({
  theme = 'default',
  size = 'xl',
  title = 'Section title',
  card = {
    title: 'Card title',
    description: 'Card description',
  },
}: {
  readonly theme?: 'default' | 'lime-light';
  readonly size?: 'lg' | 'xl';
  readonly title?: string;
  readonly card?: { title: string; description: string; meta?: boolean };
}) {
  return (
    <evg-section padding="fluid" class={`evg-theme-${theme}`}>
      <evg-wrap size={size}>
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          {title}
        </h2>
        <evg-card
          layout="image-left"
          class="evg-theme-forest"
          radius="md"
          padding="lg"
        >
          <evg-card-img>
            <img
              src={
                size === 'xl'
                  ? '/images/placeholder/400x200.svg'
                  : '/images/placeholder/400x300.svg'
              }
              alt="Placeholder"
              width="400"
              height={size === 'xl' ? '200' : '300'}
              loading="lazy"
            />
          </evg-card-img>
          <evg-card-content>
            {card.meta && (
              <evg-meta>
                <Badge className="evg-theme-forest-light">Guide</Badge>
                <span className="evg-text-size-body-sm">March 1, 2023</span>
              </evg-meta>
            )}
            <h3 className="evg-text-size-heading-md">{card.title}</h3>
            <p className="evg-text-size-body-sm">{card.description}</p>
            <Button type="primary" block="mobile">
              Read more
            </Button>
          </evg-card-content>
        </evg-card>
      </evg-wrap>
    </evg-section>
  );
}

export function CardRow({
  theme = 'default',
  title = 'Section title',
  cards = [],
}: {
  readonly theme?: 'default' | 'earth-light';
  readonly title?: string;
  readonly cards?: { title: string; description: string; theme: string }[];
}) {
  return (
    <evg-section padding="fluid" class={`evg-theme-${theme}`}>
      <evg-wrap size="xl">
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          {title}
        </h2>

        <evg-grid wrap="wrap">
          {cards.map((item, index) => (
            <evg-grid-item
              key={index}
              small-mobile="12"
              small-tablet="6"
              large-tablet="3"
              fill
            >
              <a href="https://wrap.ngo">
                <evg-card class={item.theme} radius="md">
                  <evg-card-img>
                    <img
                      src="/images/placeholder/400x300.svg"
                      alt="Placeholder"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                  </evg-card-img>
                  <evg-card-content>
                    <h3 className="evg-text-size-body-md evg-text-family-body">
                      {item.title}
                    </h3>
                    <p className="evg-text-size-body-sm">{item.description}</p>
                  </evg-card-content>
                </evg-card>
              </a>
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
