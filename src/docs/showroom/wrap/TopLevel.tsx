import React from 'react';

import { CallToAction, CardList } from '../../recipes/Brochureware.stories';
import { Full as Footer } from '../../recipes/Footer.stories';
import { Wrap as Navigation } from '../../recipes/Navigation.stories';

export function TopLevel() {
  return (
    <evg-app>
      <Navigation slot="header" />
      <evg-section padding="fluid" class="evg-theme-forest">
        <evg-wrap size="md" class="evg-text-align-center">
          <h1 className="evg-text-size-display-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
            What we do
          </h1>
          <p className="evg-text-size-body-lg evg-text-wrap-balance">
            WRAP is a global environmental action NGO transforming our broken
            product and food systems to create Circular Living. For the benefit
            of the climate, nature, and people.
          </p>
        </evg-wrap>
      </evg-section>

      <evg-section padding="fluid">
        <evg-wrap size="lg" class="evg-longform">
          <p className="evg-text-size-body-lg">
            WRAP is a global environmental action NGO transforming our broken
            product and food systems to create Circular Living. For the benefit
            of the climate, nature, and people.
          </p>

          <p>
            The old approach of take-make-dispose is the major cause of
            inequality, greenhouse gases and the mountains of waste polluting
            our water and destroying biodiversity.
          </p>

          <p>
            A new approach is needed for food, textiles and manufactured
            products — which together account for nearly 50% of global
            greenhouse gas emissions.
          </p>

          <p>
            We call this approach Circular Living - design-make-reuse - and it
            will radically reduce waste and carbon emissions from everyday
            products.
          </p>

          <p>
            With technical expertise, an impartial evidence-base, and
            independent convening power, WRAP is perfectly placed to make
            Circular Living a reality.
          </p>

          <p>
            For over twenty years, WRAP has delivered programs that reduce CO2
            and waste, restore nature, and change peopleʼs behaviour.
          </p>

          <docs-placeholder>Video</docs-placeholder>
        </evg-wrap>
      </evg-section>

      <evg-section padding="fluid" class="evg-theme-lime-light">
        <evg-wrap size="xl">
          <div className="evg-spacing-bottom-lg evg-text-align-center">
            <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md evg-text-transform-uppercase">
              Our priorities
            </h2>
            <p>
              The food, textiles and manufactured products we use every day come
              from unsustainable take-make-dispose systems. We need to transform
              these broken systems.
            </p>
          </div>

          <evg-grid wrap="wrap">
            {Array.from({ length: 4 }).map((_, index) => (
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

      <evg-section padding="fluid">
        <evg-wrap size="lg">
          <evg-grid
            justify-content="space-between"
            align-items="center"
            class="evg-spacing-bottom-lg"
          >
            <evg-grid-item>
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase">
                Our services
              </h2>
            </evg-grid-item>
            <evg-grid-item>
              <docs-placeholder inline>Text button</docs-placeholder>
            </evg-grid-item>
          </evg-grid>
          <p>
            Collaboration is key to driving effective change. WRAP is on the
            side of the doers, bringing together businesses, NGOs and
            governments to create the systemic change our planet and communities
            desperately need.
          </p>

          <p className="evg-spacing-bottom-lg">
            We’re a trusted advisor to governments, businesses, multilateral
            organisations and NGOs around the world.
          </p>

          <evg-grid wrap="wrap">
            {[
              'Behaviour change',
              'Certification and standards',
              'Collaboration and collective action',
              'Finance for action and innovation',
              'Policy design and implementation',
              'Technical solutions and consultancy',
            ].map((item, index) => (
              <evg-grid-item
                key={index}
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

      <CardList cards={[1, 2]} theme="earth-light" />

      <evg-section padding="fluid">
        <evg-wrap size="xl">
          <h2 className="evg-text-size-heading-md evg-text-transform-uppercase evg-spacing-bottom-lg">
            Explore more
          </h2>
          <evg-grid wrap="wrap">
            {Array.from({ length: 3 }).map((_, index) => (
              <evg-grid-item key={index} small-mobile="12" small-tablet="4">
                <docs-placeholder>Menu item</docs-placeholder>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>

      <CallToAction
        title="Join us in leading the change"
        text="We believe in the power of working together to create long lasting change. Work with us as we lead the way to building a more sustainable future."
        button="Button"
      />

      <Footer slot="footer" />
    </evg-app>
  );
}
