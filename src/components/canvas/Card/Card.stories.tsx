import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

export default {
  parameters: {
    docs: {
      theming: true,
    },
  },
} satisfies Meta;

const cardContent = (
  <>
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
        <evg-badge type="info">Info</evg-badge>
        <span className="evg-text-size-body-xs">Jan 1, 2025</span>
      </evg-meta>
      <h3 className="evg-text-size-heading-sm">
        Extending Product Lifetimes: WRAP&apos;s Work on Clothing Durability
      </h3>
      <p className="evg-text-size-body-sm">
        Through our Clothing Longevity Protocol and our collaboration with the
        Leeds Institute of Textiles and Colour (LITAC) on the Durability
        Research Project as part of Textiles 2030, we have transformed the
        fashion industry&apos;s approach to product design.
      </p>
      <evg-button variant="primary" width="full-width">
        <button>
          Read more <evg-icon icon="arrow-right" />
        </button>
      </evg-button>
    </evg-card-content>
  </>
);

export const Card: StoryFn = (props) => (
  <evg-wrap size="sm">
    <evg-card {...props}>{cardContent}</evg-card>
  </evg-wrap>
);

Card.args = {
  radius: 'md',
};

export const Theming: StoryFn = () => (
  <evg-wrap size="lg">
    <evg-grid wrap="wrap">
      {themes.map((theme) => (
        <evg-grid-item small-mobile="12" tablet="6" key={theme}>
          <evg-card class={`evg-theme-${theme}`} radius="md">
            {cardContent}
          </evg-card>
        </evg-grid-item>
      ))}
    </evg-grid>
  </evg-wrap>
);

export const Layouts: StoryFn = () => (
  <>
    {(['top', 'bottom'] as const).map((layout) => (
      <evg-wrap size="sm" class="evg-spacing-bottom-lg" key={layout}>
        <evg-card radius="md" layout={`image-${layout}` as const}>
          {cardContent}
        </evg-card>
      </evg-wrap>
    ))}

    {(['left', 'right'] as const).map((layout) => (
      <evg-wrap size="xl" class="evg-spacing-bottom-lg" key={layout}>
        <evg-card radius="md" layout={`image-${layout}` as const}>
          {cardContent}
        </evg-card>
      </evg-wrap>
    ))}

    <evg-wrap size="xl" class="evg-spacing-bottom-lg">
      <evg-card radius="md" layout="thumb">
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
          <h3 className="evg-text-size-heading-sm">
            Extending Product Lifetimes: WRAP&apos;s Work on Clothing Durability
          </h3>
          <p className="evg-text-size-body-sm">
            Through our Clothing Longevity Protocol and our collaboration with
            the Leeds Institute of Textiles and Colour (LITAC) on the Durability
            Research Project as part of Textiles 2030, we have transformed the
            fashion industry&apos;s approach to product design.
          </p>
          <evg-grid justify-content="space-between" align-items="center">
            <evg-grid-item>
              <evg-meta>
                <evg-badge type="info">Info</evg-badge>
                <span className="evg-text-size-body-xs">Jan 1, 2025</span>
              </evg-meta>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="primary" width="full-width">
                <button>
                  Read more
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </evg-card-content>
      </evg-card>
    </evg-wrap>
  </>
);

export const Clickable: StoryFn = () => (
  <evg-wrap size="xl">
    <evg-grid wrap="wrap">
      {[1, 2, 3].map((item) => (
        <evg-grid-item small-mobile="12" tablet="4" key={item}>
          <a href="https://wrap.ngo">
            <evg-card radius="md" layout="image-top">
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
                  <evg-badge type="info">Press release</evg-badge>
                  <span className="evg-text-size-body-xs">Jan 1, 2025</span>
                </evg-meta>
                <h3 className="evg-text-size-heading-sm evg-text-family-body">
                  Extending Product Lifetimes: WRAP&apos;s Work on Clothing
                  Durability
                </h3>
              </evg-card-content>
            </evg-card>
          </a>
        </evg-grid-item>
      ))}
    </evg-grid>
  </evg-wrap>
);
