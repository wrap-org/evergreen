import React, { useState, useEffect } from 'react';

export default {
  title: 'Recipes/Loading',
};

export function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  console.log(loading);

  return (
    <evg-section padding="fluid" class="evg-theme-earth-light">
      <evg-wrapper
        size="lg"
        class="evg-text-align-center evg-spacing-bottom-lg"
      >
        <h2 aria-hidden>
          <evg-loading-text />
        </h2>
        <p aria-hidden>
          <evg-loading-text />
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
              <evg-card>
                <evg-card-img>
                  <evg-loading-image width="400" height="300" />
                </evg-card-img>
                <evg-card-content>
                  <h3 aria-hidden>
                    <evg-loading-text />
                  </h3>
                  <p aria-hidden>
                    <evg-loading-text />
                  </p>
                  <evg-loading-button />
                </evg-card-content>
              </evg-card>
            </evg-grid-item>
          ))}
        </evg-grid>
      </evg-wrapper>
    </evg-section>
  );
}
