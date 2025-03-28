import React from 'react';

import { Data as AppLayout } from '../../recipes/App.stories';
import { Banner } from '../../recipes/Banner.stories';

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

export function ProjectLandingPage() {
  return (
    <AppLayout>
      <evg-supergraphic position="bottom-left" class="evg-theme-sand">
        <evg-section padding="fluid-lg">
          <evg-wrapper size="xxl">
            <evg-wrapper size="xxl" gutter="none">
              <evg-grid gap="lg" wrap="wrap">
                <evg-grid-item small-mobile="12" tablet="6">
                  <h1 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
                    Stories and insights into food waste
                  </h1>
                </evg-grid-item>
                <evg-grid-item small-mobile="12" tablet="6">
                  <p className="evg-text-size-body-lg">
                    WRAP is a climate action NGO working around the globe to
                    tackle the causes of the climate crisis and give the planet
                    a sustainable future. We were established in the UK in 2000;
                    we now work in 40+ countries.
                  </p>
                </evg-grid-item>
              </evg-grid>
            </evg-wrapper>
          </evg-wrapper>
        </evg-section>
      </evg-supergraphic>

      <evg-section padding="fluid">
        <evg-wrapper size="lg">
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
                  src="/images/placeholder/400x200.svg"
                  alt="Placeholder"
                  width="400"
                  height="200"
                  loading="lazy"
                />
              </evg-card-img>
              <evg-card-content>
                <evg-row>
                  {card.date ? (
                    <>
                      <evg-badge variant="earth">Case study</evg-badge>
                      <span className="evg-text-size-body-xs">{card.date}</span>
                    </>
                  ) : (
                    <evg-badge variant="sky-light">Coming soon</evg-badge>
                  )}
                </evg-row>
                <h3 className="evg-text-size-body-md evg-text-weight-base evg-text-family-body">
                  {card.title}
                </h3>
                <p className="evg-text-size-body-xs">{card.description}</p>
                {card.button && (
                  <evg-button variant="primary">
                    <button>{card.button}</button>
                  </evg-button>
                )}
              </evg-card-content>
            </evg-card>
          ))}
        </evg-wrapper>
      </evg-section>

      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrapper size="lg">
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
              <evg-button variant="ghost">
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

          <evg-grid wrap="wrap" gap="lg">
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
                <evg-img radius="md" class="evg-spacing-bottom-sm">
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
        </evg-wrapper>
      </evg-section>
      <Banner
        title="Join us in leading the change"
        text="We believe in the power of working together to create long lasting change. Work with us as we lead the way to building a more sustainable future."
        button="Sign up now"
      />
    </AppLayout>
  );
}
