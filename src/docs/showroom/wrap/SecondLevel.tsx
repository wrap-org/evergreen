import React from 'react';

import { Brochureware as AppLayout } from '../../recipes/App.stories';
import { Banner } from '../../recipes/Banner.stories';
import { List, Row, Featured } from '../../recipes/Cards.stories';

const initiatives = [
  {
    title: 'The Courtauld Commitment 2030',
    description:
      'Reducing food waste, cutting carbon and protecting critical water resources.',
  },
  {
    title: 'FLAWLESS Indonesia',
    description: '(GRASP 2030)',
  },
  {
    title: 'FLAWLESS Mexico',
    description: 'Pacto por la Comida',
  },
  {
    title: 'FLAWLESS South Africa ',
    description: 'The South African Food Loss and Waste Agreement',
  },
  {
    title: 'The Australian Food Pact',
    description:
      "WRAP's UK and Asia-Pacific offices are together supporting End Food Waste Australia to deliver the Australian Food Pact.",
  },
  {
    title: 'The Pacific Coast Food Waste Commitment',
    description:
      'WRAP provides technical input into the delivery of Pacific Coast Food Waste Commitment (PCFWC)',
  },
  {
    title: 'Canada Plastics Pact',
    description:
      'WRAP provided strategic advice to the Canadian team to finalise the Plastics Pact, which was launched in January 2021.',
  },
];

const howWrapCanHelpYou: {
  title: string;
  description: string;
  layout: 'image-left' | 'image-right';
}[] = [
  {
    title: 'Action on food waste',
    description:
      "Using WRAP's tools and guidance, organisations can work out what types of waste to measure and how to measure it. By working with WRAP, your organisation can improve processes, find new techniques and implement best practice in your supply chain.",
    layout: 'image-left',
  },
  {
    title: 'Action on water stress',
    description:
      'There are simple, nature-based solutions that can be implemented for multiple benefits: to restore habitats, protect soils, increase carbon storage, conserve water, reduce pollution and protect against flooding. This is a win-win for all.',
    layout: 'image-right',
  },
  {
    title: 'Action on greenhouse gas emissions',
    description:
      'With nearly 150 million tonnes of carbon dioxide equivalents linked to the production, distribution, consumption and disposal of the food and drink we consume in the UK, the Courtauld Commitment is taking collaborative action to deliver carbon reduction at scale.',
    layout: 'image-left',
  },
];

const relatedResources = [
  {
    title: 'Future-proof food',
    description:
      "We're changing the way food is produced and consumed — reducing costs to the environment, to businesses and to people.",
    theme: 'evg-theme-forest',
  },
  {
    title: 'Prevent problem plastics',
    description:
      "We're redesigning the plastics system, across the value chain — preventing waste and keeping the material out of the environment.",
    theme: 'evg-theme-forest',
  },
  {
    title: 'Transform textiles',
    description:
      "We're transforming the way that textiles are made, bought and used - decreasing emissions, lowering water use and cutting pollution.",
    theme: 'evg-theme-forest',
  },
  {
    title: 'Accelerate the Circular Economy',
    description:
      "We're leading the world away from a 'take-make-dispose' culture to a 'design-makereuse' approach - radically reducing waste and carbon emissions from everyday products.",
    theme: 'evg-theme-forest',
  },
];

