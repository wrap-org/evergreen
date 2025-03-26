import React from 'react';

export default {
  title: 'Recipes/Banner',
  parameters: {
    layout: 'fullscreen',
  },
};

export function Banner({
  title = 'Join our newsletter',
  text = 'We work with hundreds of organisations globally, from big businesses to national and regional governments, NGOs and academics. Join us to take action!',
  button = 'Sign up now',
}: {
  readonly title?: string;
  readonly text?: string;
  readonly button?: string;
}) {
  return (
    <evg-supergraphic class="evg-theme-lime" position="bottom-left">
      <evg-section padding="fluid">
        <evg-wrapper size="xl">
          <evg-grid wrap="wrap" gap="fluid">
            <evg-grid-item small-mobile="12" tablet="6">
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase">
                {title}
              </h2>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" tablet="6">
              <p className="evg-spacing-bottom-md">{text}</p>
              <evg-button variant="secondary" width="full-width-mobile">
                <button>
                  {button}
                  <evg-icon icon="arrow-right" />
                </button>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </evg-wrapper>
      </evg-section>
    </evg-supergraphic>
  );
}
