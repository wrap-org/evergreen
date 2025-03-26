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
                    <evg-meta>
                      <evg-badge variant="sky light">Portal</evg-badge>
                      <evg-badge variant="lime light">Locator</evg-badge>
                    </evg-meta>
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
                    <evg-meta>
                      <evg-badge variant="sky light">Portal</evg-badge>
                      <evg-badge variant="lime light">Locator</evg-badge>
                    </evg-meta>
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