export function SecondLevel() {
  return (
    <AppLayout>
      <evg-grid wrap="wrap" gap="none">
        <evg-grid-item small-mobile="12" small-desktop="6" fill>
          <evg-section padding="fluid-lg" class="evg-theme-forest">
            <evg-wrap size="xxl" gutter="fluid-lg">
              <evg-breadcrumb class="evg-spacing-bottom-md">
                <ol>
                  <li>
                    <a href="https://wrap.ngo">Take action</a>
                  </li>
                </ol>
              </evg-breadcrumb>
              <h1 className="evg-text-size-heading-xl evg-text-transform-uppercase">
                Food and drink
              </h1>
              <p className="evg-text-size-body-lg">
                We want to cut waste out of our global food system and make it
                more sustainable.
              </p>
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item small-mobile="12" small-desktop="6" fill="true">
          <evg-img responsive object-fit="cover" object-position="center">
            <img
              src="/images/placeholder/400x200.svg"
              alt="Placeholder"
              width="400"
              height="200"
            />
          </evg-img>
        </evg-grid-item>
      </evg-grid>
      <evg-section padding="fluid">
        <evg-wrap size="lg">
          <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md evg-text-transform-uppercase">
            Transforming the food system
          </h2>

          <p className="evg-spacing-bottom-lg">
            By changing the way food is produced and consumed, we are reducing
            greenhouse gas emissions, protecting natural resources, and helping
            individuals to save money. Transformation on this scale requires
            collaboration, research, and bravery. Join us - and help us to
            increase our impact for people and planet.
          </p>

          <h3 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
            Why we are working to transform the food system
          </h3>

          <evg-stat layout="row" class="evg-spacing-bottom-xl">
            <evg-stat-icon>
              <evg-icon icon="food" set="distinctive" />
            </evg-stat-icon>
            <evg-stat-value>30%</evg-stat-value>
            <evg-stat-content>
              <h4 className="evg-text-size-body-md evg-text-family-body">
                Food production and consumption are responsible for around 30%
                of global carbon emissions.
              </h4>
              <p>
                By creating space for agriculture, it also contributes to
                between 60%-80% biodiversity loss through the destruction of
                natural habitats. IPCC, 2019, Chapter 5 Food security, Special
                report on climate change and land.
              </p>
            </evg-stat-content>
          </evg-stat>
          <evg-stat layout="row" class="evg-spacing-bottom-xl">
            <evg-stat-icon>
              <evg-icon icon="plastics" set="distinctive" />
            </evg-stat-icon>
            <evg-stat-value>70%</evg-stat-value>
            <evg-stat-content>
              <h4 className="evg-text-size-body-md evg-text-family-body">
                The proportion of global freshwater that is used for
                agriculture.
              </h4>
              <p>
                What&apos;s more, 8 out of the top 10 countries that the UK
                sources fruit and vegetables from are drought-prone.
              </p>
            </evg-stat-content>
          </evg-stat>
          <evg-stat layout="row" class="evg-spacing-bottom-lg">
            <evg-stat-icon>
              <evg-icon icon="globe" set="distinctive" />
            </evg-stat-icon>
            <evg-stat-value>1.3 Bt</evg-stat-value>
            <evg-stat-content>
              <h4 className="evg-text-size-body-md evg-text-family-body">
                1.3 billion tonnes of food is wasted globally
              </h4>
              <p>
                This is one third of all food produced for human consumption,
                according to the Food and Agriculture Organization (FAO) of the
                United Nations. In the UK, we throw away 6.4 million tonnes of
                household food waste a year, almost three quarters is food we
                could have eaten.
              </p>
            </evg-stat-content>
          </evg-stat>

          <h2 className="evg-text-size-heading-lg evg-spacing-bottom-lg evg-text-transform-uppercase">
            What WRAP is doing
          </h2>

          <p>
            We are working from farm to fork to transform the global food
            system. We are leading the way in tackling food loss and waste,
            reducing GHG emissions and water use. Our work with global brands,
            governments, delivery partners and directly with individuals to
            reduce food waste is delivering lasting impact.
          </p>
          <p>
            Our experts develop collaborative projects that enable organisations
            to reduce food waste and GHG emissions, and protect critical water
            resources. WRAP has helped to develop food & drink voluntary
            agreements around the world.
          </p>
        </evg-wrap>
      </evg-section>

      <evg-section padding="fluid" class="evg-theme-lime-light">
        <evg-wrap size="xl">
          <evg-grid
            justify-content="space-between"
            class="evg-spacing-bottom-lg"
          >
            <evg-grid-item>
              <h2 className="evg-text-size-heading-md">Our initiatives</h2>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="text">
                <a href="https://wrap.ngo">
                  View all
                  <evg-icon icon="arrow-right" />
                </a>
              </evg-button>
            </evg-grid-item>
          </evg-grid>

          <evg-grid wrap="wrap">
            {initiatives.map((item) => (
              <evg-grid-item
                key={item.title}
                small-mobile="12"
                small-tablet="6"
                tablet="4"
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
                      <h3 className="evg-text-size-heading-sm evg-text-family-body">
                        {item.title}
                      </h3>
                      <p className="evg-text-size-body-sm">
                        {item.description}
                      </p>
                    </evg-card-content>
                  </evg-card>
                </a>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>

      <Featured
        title="Featured campaign"
        theme="default"
        size="xl"
        card={{
          title: 'Love Food Hate Waste across the world',
          description:
            'Within the UK we deliver our citizen facing campaign Love Food Hate Waste. We have taken the knowledge, insight and experience learnt from Love Food Hate Waste and worked with 8 countries in total to develop their own localised Love Food Hate Waste campaigns.',
        }}
      />

      <List
        theme="earth-light"
        title="How WRAP can help you"
        cards={howWrapCanHelpYou}
      />

      <Row title="Related resources" cards={relatedResources} />

      <Banner
        title="Work with us on a food project"
        text="If you are interested in setting up your own food waste campaign within a country or region that we do not currently work in, please do get in touch."
        button="Contact us"
      />
    </AppLayout>
  );
}
