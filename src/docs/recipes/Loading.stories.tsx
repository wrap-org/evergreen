import React, { useState, useEffect } from 'react';

export default {
  title: 'Recipes/Loading',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <evg-section padding="fluid" class="evg-theme-earth-light">
      <div
        aria-live="polite"
        aria-busy={loading ? 'true' : 'false'}
        className="evg-sr-only"
      >
        {loading ? 'Loading content' : 'Content loaded'}
      </div>
      {loading ? (
        <div aria-hidden>
          <evg-wrapper
            size="lg"
            class="evg-text-align-center evg-spacing-bottom-lg"
          >
            <evg-enter type="fade">
              <h2 className="evg-text-size-heading-lg evg-spacing-bottom-md">
                <evg-loading-text>Section title</evg-loading-text>
              </h2>
              <p>
                <evg-loading-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  in cursus eros. Pellentesque ut rutrum tellus.
                </evg-loading-text>
              </p>
            </evg-enter>
          </evg-wrapper>
          <evg-wrapper size="xl">
            <evg-grid gap="lg" wrap="wrap">
              {[0, 1, 2].map((item) => (
                <evg-grid-item
                  key={item}
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="4"
                >
                  <evg-enter type="fade-in-up" delay={item * 0.1 + 0.5}>
                    <evg-card radius="md" class="evg-theme-default">
                      <evg-card-img>
                        <evg-loading-img width="400" height="300" />
                      </evg-card-img>
                      <evg-card-content>
                        <h3>
                          <evg-loading-text>Loading text</evg-loading-text>
                        </h3>
                        <p>
                          <evg-loading-text>Loading text</evg-loading-text>
                        </p>
                        <evg-button width="full-width">
                          <evg-loading-button>Button text</evg-loading-button>
                        </evg-button>
                      </evg-card-content>
                    </evg-card>
                  </evg-enter>
                </evg-grid-item>
              ))}
            </evg-grid>
          </evg-wrapper>
        </div>
      ) : (
        <>
          <evg-wrapper
            size="lg"
            class="evg-text-align-center evg-spacing-bottom-lg"
          >
            <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-md">
              Section title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              cursus eros. Pellentesque ut rutrum tellus.
            </p>
          </evg-wrapper>
          <evg-wrapper size="xl">
            <evg-grid gap="lg" wrap="wrap">
              {[0, 1, 2].map((item) => (
                <evg-grid-item
                  key={item}
                  small-mobile="12"
                  small-tablet="6"
                  large-tablet="4"
                >
                  <evg-card radius="md" class="evg-theme-default">
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
                      <h3>Card title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <evg-button width="full-width">
                        <button type="button">Button text</button>
                      </evg-button>
                    </evg-card-content>
                  </evg-card>
                </evg-grid-item>
              ))}
            </evg-grid>
          </evg-wrapper>
        </>
      )}
    </evg-section>
  );
}
