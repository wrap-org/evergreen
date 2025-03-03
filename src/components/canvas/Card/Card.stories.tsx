import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Badge from 'components/react/content/Badge/Badge';
import Button from 'components/react/controls/Button/Button';
import { themes } from 'lib/theme';

const description = `
A box is a rectangle on a page to group related content together visually.
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
} as Meta;

export const Card: StoryFn = (props) => (
  <evg-card {...props}>
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
        <Badge className="evg-theme-sky-light">Info</Badge>
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
      <Button type="primary" block>
        Read more
      </Button>
    </evg-card-content>
  </evg-card>
);

Card.args = {
  radius: 'md',
};

export const Theming: StoryFn = () => (
  <evg-grid wrap="wrap">
    {themes.map((theme) => (
      <evg-grid-item small-mobile="12" tablet="6" key={theme}>
        <evg-card class={`evg-theme-${theme}`} radius="md">
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
              <Badge className="evg-theme-sky-light">Info</Badge>
              <span className="evg-text-size-body-xs">Jan 1, 2025</span>
            </evg-meta>
            <h3 className="evg-text-size-heading-sm">
              Extending Product Lifetimes: WRAP&apos;s Work on Clothing
              Durability
            </h3>
            <p className="evg-text-size-body-sm">
              Through our Clothing Longevity Protocol and our collaboration with
              the Leeds Institute of Textiles and Colour (LITAC) on the
              Durability Research Project as part of Textiles 2030, we have
              transformed the fashion industry&apos;s approach to product
              design.
            </p>
            <Button type="primary" block>
              Read more
            </Button>
          </evg-card-content>
        </evg-card>
      </evg-grid-item>
    ))}
  </evg-grid>
);

export const Layouts: StoryFn = () => (
  <>
    {['top', 'bottom'].map((layout, index) => (
      <evg-wrap size="sm" class="evg-spacing-bottom-lg" key={index}>
        <evg-card radius="md" layout={`image-${layout}`}>
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
              <Badge className="evg-theme-sky-light">Info</Badge>
              <span className="evg-text-size-body-xs">Jan 1, 2025</span>
            </evg-meta>
            <h3 className="evg-text-size-heading-sm">
              Extending Product Lifetimes: WRAP&apos;s Work on Clothing
              Durability
            </h3>
            <p className="evg-text-size-body-sm">
              Through our Clothing Longevity Protocol and our collaboration with
              the Leeds Institute of Textiles and Colour (LITAC) on the
              Durability Research Project as part of Textiles 2030, we have
              transformed the fashion industry&apos;s approach to product
              design.
            </p>
            <Button type="primary" block>
              Read more
            </Button>
          </evg-card-content>
        </evg-card>
      </evg-wrap>
    ))}

    {['left', 'right'].map((layout, index) => (
      <evg-wrap size="xl" class="evg-spacing-bottom-lg" key={index}>
        <evg-card radius="md" layout={`image-${layout}`}>
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
              <Badge className="evg-theme-sky-light">Info</Badge>
              <span className="evg-text-size-body-xs">Jan 1, 2025</span>
            </evg-meta>
            <h3 className="evg-text-size-heading-sm">
              Extending Product Lifetimes: WRAP&apos;s Work on Clothing
              Durability
            </h3>
            <p className="evg-text-size-body-sm">
              Through our Clothing Longevity Protocol and our collaboration with
              the Leeds Institute of Textiles and Colour (LITAC) on the
              Durability Research Project as part of Textiles 2030, we have
              transformed the fashion industry&apos;s approach to product
              design.
            </p>
            <Button type="primary" block>
              Read more
            </Button>
          </evg-card-content>
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
                <Badge className="evg-theme-sky-light">Info</Badge>
                <span className="evg-text-size-body-xs">Jan 1, 2025</span>
              </evg-meta>
            </evg-grid-item>
            <evg-grid-item>
              <Button type="primary" block>
                Read more
              </Button>
            </evg-grid-item>
          </evg-grid>
        </evg-card-content>
      </evg-card>
    </evg-wrap>
  </>
);

export const Clickable: StoryFn = () => (
  <evg-grid wrap="wrap">
    {Array.from({ length: 3 }).map((_, index) => (
      <evg-grid-item small-mobile="12" tablet="4" key={index}>
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
              <Badge className="evg-theme-sky-light">Press release</Badge>
              <span className="evg-text-size-body-xs">Jan 1, 2025</span>
            </evg-meta>
            <h3 className="evg-text-size-heading-sm">
              Extending Product Lifetimes: WRAP&apos;s Work on Clothing
              Durability
            </h3>
          </evg-card-content>
        </evg-card>
      </evg-grid-item>
    ))}
  </evg-grid>
);
