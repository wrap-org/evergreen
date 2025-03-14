import React from 'react';

export default {
  title: 'Recipes/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Full(props) {
  return (
    <footer {...props}>
      <evg-section padding="lg" class="evg-theme-forest">
        <h2 hidden>Footer</h2>
        <evg-wrap size="xxl">
          <evg-grid gap="xl" wrap="wrap" class="evg-spacing-bottom-xl">
            <evg-grid-item small-mobile="12" tablet="6" large-tablet="8">
              <h3 className="evg-text-size-heading-xs evg-text-transform-uppercase evg-spacing-top-sm evg-spacing-bottom-sm">
                Important links
              </h3>
              <evg-divider />
              <evg-grid gap="none" wrap="wrap">
                <evg-grid-item
                  small-mobile="12"
                  large-mobile="6"
                  tablet="12"
                  large-tablet="6"
                  small-desktop="6"
                >
                  {[1, 2, 3, 4].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">Menu item title</a>
                    </evg-menu-item>
                  ))}
                </evg-grid-item>
                <evg-grid-item
                  small-mobile="12"
                  large-mobile="6"
                  tablet="12"
                  large-tablet="6"
                  small-desktop="6"
                >
                  {[1, 2, 3, 4].map((item) => (
                    <evg-menu-item key={item}>
                      <a href="https://wrap.ngo">Menu item title</a>
                    </evg-menu-item>
                  ))}
                </evg-grid-item>
              </evg-grid>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" tablet="6" large-tablet="4">
              <h3 className="evg-text-size-heading-xs evg-text-transform-uppercase evg-spacing-top-sm evg-spacing-bottom-sm">
                Our locations
              </h3>
              <evg-divider />
              {[
                'London, England',
                'Banbury, England',
                'Cardiff, Wales',
                'Belfast, Ireland',
                'Adelaide, Australia',
                'Washington DC, USA',
              ].map((item) => (
                <evg-menu-item key={item}>
                  <a href="https://wrap.ngo">
                    <evg-icon icon="location" />
                    <evg-menu-item-content>{item}</evg-menu-item-content>
                  </a>
                </evg-menu-item>
              ))}
            </evg-grid-item>
          </evg-grid>

          <evg-grid align-items="center" wrap="wrap">
            <evg-grid-item grow shrink small-mobile="12" large-mobile="auto">
              <evg-img block>
                <img
                  src="/images/logo/white.svg"
                  alt="WRAP logo"
                  width="166"
                  height="48"
                  loading="lazy"
                />
              </evg-img>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="secondary" width="square">
                <a href="https://wrap.ngo" aria-label="Link text">
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="secondary" width="square">
                <a href="https://wrap.ngo" aria-label="Link text">
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="secondary" width="square">
                <a href="https://wrap.ngo" aria-label="Link text">
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="lg" class="evg-theme-coal">
        <evg-wrap size="xxl">
          <p className="evg-text-size-body-xs">
            The Waste and Resources Action Programme (which operates as WRAP) is
            a registered UK Charity No.1159512.
            <br aria-hidden />
            Registered office at Second Floor, Blenheim Court, 19 George Street,
            Banbury, Oxon, OX16 5BH.
          </p>
          <p className="evg-text-size-body-xs">
            WRAP is an EU registered trade mark. Our terms & conditions include
            details of this and of WRAP’s other registered trade marks.
          </p>
        </evg-wrap>
      </evg-section>
    </footer>
  );
}

export function Minimal(props) {
  return (
    <footer {...props}>
      <evg-section padding="lg" class="evg-theme-forest">
        <evg-wrap size="xxl">
          <evg-grid align-items="center" wrap="wrap">
            <evg-grid-item grow shrink small-mobile="12" large-mobile="auto">
              <evg-img block>
                <img
                  src="/images/logo/white.svg"
                  alt="WRAP logo"
                  width="166"
                  height="48"
                  loading="lazy"
                />
              </evg-img>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="secondary" width="square">
                <a href="https://wrap.ngo" aria-label="Link text">
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="secondary" width="square">
                <a href="https://wrap.ngo" aria-label="Link text">
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
            <evg-grid-item>
              <evg-button variant="secondary" width="square">
                <a href="https://wrap.ngo" aria-label="Link text">
                  <evg-icon icon="external-link" />
                </a>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="lg" class="evg-theme-coal">
        <evg-wrap size="xxl">
          <p className="evg-text-size-body-xs">
            The Waste and Resources Action Programme (which operates as WRAP) is
            a registered UK Charity No.1159512.
            <br aria-hidden />
            Registered office at Second Floor, Blenheim Court, 19 George Street,
            Banbury, Oxon, OX16 5BH.
          </p>
          <p className="evg-text-size-body-xs">
            WRAP is an EU registered trade mark. Our terms & conditions include
            details of this and of WRAP’s other registered trade marks.
          </p>
        </evg-wrap>
      </evg-section>
    </footer>
  );
}
