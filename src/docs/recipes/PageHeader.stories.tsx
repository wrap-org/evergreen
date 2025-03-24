import React from 'react';

import { ButtonVariant } from '@/components/control/Button/Button';

export default {
  title: 'Recipes/Page header',
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          {
            // It doesn't like our repeated breadcrumb nav label
            id: 'landmark-unique',
            enabled: false,
          },
        ],
      },
    },
  },
  tags: ['!autodocs'],
};

const Content = ({
  title = 'Page header',
  description = 'Page description',
  buttons = ['primary', 'secondary'],
}: {
  readonly title?: string;
  readonly description?: string;
  readonly buttons?: readonly ButtonVariant[];
}) => (
  <>
    <evg-breadcrumb class="evg-spacing-bottom-lg">
      <nav aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/landing-page">Landing page</a>
          </li>
          <li>
            <a href="/landing-page/sub-page">Sub page</a>
          </li>
          <li>
            <a href="/landing-page/sub-page/full-details" aria-current="page">
              Full details
            </a>
          </li>
        </ol>
      </nav>
    </evg-breadcrumb>
    <h1 className="evg-text-transform-uppercase evg-spacing-bottom-lg">
      {title}
    </h1>
    <p className="evg-spacing-bottom-lg">{description}</p>
    <evg-grid>
      {buttons.map((button) => (
        <evg-grid-item key={button} small-mobile="6" small-tablet="auto">
          <evg-button variant={button} width="full-width-mobile">
            <button type="button">Call to action</button>
          </evg-button>
        </evg-grid-item>
      ))}
    </evg-grid>
  </>
);

const SupergraphicLayout = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => (
  <evg-section padding="fluid">
    <evg-wrap size="xl">
      <evg-grid>
        <evg-grid-item small-mobile="12" tablet="8" small-desktop="7">
          {children}
        </evg-grid-item>
      </evg-grid>
    </evg-wrap>
  </evg-section>
);

export const Supergraphic = () => (
  <>
    <evg-supergraphic position="bottom-right" class="evg-theme-forest">
      <SupergraphicLayout>
        <Content title="Page header with a much longer title which uses three lines" />
      </SupergraphicLayout>
    </evg-supergraphic>
    <evg-supergraphic position="bottom-right" class="evg-theme-sand">
      <SupergraphicLayout>
        <Content buttons={['secondary', 'default']} />
      </SupergraphicLayout>
    </evg-supergraphic>
    <evg-supergraphic position="bottom-right" class="evg-theme-earth">
      <SupergraphicLayout>
        <Content />
      </SupergraphicLayout>
    </evg-supergraphic>
    <evg-supergraphic position="bottom-left" class="evg-theme-sand">
      <evg-section padding="fluid">
        <evg-wrap size="xl">
          <evg-breadcrumb class="evg-spacing-bottom-lg">
            <nav aria-label="Breadcrumb">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/landing-page">Landing page</a>
                </li>
                <li>
                  <a href="/landing-page/sub-page">Sub page</a>
                </li>
                <li>
                  <a
                    href="/landing-page/sub-page/full-details"
                    aria-current="page"
                  >
                    Full details
                  </a>
                </li>
              </ol>
            </nav>
          </evg-breadcrumb>
          <evg-grid gap="lg" align-items="flex-end" wrap="wrap">
            <evg-grid-item small-mobile="12" tablet="8" large-tablet="6">
              <h1 className="evg-text-transform-uppercase">
                Page Header with a much longer title which uses three lines
              </h1>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" tablet="8" large-tablet="6">
              <p>
                Page description that uses a single sentence to summarise the
                content on this page – letting audiences know what they can
                expect to find.
              </p>
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
    </evg-supergraphic>
  </>
);

const directions = ['row', 'row-reverse'] as const;

export const SideImage = () => (
  <>
    {directions.map((direction) => (
      <evg-grid wrap="wrap" gap="none" key={direction} direction={direction}>
        <evg-grid-item small-mobile="12" large-tablet="6" fill>
          <evg-section padding="fluid-lg" class="evg-theme-forest">
            <evg-wrap size="xxl" gutter="fluid-lg">
              <Content
                title="Page Header with a much longer title which uses three lines"
                description="Page description that uses a single sentence to summarise the content on this page – letting audiences know what they can expect to find."
              />
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item small-mobile="12" large-tablet="6" fill="true">
          <evg-img responsive object-fit="cover" object-position="center">
            <img
              src="/images/placeholder/400x400.svg"
              alt="Placeholder"
              width="400"
              height="400"
            />
          </evg-img>
        </evg-grid-item>
      </evg-grid>
    ))}
  </>
);

export const FullImage = () => (
  <evg-section padding="fluid" class="evg-theme-forest">
    <evg-section-img text="light">
      <img
        src="/images/placeholder/page-header.webp"
        alt="Placeholder"
        slot="image"
        width="1280"
        height="640"
      />
      <evg-wrap size="lg" class="evg-text-align-center">
        <h1 className="evg-text-size-display-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
          Page Header with short title
        </h1>
        <p className="evg-spacing-bottom-lg">Page description</p>
        <evg-grid justify-content="center">
          {['primary', 'default'].map((button) => (
            <evg-grid-item key={button} small-mobile="6" small-tablet="auto">
              <evg-button
                variant={button as ButtonVariant}
                width="full-width-mobile"
              >
                <button type="button">Call to action</button>
              </evg-button>
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-wrap>
    </evg-section-img>
  </evg-section>
);

export const NestedImage = () => (
  <>
    {['sand', 'earth', 'forest'].map((theme) => (
      <evg-section padding="fluid" class={`evg-theme-${theme}`} key={theme}>
        <evg-section-img text="light" layout="nested">
          <img
            src="/images/placeholder/page-header.webp"
            alt="Placeholder"
            slot="image"
            width="1280"
            height="640"
          />
          <evg-wrap size="lg" class="evg-text-align-center">
            <h1 className="evg-text-size-display-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
              Page Header with short title
            </h1>
            <p className="evg-spacing-bottom-lg">Page description</p>
            <evg-grid justify-content="center">
              {['primary', 'default'].map((button) => (
                <evg-grid-item
                  key={button}
                  small-mobile="6"
                  small-tablet="auto"
                >
                  <evg-button
                    variant={button as ButtonVariant}
                    width="full-width-mobile"
                  >
                    <button type="button">Call to action</button>
                  </evg-button>
                </evg-grid-item>
              ))}
            </evg-grid>
          </evg-wrap>
        </evg-section-img>
      </evg-section>
    ))}
  </>
);
