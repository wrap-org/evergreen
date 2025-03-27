import React from 'react';

import { Data as AppLayout } from '../../recipes/App.stories';
import { Banner } from '../../recipes/Banner.stories';

export function SecondLevel() {
  return (
    <AppLayout>
      <evg-section class="evg-theme-earth-light" padding="fluid">
        <evg-wrapper size="xl">
          <docs-placeholder>Page header</docs-placeholder>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid">
        <evg-wrapper size="lg">
          <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg evg-text-align-center">
            Food waste is a big deal
          </h2>
          <h3 className="evg-spacing-bottom-lg">
            Most food waste in the UK comes from our homes
          </h3>
          <p className="evg-spacing-bottom-lg">
            Food waste is produced by households and the following sectors:
            on-farm, food manufacture, hospitality and food service (HaFS), and
            retail. In the UK, WRAP estimates total food waste in 2021 at 10.7
            million tonnes, with 6.4 million tonnes coming from households.
            Therefore, to reduce food waste we need to reduce what is wasted in
            our homes.
          </p>
          <evg-img block responsive>
            <img
              src="/images/placeholder/400x200.svg"
              alt="Pie chart"
              width="400"
              height="200"
            />
          </evg-img>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrapper size="lg">
          <h3>Household food waste has declined since 2007</h3>
          <p>
            In the UK between 2007 and 2010, household food waste decreased,
            then remained stable until 2018. Between 2018 and the most recent
            available data (2021), there has been an increase, although levels
            of food waste are still 17% lower than 2007.
          </p>
          <p>
            The increase between 2018 and 2021 is likely linked to the COVID-19
            pandemic and low food prices relative to earnings in 2021. However,
            as food prices increased in 2022 and 2023, household food waste
            could be decreasing again. New data will be available in 2024 and
            2025 to investigate this trend.
          </p>
          <evg-img
            block
            responsive
            class="evg-spacing-bottom-lg evg-spacing-top-lg"
          >
            <img
              src="/images/placeholder/400x200.svg"
              alt="Pie chart"
              width="400"
              height="200"
            />
          </evg-img>
          <h4>Data used for assessing trends</h4>

          <p>
            Only data from food waste collected by local authorities are used
            due to their higher reliability. Therefore, the weight of food waste
            in this graph appears lower compared to others, as it excludes food
            wasted via the sewer and home composting which make up 18% of all
            household food waste.
          </p>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid">
        <evg-wrapper size="lg">
          <h3>More household food waste could be recycled</h3>
          <p>
            Most household food and drink waste in the UK goes into the general
            waste collection (aka black bag waste) and either ends up in
            landfill or incinerated. More food waste should be collected
            separately from households, allowing it to go to anaerobic
            digestion, where it can be used to generate power.
          </p>
          <p>
            Home composting is also a sustainable alternative to disposing of
            food waste in the general waste bin. The picture is very different
            in some parts of the UK, with 45% of household food waste being
            recycled in Wales compared to 17% in the UK. This highlights what
            could be achieved across the UK.
          </p>
          <evg-img block responsive class="evg-spacing-top-lg">
            <img
              src="/images/placeholder/400x200.svg"
              alt="Pie chart"
              width="400"
              height="200"
            />
          </evg-img>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrapper size="lg">
          <h3>Most food waste is preventable</h3>
          <p>
            Food waste is subdivided into i) parts of food that are generally
            considered edible, and ii) parts of food considered inedible. The
            edible parts, which form around three-quarters of UK household food
            waste, generally could have been eaten if managed properly and are
            therefore preventable.
          </p>
          <p>
            Examples include expired milk, leftovers from dinner and burnt rice.
            It should be noted that much of these ‘edible parts’ are no longer
            suitable for consumption when discarded: they may have passed a
            use-by date or gone mouldy. The inedible parts of food waste
            includes eggshells, bones, and citrus peels.
          </p>
          <evg-img
            block
            responsive
            class="evg-spacing-bottom-lg evg-spacing-top-lg"
          >
            <img
              src="/images/placeholder/400x200.svg"
              alt="Pie chart"
              width="400"
              height="200"
            />
          </evg-img>
          <h4>Edible parts of food waste by food category</h4>

          <p>
            To effectively reduce household food waste, it is important to focus
            on the categories that contribute the most to the total amount of
            “edible parts” thrown away. The largest proportion comes from fresh
            vegetables and salads, followed by meals (both homemade and
            pre-prepared) and bakery items. Examining the amount of edible food
            within both broad and specific food categories can help target
            efforts.
          </p>
        </evg-wrapper>
      </evg-section>
      <evg-section padding="fluid">
        <evg-wrapper size="xl">
          <evg-grid
            justify-content="space-between"
            align-items="center"
            class="evg-spacing-bottom-lg"
          >
            <evg-grid-item>
              <h3>The impact of food waste</h3>
            </evg-grid-item>
            <evg-grid-item>
              <docs-placeholder inline>Tabs</docs-placeholder>
            </evg-grid-item>
          </evg-grid>
          <evg-grid gap="lg" wrap="wrap">
            <evg-grid-item small-mobile="12" large-tablet="4">
              <evg-stat align="center">
                <evg-stat-icon>
                  <evg-icon icon="success-stories" set="functional" />
                </evg-stat-icon>
                <evg-stat-value>£17bn</evg-stat-value>
                <evg-stat-content>
                  Edible parts of food thrown away is worth £17 Billion every
                  year
                </evg-stat-content>
              </evg-stat>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-tablet="4">
              <evg-stat align="center">
                <evg-stat-icon>
                  <evg-icon icon="money" set="functional" />
                </evg-stat-icon>
                <evg-stat-value>£1k</evg-stat-value>
                <evg-stat-content>
                  typical cost of food waste per household (based family of
                  four)
                </evg-stat-content>
              </evg-stat>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-tablet="4">
              <evg-stat align="center">
                <evg-stat-icon>
                  <evg-icon icon="user" set="functional" />
                </evg-stat-icon>
                <evg-stat-value>£250</evg-stat-value>
                <evg-stat-content>cost per person</evg-stat-content>
              </evg-stat>
            </evg-grid-item>
          </evg-grid>
        </evg-wrapper>
      </evg-section>

      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrapper size="lg">
          <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg evg-text-align-center">
            Take action
          </h2>
          <evg-grid gap="lg" wrap="wrap" class="evg-spacing-bottom-lg">
            <evg-grid-item small-mobile="12" large-mobile="6" fill>
              <evg-card class="evg-theme-default" radius="md" padding="lg">
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
                  <h3 className="evg-text-size-heading-md">Delve deeper</h3>
                  <p className="evg-text-size-body-sm">
                    Explore further details about this research
                  </p>
                  <evg-button variant="primary" width="full-width-mobile">
                    <button>
                      Read more
                      <evg-icon icon="arrow-right" />
                    </button>
                  </evg-button>
                </evg-card-content>
              </evg-card>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-mobile="6" fill>
              <evg-card class="evg-theme-default" radius="md" padding="lg">
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
                  <h3 className="evg-text-size-heading-md">For citizens</h3>
                  <p className="evg-text-size-body-sm">
                    Want to cut your household food waste?
                  </p>
                  <evg-button variant="primary" width="full-width-mobile">
                    <button>
                      Read more
                      <evg-icon icon="arrow-right" />
                    </button>
                  </evg-button>
                </evg-card-content>
              </evg-card>
            </evg-grid-item>
          </evg-grid>

          <h3 className="evg-text-size-heading-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
            Food waste information for:
          </h3>

          <evg-grid gap="lg" wrap="wrap">
            <evg-grid-item small-mobile="12" large-mobile="6">
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Retailers and brands</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Manufacturers</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Local authorities</a>
              </evg-menu-item>
              <evg-divider />
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-mobile="6">
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Hospitality and food service</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Farmers and growers</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Citizens</a>
              </evg-menu-item>
              <evg-divider />
            </evg-grid-item>
          </evg-grid>
        </evg-wrapper>
      </evg-section>

      <evg-section padding="fluid">
        <evg-wrapper size="xl">
          <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg evg-text-align-center">
            Next story
          </h2>
          <evg-card
            class="evg-theme-default"
            radius="md"
            padding="lg"
            layout="image-right"
          >
            <evg-card-img>
              <img
                src="/images/placeholder/400x200.svg"
                alt="Placeholder"
                width="400"
                height="200"
                loading="lazy"
              />
            </evg-card-img>
            <evg-card-content>
              <evg-row>
                <span className="evg-text-size-body-xs">January 2024</span>
              </evg-row>
              <h3 className="evg-text-size-heading-md">
                Annual Survey of Redistribution Organisations in the UK
              </h3>
              <p className="evg-text-size-body-sm">2023 update</p>
              <evg-button variant="primary" width="full-width-mobile">
                <button>
                  View story
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-card-content>
          </evg-card>
        </evg-wrapper>
      </evg-section>

      <Banner
        title="Join us in leading the change"
        text="We believe in the power of working together to create long lasting change. Work with us as we lead the way to building a more sustainable future."
        button="Sign up now"
      />
    </AppLayout>
  );
}
