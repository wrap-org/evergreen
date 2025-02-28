import React from 'react';

import {
  CallToAction,
  CardList,
  CardRow,
  Featured,
} from '../../recipes/Brochureware.stories';
import { Full as Footer } from '../../recipes/Footer.stories';
import { Wrap as Navigation } from '../../recipes/Navigation.stories';

export function ThirdLevel() {
  return (
    <evg-app>
      <Navigation slot="header" />

      <evg-section padding="fluid-lg" class="evg-theme-forest">
        <evg-wrap size="xxl" gutter="fluid-lg">
          <evg-grid wrap="wrap" gap="none">
            <evg-grid-item small-mobile="12" small-desktop="6">
              <docs-placeholder inline>Breadcrumb</docs-placeholder>
              <h1 className="evg-text-size-heading-xl evg-text-transform-uppercase">
                The Courtauld Commitment 2030
              </h1>
              <p className="evg-text-size-body-lg">
                Reducing food waste, cutting carbon and protecting critical
                water resources.
              </p>
              <docs-placeholder inline>Button</docs-placeholder>
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>

      <evg-section padding="fluid">
        <evg-wrap size="lg">
          <p className="evg-spacing-bottom-lg">
            The Courtauld Commitment 2030 is a UK success story - a voluntary
            agreement that enables collaborative action across the entire UK
            food chain to deliver farm-to-fork reductions in food waste,
            greenhouse gas (GHG) emissions and water stress that will help the
            UK food and drink sector achieve global environmental goals.
          </p>

          <docs-placeholder class="evg-spacing-bottom-lg">
            Video
          </docs-placeholder>

          <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md evg-text-transform-uppercase">
            Our Targets
          </h2>

          <p className="evg-spacing-bottom-lg">
            Challenging and ambitious, the Courtauld 2030 targets are fully
            aligned with UK and international environmental goals.
          </p>

          <docs-placeholder class="evg-spacing-bottom-lg">
            Card
          </docs-placeholder>

          <docs-placeholder class="evg-spacing-bottom-lg">
            Card
          </docs-placeholder>

          <docs-placeholder class="evg-spacing-bottom-lg">
            Card
          </docs-placeholder>

          <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md evg-text-transform-uppercase">
            Our Achievements
          </h2>

          <p className="evg-spacing-bottom-lg">
            Our latest Courtauld 2030 Progress and Insights Report sets out the
            achievements of the food and drink sector over the last year towards
            achieving the voluntary agreement&apos;s targets and the UN&apos;s
            Sustainable Development Goals.
          </p>
        </evg-wrap>
      </evg-section>

      <Featured title="Featured resource" theme="lime-light" size="lg" />

      <CardList title="Work with us" cards={[1, 2, 3]} />

      <CardRow
        title="More opportunities"
        cards={[1, 2, 3, 4]}
        theme="earth-light"
      />

      <CallToAction
        title="Get in touch"
        text="Find out how the Courtauld Commitment 2030 can help achieve your sustainability goals."
        button="Button"
      />

      <Footer slot="footer" />
    </evg-app>
  );
}
