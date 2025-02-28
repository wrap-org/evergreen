import React from 'react';

import {
  CallToAction,
  CardList,
  CardRow,
  Featured,
} from '../../recipes/Brochureware.stories';
import { Full as Footer } from '../../recipes/Footer.stories';
import { Wrap as Navigation } from '../../recipes/Navigation.stories';

export function SecondLevel() {
  return (
    <evg-app>
      <Navigation slot="header" />
      <evg-grid wrap="wrap" gap="none">
        <evg-grid-item small-mobile="12" small-desktop="6">
          <evg-section padding="fluid-lg" class="evg-theme-forest">
            <evg-wrap size="xxl" gutter="fluid-lg">
              <docs-placeholder inline>Breadcrumb</docs-placeholder>
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
          <docs-placeholder>Image: object fit</docs-placeholder>
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

          <docs-placeholder class="evg-spacing-bottom-xl">
            Stat
          </docs-placeholder>
          <docs-placeholder class="evg-spacing-bottom-xl">
            Stat
          </docs-placeholder>
          <docs-placeholder class="evg-spacing-bottom-lg">
            Stat
          </docs-placeholder>

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
              <docs-placeholder inline>Text button</docs-placeholder>
            </evg-grid-item>
          </evg-grid>

          <evg-grid wrap="wrap">
            {Array.from({ length: 7 }).map((_, index) => (
              <evg-grid-item
                key={index}
                small-mobile="12"
                small-tablet="6"
                tablet="4"
                large-tablet="3"
              >
                <docs-placeholder>Card</docs-placeholder>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>

      <Featured title="Featured campaign" theme="default" size="xl" />

      <CardList
        theme="earth-light"
        title="How WRAP can help you"
        cards={[1, 2, 3]}
      />

      <CardRow title="Related resources" cards={[1, 2, 3, 4]} />

      <CallToAction
        title="Work with us on a food project"
        text="If you are interested in setting up your own food waste campaign within a country or region that we do not currently work in, please do get in touch."
        button="Button"
      />

      <Footer slot="footer" />
    </evg-app>
  );
}
