import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { themes } from '@/lib/theme';

const cardThemes = themes.filter((t) => !['lime', 'sky'].includes(t));

const description = `
A card component is used to provide a summary of content, with a clear call to action.

Cards are a great way to display a collection of items, such as blog posts, products, or
news articles. A card must always have an associated action, whether that is the whole card
being clickable, or having a dedicated CTA button.
`;

export default {
  parameters: {
    docs: {
      description: {
        component: description,
      },
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
      <evg-row>
        <evg-badge variant="sky-light">Info</evg-badge>
        <span className="evg-text-size-body-xs">Jan 1, 2025</span>
      </evg-row>
      <h3 className="evg-text-size-heading-sm">
        Extending Product Lifetimes: WRAP&apos;s Work on Clothing Durability
      </h3>
      <p className="evg-text-size-body-sm">
        Through our Clothing Longevity Protocol and our collaboration with the
        Leeds Institute of Textiles and Colour (LITAC) on the Durability
        Research Project as part of Textiles 2030, we have transformed the
        fashion industry&apos;s approach to product design.
      </p>
      <evg-button variant="primary">
        <button>
          Read more <evg-icon icon="arrow-right" />
        </button>
      </evg-button>
    </evg-card-content>
  </>
);

export const Card: StoryFn = (props) => (
  <evg-wrapper size="sm">
    <evg-card {...props}>{cardContent}</evg-card>
  </evg-wrapper>
);

Card.args = {
  radius: 'md',
};

export const Theming: StoryFn = () => (
  <evg-wrapper size="lg">
    <evg-grid wrap="wrap">
      {cardThemes.map((theme) => (
        <evg-grid-item small-mobile="12" tablet="6" key={theme}>
          <evg-card class={`evg-theme-${theme}`} radius="md">
            {cardContent}
          </evg-card>
        </evg-grid-item>
      ))}
    </evg-grid>
  </evg-wrapper>
);

export const Layouts: StoryFn = () => (
  <>
    {(['top', 'bottom'] as const).map((layout) => (
      <evg-wrapper size="sm" class="evg-spacing-bottom-lg" key={layout}>
        <evg-card radius="md" layout={`image-${layout}` as const}>
          {cardContent}
        </evg-card>
      </evg-wrapper>
    ))}

    {(['left', 'right'] as const).map((layout) => (
      <evg-wrapper size="xl" class="evg-spacing-bottom-lg" key={layout}>
        <evg-card radius="md" layout={`image-${layout}` as const}>
          {cardContent}
        </evg-card>
      </evg-wrapper>
    ))}

    <evg-wrapper size="xl" class="evg-spacing-bottom-lg">
      <evg-card radius="md" layout="thumb">
        <evg-card-img>
          <evg-thumbnail size="xl">
            <evg-icon icon="document-download" />
          </evg-thumbnail>
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
              <evg-row>
                <evg-badge variant="sky-light">Info</evg-badge>
                <span className="evg-text-size-body-xs">Jan 1, 2025</span>
              </evg-row>
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
  </>
);

export const Clickable: StoryFn = () => (
  <evg-wrapper size="xl">
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
                <evg-row>
                  <evg-badge variant="sky-light">Press release</evg-badge>
                  <span className="evg-text-size-body-xs">Jan 1, 2025</span>
                </evg-row>
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
  </evg-wrapper>
);
