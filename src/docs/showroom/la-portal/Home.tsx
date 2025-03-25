import React from 'react';

import { LaPortal as AppLayout } from '../../recipes/App.stories';

export function Home() {
  return (
    <AppLayout>
      <evg-section padding="fluid">
        <evg-wrap size="xl">
          <h1 className="evg-text-size-heading-lg">Southampton City Council</h1>
        </evg-wrap>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrap size="xl">
          <h2 className="evg-text-size-heading-sm evg-text-transform-uppercase evg-spacing-bottom-md">
            Collection types
          </h2>
          <evg-grid wrap="wrap" gap="lg" class="evg-spacing-bottom-lg">
            <evg-grid-item small-mobile="12" small-tablet="6">
              <evg-card radius="md" class="evg-theme-default">
                <evg-card-content>
                  <evg-meta>
                    <evg-badge type="positive">Confirmed</evg-badge>
                  </evg-meta>
                  <h3 className="evg-text-size-body-xl evg-text-family-body">
                    Kerbside collection
                  </h3>
                  <p className="evg-text-size-body-sm">
                    The details have been confirmed for this collection. The
                    report is available to download.
                  </p>
                  <evg-button width="full-width">
                    <a href="https://wrap.ngo">
                      View details
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-button>
                </evg-card-content>
              </evg-card>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="6">
              <evg-card radius="md" class="evg-theme-default">
                <evg-card-content>
                  <evg-meta>
                    <evg-badge type="info">In progress</evg-badge>
                  </evg-meta>
                  <h3 className="evg-text-size-body-xl evg-text-family-body">
                    Communal collection
                  </h3>
                  <p className="evg-text-size-body-sm">
                    Complete a report for all households which receive a
                    Communal collection service.
                  </p>
                  <evg-button width="full-width" variant="primary">
                    <a href="https://wrap.ngo">
                      Start a report
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-button>
                </evg-card-content>
              </evg-card>
            </evg-grid-item>
          </evg-grid>
          <h2 className="evg-text-size-heading-sm evg-text-transform-uppercase evg-spacing-bottom-md">
            Help and guidance
          </h2>
          <docs-placeholder class="evg-spacing-bottom-md">FAQ</docs-placeholder>
          <docs-placeholder class="evg-spacing-bottom-md">FAQ</docs-placeholder>
          <docs-placeholder class="evg-spacing-bottom-md">FAQ</docs-placeholder>
          <docs-placeholder class="evg-spacing-bottom-md">FAQ</docs-placeholder>
          <docs-placeholder>FAQ</docs-placeholder>
        </evg-wrap>
      </evg-section>
    </AppLayout>
  );
}
