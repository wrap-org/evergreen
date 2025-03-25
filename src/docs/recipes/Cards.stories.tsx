import React from 'react';

export default {
  title: 'Recipes/Cards',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Grid({
  theme = 'earth-light',
  title = 'Section with a grid of cards',
  cards = [
    {
      title: "Extending Product Lifetimes: WRAP's Work on Clothing Durability",
    },
    {
      title: "Extending Product Lifetimes: WRAP's Work on Clothing Durability",
    },
    {
      title: "Extending Product Lifetimes: WRAP's Work on Clothing Durability",
    },
  ],
}: {
  readonly theme?: 'default' | 'earth-light';
  readonly title?: string;
  readonly cards?: { title: string }[];
}) {
  return (
    <evg-section padding="fluid" class={`evg-theme-${theme}`}>
      <evg-wrap size="xl">
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          {title}
        </h2>

        <evg-grid wrap="wrap">
          {cards.map((item) => (
            <evg-grid-item
              key={item.title}
              small-mobile="12"
              small-tablet="6"
              large-tablet="4"
              fill
            >
              <a href="https://wrap.ngo">
                <evg-card class="evg-theme-default" radius="md">
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
                    <evg-meta>
                      <evg-badge type="info">Info</evg-badge>
                      <span className="evg-text-size-body-xs">Jan 1, 2025</span>
                    </evg-meta>

                    <h3 className="evg-text-size-body-md evg-text-family-body">
                      {item.title}
                    </h3>
                    <evg-button variant="primary">
                      <a href="https://wrap.ngo">Read more</a>
                    </evg-button>
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

export function Featured({
  theme = 'default',
  size = 'xl',
  title = 'Section with a featured card',
  card = {
    title: "Extending Product Lifetimes: WRAP's Work on Clothing Durability",
    description:
      "Through our Clothing Longevity Protocol and our collaboration with the Leeds Institute of Textiles and Colour (LITAC) on the Durability Research Project as part of Textiles 2030, we have transformed the fashion industry's approach to product design.",
    meta: true,
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
              src="/images/placeholder/400x300.svg"
              alt="Placeholder"
              width="400"
              height="300"
              loading="lazy"
            />
          </evg-card-img>
          <evg-card-content>
            {card.meta && (
              <evg-meta>
                <evg-badge type="info">Info</evg-badge>
                <span className="evg-text-size-body-sm">March 1, 2023</span>
              </evg-meta>
            )}
            <h3 className="evg-text-size-heading-md evg-text-transform-uppercase">
              {card.title}
            </h3>
            <p className="evg-text-size-body-sm">{card.description}</p>
            <evg-button variant="primary" width="full-width-mobile">
              <button>Read more</button>
            </evg-button>
          </evg-card-content>
        </evg-card>
      </evg-wrap>
    </evg-section>
  );
}

export function List({
  theme = 'default',
  title,
  cards = [
    {
      title: 'Our work in action',
      description: `Our case studies illustrate some of the work we have done to benefit the climate, nature and people. Explore details about the impact we've had through our initiatives, collaborations and resources.`,
      layout: 'image-left',
    },
    {
      title: 'Our global impact',
      description: `Throughout the past 20+ years, we have created meaningful change in over 40 countries. In the UK alone,we have united close to 700 organisations. We have multiple international pacts and partnerships, and we work with governments and governmental organisations around the world.`,
      layout: 'image-right',
    },
  ],
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
            key={card.title}
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
              <evg-button variant="primary" width="full-width">
                <button>
                  Read more
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-card-content>
          </evg-card>
        ))}
      </evg-wrap>
    </evg-section>
  );
}

export function Row({
  theme = 'default',
  title = 'Section title',
  cards = [
    {
      title: 'Card title',
      description: 'Card description',
      theme: 'default',
    },
    {
      title: 'Card title',
      description: 'Card description',
      theme: 'default',
    },
    {
      title: 'Card title',
      description: 'Card description',
      theme: 'default',
    },
    {
      title: 'Card title',
      description: 'Card description',
      theme: 'default',
    },
  ],
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
          {cards.map((item) => (
            <evg-grid-item
              key={item.title}
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

export function ThumbList() {
  const cards = [0, 1, 2, 3];
  return (
    <evg-section padding="fluid" class="evg-theme-earth-light">
      <evg-wrap size="xl">
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          Section with a list of cards
        </h2>
        {cards.map((card, i) => (
          <evg-card
            class={`evg-theme-default ${i < cards.length - 1 ? 'evg-spacing-bottom-lg' : ''}`}
            radius="md"
            key={card}
            layout="thumb"
          >
            <evg-card-img>
              <evg-thumbnail size="xl">
                <evg-icon icon="document-download" />
              </evg-thumbnail>
            </evg-card-img>
            <evg-card-content>
              <h3 className="evg-text-size-heading-md">
                Extending Product Lifetimes: WRAP&apos;s Work on Clothing
                Durability
              </h3>
              <p className="evg-text-size-body-sm">
                Through our Clothing Longevity Protocol and our collaboration
                with the Leeds Institute of Textiles and Colour (LITAC) on the
                Durability Research Project as part of Textiles 2030, we have
                transformed the fashion industry&apos;s approach to product
                design.
              </p>
              <evg-grid justify-content="space-between" align-items="center">
                <evg-grid-item>
                  <evg-meta>
                    <evg-badge type="info">Info</evg-badge>
                    <span className="evg-text-size-body-sm">Jan 1, 2025</span>
                  </evg-meta>
                </evg-grid-item>
                <evg-grid-item>
                  <evg-button variant="primary">
                    <button>Read more</button>
                  </evg-button>
                </evg-grid-item>
              </evg-grid>
            </evg-card-content>
          </evg-card>
        ))}
      </evg-wrap>
    </evg-section>
  );
}

export function People() {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <evg-section padding="fluid" class="evg-theme-earth-light">
      <evg-wrap size="xl">
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          Leadership
        </h2>

        <evg-grid wrap="wrap">
          {cards.map((item) => (
            <evg-grid-item
              key={item}
              small-mobile="12"
              small-tablet="6"
              large-tablet="4"
              fill
            >
              <a href="https://wrap.ngo">
                <evg-card class="evg-theme-default" radius="md" layout="thumb">
                  <evg-card-img>
                    <evg-thumbnail size="xl">
                      <img
                        src="/images/placeholder/400x400.svg"
                        alt="Placeholder"
                        width="400"
                        height="400"
                        loading="lazy"
                      />
                    </evg-thumbnail>
                  </evg-card-img>
                  <evg-card-content>
                    <h3 className="evg-text-size-body-md evg-text-family-body">
                      Joanne Doe
                    </h3>
                    <p className="evg-text-size-body-sm">Job title</p>
                    <evg-meta>
                      <evg-badge type="info">Trustee</evg-badge>
                    </evg-meta>
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

export function SearchResults() {
  const cards = [0, 1, 2, 3, 4, 5];
  return (
    <evg-section padding="fluid" class="evg-theme-earth-light">
      <evg-wrap size="xxl">
        <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
          Search results
        </h2>

        <evg-grid wrap="wrap">
          {cards.map((item) => (
            <evg-grid-item key={item} small-mobile="12" small-tablet="6" fill>
              <a href="https://wrap.ngo">
                <evg-card class="evg-theme-default" radius="md" layout="thumb">
                  <evg-card-img>
                    <evg-thumbnail size="xl">
                      <img
                        src="/images/placeholder/400x400.svg"
                        alt="Placeholder"
                        width="400"
                        height="400"
                        loading="lazy"
                      />
                    </evg-thumbnail>
                  </evg-card-img>
                  <evg-card-content>
                    <h3 className="evg-text-size-body-md evg-text-family-body">
                      Extending Product Lifetimes: WRAP&apos;s Work on Clothing
                      Durability
                    </h3>
                    <evg-meta>
                      <evg-badge type="info">Article</evg-badge>
                      <span className="evg-text-size-body-sm">Jan 1, 2025</span>
                    </evg-meta>
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

export function Articles() {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <evg-section padding="fluid" class="evg-theme-earth-light">
      <evg-wrap size="xxl">
        <evg-grid class="evg-spacing-bottom-lg" align-items="center">
          <evg-grid-item grow shrink>
            <h2 className="evg-text-size-heading-md evg-text-transform-uppercase">
              Latest articles
            </h2>
          </evg-grid-item>
          <evg-grid-item>
            <evg-button variant="text">
              <a href="https://wrap.ngo">
                Visit all articles
                <evg-icon icon="arrow-right" />
              </a>
            </evg-button>
          </evg-grid-item>
        </evg-grid>

        <evg-grid wrap="wrap">
          {cards.map((item) => (
            <evg-grid-item
              key={item}
              small-mobile="12"
              small-tablet="6"
              large-tablet="3"
              fill
            >
              <a href="https://wrap.ngo">
                <evg-card class="evg-theme-default" radius="md">
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
                    <evg-meta>
                      <evg-badge>Article</evg-badge>
                      <span className="evg-text-size-body-sm">Jan 1, 2025</span>
                    </evg-meta>
                    <h3 className="evg-text-size-body-md evg-text-family-body">
                      Extending Product Lifetimes: WRAP&apos;s Work on Clothing
                      Durability
                    </h3>
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
