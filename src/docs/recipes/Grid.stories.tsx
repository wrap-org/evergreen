import React from 'react';

export default {
  title: 'Recipes/Grid',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Pair() {
  return (
    <evg-section padding="fluid" class="evg-theme-lime-light">
      <evg-wrapper size="xxl">
        <evg-grid gap="xl" wrap="wrap">
          {[0, 1].map((item) => (
            <evg-grid-item small-mobile="12" small-tablet="6" key={item}>
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-md">
                Title
              </h2>
              <p>Description</p>
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-wrapper>
    </evg-section>
  );
}

export function Trio() {
  return (
    <evg-section padding="fluid" class="evg-theme-lime-light">
      <evg-wrapper size="xxl">
        <evg-grid gap="xl" wrap="wrap">
          {[
            {
              title: 'Problem',
              description:
                'The fashion industry generates significant waste and emissions. Integrating durability into clothing design reduces waste, resource use, and carbon impact by extending garment lifespans, reducing the need for new clothing production and increasing reuse.',
            },
            {
              title: 'Solution',
              description:
                'In 2014, WRAP introduced the Clothing Longevity Protocol, now expanded through the Durability Research Project, which is helping 25 fashion brands assess clothing durability, adapt to circular models, and meet eco-design policies for long-lasting products.',
            },
            {
              title: 'Impact',
              description:
                "WRAP's research shows extending clothing lifespan by nine months can reduce carbon, water, and waste footprints by 30%, saving £5 billion annually. The Clothing Longevity Protocol and Durability Research Project are helping brands like John Lewis and Primark improve product durability.",
            },
          ].map((item) => (
            <evg-grid-item small-mobile="12" tablet="4" key={item.title}>
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-md">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-wrapper>
    </evg-section>
  );
}

export function Quad() {
  return (
    <evg-section padding="fluid" class="evg-theme-lime-light">
      <evg-wrapper size="xxl">
        <evg-grid gap="xl" wrap="wrap">
          {[
            {
              title: '11.6mt of waste',
              description:
                'Up to 11.6 million tonnes of materials and food waste collected for recycling over eight years, adding 7 percentage points to the household waste recycling rate for England.',
            },
            {
              title: '13.2m households',
              description:
                '13.2 million households (including flats) provided with a food waste collection service, and 1.1 million more households provided with a dry recycling service.',
            },
            {
              title: '£33 million',
              description: 'Description',
            },
            {
              title: '5.1mt of C02e',
              description: 'Description',
            },
          ].map((item) => (
            <evg-grid-item small-mobile="12" small-tablet="6" key={item.title}>
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-md">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-wrapper>
    </evg-section>
  );
}

export function ImagePairs() {
  return (
    <>
      {[
        {
          title: 'Our work in action',
          description:
            "WRAP has a successful track record supporting the industry, working with local authorites, communities and organisations to provide real measurable change. The video below shows what can happen to plastic when it's collected for recycling.",
          theme: 'default',
          direction: 'row-reverse',
        },
        {
          title: 'Our vision',
          description:
            'To transform recycling across England, Wales and Northern Ireland to a system that emphasizes materlal quality and markets. We want to transfer our expertise Internationally and help other countries recycle better.',
          theme: 'forest',
          direction: 'row',
        },
      ].map((item) => (
        <evg-section
          padding="fluid"
          class={`evg-theme-${item.theme}`}
          key={item.title}
        >
          <evg-wrapper size="xxl">
            <evg-grid
              gap="xl"
              wrap="wrap"
              direction={item.direction as any}
              align-items="center"
            >
              <evg-grid-item small-mobile="12" small-tablet="6">
                <evg-img radius="md" block responsive>
                  <img
                    src="/images/placeholder/400x200.svg"
                    width="400"
                    height="200"
                    alt="Placeholder"
                    loading="lazy"
                  />
                </evg-img>
              </evg-grid-item>
              <evg-grid-item small-mobile="12" small-tablet="6">
                <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-md">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </evg-grid-item>
            </evg-grid>
          </evg-wrapper>
        </evg-section>
      ))}
    </>
  );
}

export const AdditionalContent = () => (
  <evg-section padding="fluid">
    <evg-wrapper size="xxl">
      <evg-grid class="evg-spacing-bottom-lg" align-items="center">
        <evg-grid-item grow shrink>
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

      <evg-grid class="evg-spacing-bottom-lg">
        <evg-grid-item small-mobile="12" tablet="7">
          <p>
            Collaboration is key to driving effective change. WRAP is on the
            side of the doers, bringing together businesses, NGOs and
            governments to create the systemic change our planet and communities
            desperately need.
          </p>{' '}
          <p>
            We&apos;re a trusted advisor to governments, businesses,
            multilateral organisations and NGOs around the world.
          </p>
        </evg-grid-item>
      </evg-grid>

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
            small-mobile="12"
            small-tablet="6"
            large-tablet="4"
            key={item}
          >
            <evg-img radius="md" block responsive class="evg-spacing-bottom-md">
              <img
                src="/images/placeholder/400x300.svg"
                width="400"
                height="300"
                alt="Placeholder"
                loading="lazy"
              />
            </evg-img>
            <h3 className="evg-text-size-heading-sm">{item}</h3>
          </evg-grid-item>
        ))}
      </evg-grid>
    </evg-wrapper>
  </evg-section>
);
