import React from 'react';

import { CallToAction } from '../../recipes/Brochureware.stories';
import { AppLayout } from '../../recipes/Data.stories';

const latestStories = [
  {
    date: 'May 2024',
    title: 'Household food waste requires action',
    description: "Key finds from WRAP's measurement research",
    button: 'View story',
  },
  {
    date: 'January 2024',
    title: 'Annual Survey of Redistribution Organisations in the UK',
    description: '2023 update',
    button: 'View story',
  },
  {
    title: 'The household simulation model',
    description:
      "WRAP's data tool to understand which actions could have the most impact on reducing household food waste.",
  },
];

export function TopLevel() {
  return (
    <AppLayout>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrap size="xxl" class="evg-text-align-center">
          <evg-wrap size="md" gutter="none">
            <h1 className="evg-text-size-heading-xl evg-text-transform-uppercase evg-spacing-bottom-lg">
              Stories and insights into food waste
            </h1>
          </evg-wrap>
          <evg-grid
            gap="lg"
            justify-content="center"
            align-items="center"
            class="evg-spacing-bottom-lg"
            wrap="wrap"
          >
            <evg-grid-item>
              <evg-img block>
                <img
                  src="/images/placeholder/400x200.svg"
                  alt=""
                  width="200"
                  height="100"
                />
              </evg-img>
            </evg-grid-item>
            <evg-grid-item>
              <evg-img block>
                <img
                  src="/images/placeholder/400x400.svg"
                  alt=""
                  width="200"
                  height="200"
                />
              </evg-img>
            </evg-grid-item>
            <evg-grid-item>
              <evg-img block class="evg-spacing-bottom-lg">
                <img
                  src="/images/placeholder/400x400.svg"
                  alt=""
                  width="100"
                  height="100"
                />
              </evg-img>
              <evg-img block>
                <img
                  src="/images/placeholder/400x400.svg"
                  alt=""
                  width="100"
                  height="100"
                />
              </evg-img>
            </evg-grid-item>
            <evg-grid-item>
              <evg-img block>
                <img
                  src="/images/placeholder/400x400.svg"
                  alt=""
                  width="200"
                  height="200"
                />
              </evg-img>
            </evg-grid-item>
            <evg-grid-item>
              <evg-img block>
                <img
                  src="/images/placeholder/400x200.svg"
                  alt=""
                  width="200"
                  height="100"
                />
              </evg-img>
            </evg-grid-item>
          </evg-grid>
          <evg-wrap size="xl" gutter="none">
            <p className="evg-text-size-body-lg">
              WRAP is a climate action NGO working around the globe to tackle
              the causes of the climate crisis and give the planet a sustainable
              future. We were established in the UK in 2000; we now work in 40+
              countries. 
            </p>
          </evg-wrap>
        </evg-wrap>
      </evg-section>

      <evg-section padding="fluid">
        <evg-wrap size="lg">
          <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
            Latest stories
          </h2>

          {latestStories.map((card, i) => (
            <evg-card
              class={`${card.date ? 'evg-theme-default' : 'evg-theme-sand'} ${i < latestStories.length - 1 ? 'evg-spacing-bottom-lg' : ''}`}
              radius="md"
              padding="lg"
              key={card.title}
              layout="image-right"
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
                <evg-meta>
                  {card.date ? (
                    <span className="evg-text-size-body-xs">{card.date}</span>
                  ) : (
                    <evg-badge type="info">Coming soon</evg-badge>
                  )}
                </evg-meta>
                <h3 className="evg-text-size-heading-md">{card.title}</h3>
                <p className="evg-text-size-body-sm">{card.description}</p>
                {card.button && (
                  <evg-button variant="primary">
                    <button>
                      {card.button}
                      <evg-icon icon="arrow-right" />
                    </button>
                  </evg-button>
                )}
              </evg-card-content>
            </evg-card>
          ))}
        </evg-wrap>
      </evg-section>

      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrap size="lg">
          <evg-grid
            justify-content="space-between"
            align-items="center"
            class="evg-spacing-bottom-lg"
          >
            <evg-grid-item>
              <h2 className="evg-text-size-heading-md evg-text-transform-uppercase">
                About WRAP
              </h2>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="text">
                <a href="https://wrap.ngo">
                  Visit our main site
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
          <p>
            WRAP is a climate action NGO working around the globe to tackle the
            causes of the climate crisis and give the planet a sustainable
            future. We were established in the UK in 2000; we now work in 40+
            countries.
          </p>
          <p>
            We shouldn&apos;t waste our natural resources. Everything we use
            should be re-used and recycled.
          </p>
          <p className="evg-spacing-bottom-lg">
            Working around the globe with governments, businesses, and citizens,
            our mission is to make the world a more sustainable place. We bring
            people together, we act on the facts, and we drive change.
          </p>

          <h3 className="evg-text-size-heading-md evg-text-transform-uppercase evg-spacing-bottom-lg">
            Our services
          </h3>

          <evg-grid wrap="wrap">
            {[
              'Behaviour change',
              'Certification and standards',
              'Collaboration and collective action',
              'Finance for action and innovation',
              'Policy design and implementation',
              'Technical solutions and consultancy',
            ].map((item) => (
              <evg-grid-item
                key={item}
                small-mobile="12"
                small-tablet="6"
                tablet="4"
              >
                <evg-img radius="md">
                  <img
                    src="/images/placeholder/400x300.svg"
                    alt="Placeholder"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </evg-img>

                <h3 className="evg-text-size-heading-sm">{item}</h3>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <CallToAction
        title="Join us in leading the change"
        text="We believe in the power of working together to create long lasting change. Work with us as we lead the way to building a more sustainable future."
        button="Sign up now"
      />
    </AppLayout>
  );
}
