import React from 'react';

import {
  CallToAction,
  CardList,
  AppLayout,
} from '../../recipes/Brochureware.stories';

const priorities = [
  {
    title: 'Future-proof food',
    description:
      "We're changing the way food is produced and consumed — reducing costs to the environment, to businesses and to people.",
  },
  {
    title: 'Prevent plastic problems',
    description:
      "We're redesigning the plastics system, across the value chain — preventing waste and keeping the material out of the environment.",
  },
  {
    title: 'Transform textiles',
    description:
      "We're transforming the way that textiles are made, bought and used - decreasing emissions, lowering water use and cutting pollution.",
  },
  {
    title: 'Accelerate the Circular Economy',
    description:
      "We're leading the world away from a 'take-make-dispose' culture to a 'design-makereuse' approach - radically reducing waste and carbon emissions from everyday products.",
  },
];

const cardList: {
  title: string;
  description: string;
  layout: 'image-left' | 'image-right';
}[] = [
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
];

export function TopLevel() {
  return (
    <AppLayout>
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

          <evg-video>
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
            {priorities.map((item) => (
              <evg-grid-item
                key={item.title}
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
                      <h3 className="evg-text-size-body-md evg-text-family-body">
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
              <evg-button variant="text">
                <a href="https://wrap.ngo">
                  Find out more
                  <evg-icon icon="arrow-right" />
                </a>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
          <p>
            Collaboration is key to driving effective change. WRAP is on the
            side of the doers, bringing together businesses, NGOs and
            governments to create the systemic change our planet and communities
            desperately need.
          </p>

          <p className="evg-spacing-bottom-lg">
            We&apos;re a trusted advisor to governments, businesses,
            multilateral organisations and NGOs around the world.
          </p>

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

      <CardList cards={cardList} theme="earth-light" />

      <evg-section padding="fluid">
        <evg-wrap size="xl">
          <h2 className="evg-text-size-heading-md evg-text-transform-uppercase evg-spacing-bottom-lg">
            Explore more
          </h2>
          <evg-grid wrap="wrap">
            {[0, 1, 2].map((item) => (
              <evg-grid-item key={item} small-mobile="12" small-tablet="4">
                <evg-divider />
                <evg-menu-item>
                  <a href="https://wrap.ngo">
                    <evg-menu-item-content>
                      Menu item title
                    </evg-menu-item-content>
                    <evg-icon icon="arrow-right" />
                  </a>
                </evg-menu-item>
                <evg-divider />
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
