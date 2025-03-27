import React from 'react';

export default {
  title: 'Recipes/Chip group',
  parameters: {
    layout: 'fullscreen',
  },
};

export function ChipGroup() {
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
