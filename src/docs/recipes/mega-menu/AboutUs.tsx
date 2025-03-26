import React from 'react';

export default function About({ open }: { readonly open: boolean }) {
  return (
    <evg-header-mega-menu
      id="about-us"
      role="menu"
      aria-label="about-us"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrapper gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                About us
              </span>
            </evg-wrapper>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item grow fill>
          <evg-section padding="lg">
            <evg-wrapper gutter="lg">
              {[
                'About us',
                'Our team',
                'Annual report',
                'Careers',
                'Media Centre',
              ].map((item) => (
                <evg-menu-item key={item}>
                  <a href="https://wrap.ngo" role="menuitem">
                    {item}
                  </a>
                </evg-menu-item>
              ))}
            </evg-wrapper>
          </evg-section>
        </evg-grid-item>
      </evg-grid>
    </evg-header-mega-menu>
  );
}
