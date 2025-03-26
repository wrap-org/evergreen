import React from 'react';

import { Brochureware as AppLayout } from '../../recipes/App.stories';
import { Banner } from '../../recipes/Banner.stories';
import { List, Row, Featured } from '../../recipes/Cards.stories';

const workWithUs: {
  title: string;
  description: string;
  layout: 'image-right' | 'image-left';
}[] = [
  {
    title: 'Retailers',
    description:
      'We help retailers and their supply chains to be more resource efficient, encourage consumers to reduce their waste, and redistribute more surplus food to those in need.',
    layout: 'image-right',
  },
  {
    title: 'Manufacturers',
    description:
      'By making their production processes more efficient, manufacturers are instrumental in protecting key resources - food, water carbon.',
    layout: 'image-right',
  },
  {
    title: 'Hospitality',
    description:
      "With award-winning campaigns, we're helping businesses to reduce the amount of food thrown away, reduce water stress and GHG emissions.",
    layout: 'image-right',
  },
];

const moreOpportunities = [
  {
    title: 'Future-proof food',
    description:
      "We're changing the way food is produced and consumed — reducing costs to the environment, to businesses and to people.",
    theme: 'evg-theme-default',
  },
  {
    title: 'Prevent problem plastics',
    description:
      "We're redesigning the plastics system, across the value chain — preventing waste and keeping the material out of the environment.",
    theme: 'evg-theme-default',
  },
  {
    title: 'Transform textiles',
    description:
      "We're transforming the way that textiles are made, bought and used - decreasing emissions, lowering water use and cutting pollution.",
    theme: 'evg-theme-default',
  },
  {
    title: 'Accelerate the Circular Economy',
    description:
      "We're leading the world away from a 'take-make-dispose' culture to a 'design-makereuse' approach - radically reducing waste and carbon emissions from everyday products.",
    theme: 'evg-theme-default',
  },
];

