import React from 'react';

export default function About({ open }: { readonly open: boolean }) {
  return (
    <evg-header-mega-menu
      id="about-us"
      aria-label="about-us"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrap gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                About us
              </span>
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item grow fill>
          <evg-section padding="lg">
            <evg-wrap gutter="lg">
              {[
                'About us',
                'Our team',
                'Annual report',
                'Careers',
                'Media Centre',
              ].map((item) => (
                <evg-menu-item key={item}>
                  <a href="https://wrap.ngo">{item}</a>
                </evg-menu-item>
              ))}
            </evg-wrap>
          </evg-section>
        </evg-grid-item>
      </evg-grid>
    </evg-header-mega-menu>
  );
}
