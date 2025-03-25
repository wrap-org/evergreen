import React from 'react';

import { LaPortal as AppLayout } from '../../recipes/App.stories';

export function ReportHome() {
  return (
    <AppLayout secondaryNav>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrap size="xl">
          <h1 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-sm">
            Communal report
          </h1>
          <p className="evg-text-size-body-lg evg-spacing-bottom-lg">
            Create a report for the households with a communal collection
          </p>
          <evg-alert type="info" class="evg-spacing-bottom-lg">
            <strong>A report should be completed for this collection</strong>
          </evg-alert>

          <evg-box
            border
            radius="lg"
            class="evg-theme-default evg-spacing-bottom-lg"
          >
            <evg-box-section padding="md">
              <h2 className="evg-text-size-heading-md evg-text-transform-uppercase">
                Report progress
              </h2>
            </evg-box-section>
            <evg-box-section padding="md">
              <p className="evg-text-size-body-sm">
                To complete a report you must provide details about your current
                communal collection.
              </p>
              <ul className="evg-text-size-body-sm">
                <li>
                  The information you provide will be visible to all members of
                  this LA with access to eTEEP.
                </li>
                <li>
                  If you are working with colleagues on this report, your
                  progress will be saved as single working version.
                </li>
              </ul>

              <evg-grid
                wrap="wrap"
                class="evg-spacing-top-lg evg-spacing-bottom-lg"
              >
                <evg-grid-item
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="3"
                >
                  <evg-menu-item>
                    <a href="https://wrap.ngo">
                      <evg-menu-item-content>
                        1. Service costs
                        <p>Menu item description</p>
                        <evg-meta>
                          <evg-badge variant="lime light">
                            Get started
                          </evg-badge>
                        </evg-meta>
                      </evg-menu-item-content>
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-menu-item>
                </evg-grid-item>
                <evg-grid-item
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="3"
                >
                  <evg-menu-item>
                    <a href="https://wrap.ngo">
                      <evg-menu-item-content>
                        2. Economic
                        <p>Menu item description</p>
                        <evg-meta>
                          <evg-badge variant="sky light">Upcoming</evg-badge>
                        </evg-meta>
                      </evg-menu-item-content>
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-menu-item>
                </evg-grid-item>
                <evg-grid-item
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="3"
                >
                  <evg-menu-item>
                    <a href="https://wrap.ngo">
                      <evg-menu-item-content>
                        3. Environmental
                        <p>Menu item description</p>
                        <evg-meta>
                          <evg-badge variant="sky light">Upcoming</evg-badge>
                        </evg-meta>
                      </evg-menu-item-content>
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-menu-item>
                </evg-grid-item>
                <evg-grid-item
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="3"
                >
                  <evg-menu-item>
                    <a href="https://wrap.ngo">
                      <evg-menu-item-content>
                        4 Technical
                        <p>Menu item description</p>
                        <evg-meta>
                          <evg-badge variant="sky light">Upcoming</evg-badge>
                        </evg-meta>
                      </evg-menu-item-content>
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-menu-item>
                </evg-grid-item>
              </evg-grid>

              <evg-grid justify-content="flex-end">
                <evg-grid-item
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="3"
                >
                  <evg-button variant="primary" width="full-width">
                    <button type="button">
                      Continue
                      <evg-icon icon="arrow-right" />
                    </button>
                  </evg-button>
                </evg-grid-item>
              </evg-grid>
            </evg-box-section>
            <evg-box-section class="evg-theme-sand" padding="md">
              <evg-grid wrap="wrap">
                <evg-grid-item small-mobile="12" small-tablet="6">
                  <evg-menu-item>
                    <a href="https://wrap.ngo">
                      <evg-icon icon="document" />
                      <evg-menu-item-content>
                        Report preview
                        <p>
                          After completing steps 1 to 4 your team will be able
                          to preview the report to check th
                        </p>
                      </evg-menu-item-content>
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-menu-item>
                </evg-grid-item>
                <evg-grid-item small-mobile="12" small-tablet="6">
                  <evg-menu-item>
                    <a href="https://wrap.ngo">
                      <evg-icon icon="document" />
                      <evg-menu-item-content>
                        Confirm and download
                        <p>
                          Once all parts of the report are complete, you’ll be
                          able to confirm your submission
                        </p>
                      </evg-menu-item-content>
                      <evg-icon icon="arrow-right" />
                    </a>
                  </evg-menu-item>
                </evg-grid-item>
              </evg-grid>
            </evg-box-section>
          </evg-box>

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
