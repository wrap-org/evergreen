import React from 'react';

export default {
  title: 'Recipes/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

export const RelatedActions = () => (
  <evg-section padding="fluid">
    <evg-wrapper size="xl">
      <evg-grid gap="lg" wrap="wrap">
        {[0, 1].map((item) => (
          <evg-grid-item small-mobile="12" tablet="6" key={item}>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-icon icon="document-check" />
                <evg-menu-item-content>
                  Menu item title
                  <p>Menu item description</p>
                </evg-menu-item-content>
                <evg-icon icon="arrow-right" />
              </button>
            </evg-menu-item>
            <evg-divider />
          </evg-grid-item>
        ))}
      </evg-grid>
    </evg-wrapper>
  </evg-section>
);

export const Dashboard = () => (
  <evg-section padding="fluid" class="evg-theme-earth-light">
    <evg-wrapper size="xl">
      <evg-box
        class="evg-theme-default evg-spacing-bottom-lg"
        padding="lg"
        radius="md"
      >
        <h2 className="evg-text-size-heading-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
          Manage data
        </h2>
        <evg-grid gap="lg" wrap="wrap">
          {[0, 1, 2, 3].map((item) => (
            <evg-grid-item small-mobile="12" tablet="6" key={item}>
              <evg-divider />
              <evg-menu-item>
                <button type="button">
                  <evg-icon icon="document-check" />
                  <evg-menu-item-content>
                    Menu item title
                    <p>Menu item description</p>
                    <evg-row>
                      <evg-badge variant="sky-light">Portal</evg-badge>
                      <evg-badge variant="lime-light">Locator</evg-badge>
                    </evg-row>
                  </evg-menu-item-content>
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-menu-item>
              <evg-divider />
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-box>

      <evg-box class="evg-theme-default" padding="lg" radius="md">
        <h2 className="evg-text-size-heading-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
          View and update settings
        </h2>
        <evg-grid gap="lg" wrap="wrap">
          {[0, 1, 2, 3].map((item) => (
            <evg-grid-item small-mobile="12" tablet="6" key={item}>
              <evg-divider />
              <evg-menu-item>
                <button type="button">
                  <evg-icon icon="document-check" />
                  <evg-menu-item-content>
                    Menu item title
                    <p>Menu item description</p>
                    <evg-row>
                      <evg-badge variant="sky-light">Portal</evg-badge>
                      <evg-badge variant="lime-light">Locator</evg-badge>
                    </evg-row>
                  </evg-menu-item-content>
                </button>
              </evg-menu-item>
              <evg-divider />
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-box>
    </evg-wrapper>
  </evg-section>
);

export const RelatedLinks = () => (
  <evg-section padding="fluid" class="evg-theme-lime">
    <evg-wrapper size="xl">
      <evg-grid wrap="wrap">
        {[0, 1, 2].map((item) => (
          <evg-grid-item small-mobile="12" tablet="4" key={item}>
            <evg-divider />
            <evg-menu-item>
              <button type="button">
                <evg-menu-item-content>Menu item title</evg-menu-item-content>
                <evg-icon icon="arrow-right" />
              </button>
            </evg-menu-item>
            <evg-divider />
          </evg-grid-item>
        ))}
      </evg-grid>
    </evg-wrapper>
  </evg-section>
);

export function TagGroup() {
  const themes = ['default', 'earth-light', 'forest'];

  return (
    <>
      {themes.map((theme) => (
        <evg-section padding="fluid" class={`evg-theme-${theme}`} key={theme}>
          <evg-wrapper size="xl">
            <evg-divider class="evg-spacing-bottom-lg" />

            <h2 className="evg-text-size-heading-sm evg-text-transform-uppercase evg-spacing-bottom-lg">
              Tags
            </h2>

            <evg-grid
              wrap="wrap"
              align-items="baseline"
              class="evg-spacing-bottom-lg"
            >
              <evg-grid-item
                small-mobile="12"
                small-tablet="3"
                large-tablet="2"
              >
                <h3 className="evg-text-size-heading-xs evg-text-transform-uppercase">
                  Initiatives
                </h3>
              </evg-grid-item>
              <evg-grid-item
                small-mobile="12"
                small-tablet="9"
                large-tablet="10"
              >
                <evg-grid wrap="wrap" gap="sm">
                  {[
                    'Accelerate the circular economy',
                    'Service design',
                    'Communicating with residents',
                    'Collections and sorting',
                    'Kerbside collection',
                    'Recycling in urban areas',
                    'Dry materials',
                    'Organics',
                  ].map((tag) => (
                    <evg-grid-item key={tag}>
                      <evg-chip variant={theme === 'forest' ? 'dark' : 'light'}>
                        <a href="https://wrap.ngo">{tag}</a>
                      </evg-chip>
                    </evg-grid-item>
                  ))}
                </evg-grid>
              </evg-grid-item>
            </evg-grid>

            <evg-grid wrap="wrap" align-items="baseline">
              <evg-grid-item
                small-mobile="12"
                small-tablet="3"
                large-tablet="2"
              >
                <h3 className="evg-text-size-heading-xs evg-text-transform-uppercase">
                  Sectors
                </h3>
              </evg-grid-item>
              <evg-grid-item
                small-mobile="12"
                small-tablet="9"
                large-tablet="10"
              >
                <evg-grid wrap="wrap" gap="sm">
                  {[
                    'Waste management and reprocessors',
                    'Local Authorities',
                    'National government and departments',
                  ].map((tag) => (
                    <evg-grid-item key={tag}>
                      <evg-chip variant={theme === 'forest' ? 'dark' : 'light'}>
                        <a href="https://wrap.ngo">{tag}</a>
                      </evg-chip>
                    </evg-grid-item>
                  ))}
                </evg-grid>
              </evg-grid-item>
            </evg-grid>
          </evg-wrapper>
        </evg-section>
      ))}
    </>
  );
}
