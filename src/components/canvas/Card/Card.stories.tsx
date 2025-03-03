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