export function ThirdLevel() {
  return (
    <AppLayout>
      <evg-supergraphic class="evg-theme-forest" position="bottom-right">
        <evg-section padding="fluid-lg" class="evg-theme-forest">
          <evg-wrapper size="xxl" gutter="fluid-lg">
            <evg-grid wrap="wrap" gap="none">
              <evg-grid-item small-mobile="12" tablet="9" large-tablet="7">
                <evg-breadcrumb class="evg-spacing-bottom-md">
                  <ol>
                    <li>
                      <a href="https://wrap.ngo">Take action</a>
                    </li>
                    <li>
                      <a href="https://wrap.ngo">Food and drink</a>
                    </li>
                    <li>
                      <a href="https://wrap.ngo" aria-current="page">
                        Initiatives
                      </a>
                    </li>
                  </ol>
                </evg-breadcrumb>
                <h1 className="evg-text-size-heading-xl evg-text-transform-uppercase">
                  The Courtauld Commitment 2030
                </h1>
                <p className="evg-text-size-body-lg">
                  Reducing food waste, cutting carbon and protecting critical
                  water resources.
                </p>
                <evg-button>
                  <button>
                    In this section
                    <evg-icon icon="chevron-down" />
                  </button>
                </evg-button>
              </evg-grid-item>
            </evg-grid>
          </evg-wrapper>
        </evg-section>
      </evg-supergraphic>

      <evg-section padding="fluid">
        <evg-wrapper size="lg">
          <p className="evg-spacing-bottom-lg">
            The Courtauld Commitment 2030 is a UK success story - a voluntary
            agreement that enables collaborative action across the entire UK
            food chain to deliver farm-to-fork reductions in food waste,
            greenhouse gas (GHG) emissions and water stress that will help the
            UK food and drink sector achieve global environmental goals.
          </p>

          <evg-video class="evg-spacing-bottom-lg">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cTD-X0lhMWY?si=XrIxoMQQDj0nV34K"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </evg-video>

          <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md evg-text-transform-uppercase">
            Our Targets
          </h2>

          <p className="evg-spacing-bottom-lg">
            Challenging and ambitious, the Courtauld 2030 targets are fully
            aligned with UK and international environmental goals.
          </p>

          <evg-card class="evg-spacing-bottom-lg">
            <evg-card-content>
              <h3 className="evg-text-size-heading-sm evg-text-family-body">
                For food waste
              </h3>
              <p className="evg-text-size-body-sm">
                To deliver against UN SDG 12.3: a 50% per capita reduction in
                food waste by 2030 vs the UK 007 baseline (covering manufacture,
                retail, hospitality and food service, and household).
              </p>
              <p className="evg-text-size-body-sm">
                The scope of the Courtauld Commitment 2030&apos;s food waste
                reduction target remains unchanged from the Courtauld Commitment
                2025 (covering manufacture, retail, hospitality and food service
                and household), as does the level of ambition for impact to 2025
                (a 20% reduction compared to 2015).
              </p>
              <evg-button variant="primary" width="full-width-mobile">
                <button>
                  Read more
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-card-content>
          </evg-card>

          <evg-card class="evg-spacing-bottom-lg">
            <evg-card-content>
              <h3 className="evg-text-size-heading-sm evg-text-family-body">
                For GHG emissions
              </h3>
              <p className="evg-text-size-body-sm">
                To deliver a 50% absolute reduction in GHG emissions associated
                with food and drink consumed in the UK by 2030 (against a 2015
                baseline).
              </p>
              <p className="evg-text-size-body-sm">
                This is aligned to a 1.5°C pathway and an important milestone
                towards meeting wider food sector targets for Net Zero by 2040,
                e.g. within the British Retail Consortium&apos;s Climate
                Roadmap.
              </p>
              <evg-button variant="primary" width="full-width-mobile">
                <button>
                  Read more
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-card-content>
          </evg-card>

          <evg-card class="evg-spacing-bottom-lg">
            <evg-card-content>
              <h3 className="evg-text-size-heading-sm evg-text-family-body">
                For water
              </h3>
              <p className="evg-text-size-body-sm">
                An overall target by 2030 that 50% of fresh food is sourced from
                areas with sustainable water management
              </p>
              <p className="evg-text-size-body-sm">
                As well as businesses continuing to increase water use
                efficiency in their own operations, our combined objective is
                that, by 2030, the UK food & drink industry will have helped to
                achieve sustainable water management to improve the quality and
                availability of water at catchment scale in the top 20 most
                important product & ingredient sourcing areas in the UK and
                overseas.
              </p>
              <evg-button variant="primary" width="full-width-mobile">
                <button>
                  Read more
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-card-content>
          </evg-card>

          <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md evg-text-transform-uppercase">
            Our Achievements
          </h2>

          <p className="evg-spacing-bottom-lg">
            Our latest Courtauld 2030 Progress and Insights Report sets out the
            achievements of the food and drink sector over the last year towards
            achieving the voluntary agreement&apos;s targets and the UN&apos;s
            Sustainable Development Goals.
          </p>

          <evg-card radius="md" layout="thumb">
            <evg-card-img>
              <evg-thumbnail size="md">
                <evg-icon icon="document-download" />
              </evg-thumbnail>
            </evg-card-img>
            <evg-card-content>
              <h3 className="evg-text-size-heading-sm evg-text-family-body">
                Courtauld 2030 Annual Progress Report 2024
              </h3>
              <evg-grid justify-content="space-between" align-items="center">
                <evg-grid-item>
                  <evg-meta>
                    <evg-badge variant="sky light">Report</evg-badge>
                    <span className="evg-text-size-body-sm">Jan 1, 2025</span>
                  </evg-meta>
                </evg-grid-item>
                <evg-grid-item>
                  <evg-button variant="primary">
                    <button>
                      Read more
                      <evg-icon icon="arrow-right" />
                    </button>
                  </evg-button>
                </evg-grid-item>
              </evg-grid>
            </evg-card-content>
          </evg-card>
        </evg-wrapper>
      </evg-section>

      <Featured
        title="Featured resource"
        theme="lime-light"
        size="lg"
        card={{
          title: 'The Food System Transformation Plan',
          description:
            'Our Transformation Plan contains information, all in one place, on what the food and drink sector needs to do to achieve the Courtauld 2030 targets.',
          meta: true,
        }}
      />

      <List title="Work with us" cards={workWithUs} />

      <Row
        title="More opportunities"
        cards={moreOpportunities}
        theme="earth-light"
      />

      <Banner
        title="Get in touch"
        text="Find out how the Courtauld Commitment 2030 can help achieve your sustainability goals."
        button="Contact us"
      />
    </AppLayout>
  );
}
