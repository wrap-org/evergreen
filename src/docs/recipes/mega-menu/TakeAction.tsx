import React, { useState } from 'react';

export default function TakeAction({ open }: { readonly open: boolean }) {
  const [active, setActive] = useState('future-proof-food');

  const menu = [
    {
      id: 'future-proof-food',
      title: 'Future-proof food',
      items: [
        'Food Pact Network',
        'UK Food and Drink Pact',
        'UK Food and Drink Pact Water Roadmap',
        'UK Food and Drink Pact Food Waste Reduction Roadmap',
        'Guardians of Grub',
        'Love Food Hate Waste',
        'All food initiatives',
      ],
    },
    {
      id: 'prevent-problem-plastics',
      title: 'Prevent problem plastics',
      items: [
        'The Plastics Pact Network',
        'UK Plastics Pact',
        'Collaborative partnerships',
        'Global Treaty to End Plastic Pollution',
        'All plastics initiatives',
      ],
    },
    {
      id: 'transform-textiles',
      title: 'Transform textiles',
      items: [
        'Textiles Action Network',
        'Textiles 2030',
        'Circular Change Council',
        'Extended producer responsibility',
        'All textiles initiatives',
      ],
    },
    {
      id: 'accelerate-circular-economy',
      title: 'Accelerate the Circular Economy',
      items: [
        'Business recycling support',
        'Circular Change Council',
        'Extended producer responsibility',
        'Finance for action and innovation',
        'Local authority recycling support',
        'Market analysis for the recycling industry',
        'Policy design and implementation',
        'Recycle Now',
        'All circular economy initiatives',
      ],
    },
  ];

  return (
    <evg-header-mega-menu
      id="take-action"
      role="menu"
      aria-label="take action"
      tabIndex={-1}
      open={open}
    >
      <evg-grid gap="none">
        <evg-grid-item small-mobile="3" desktop="2" fill>
          <evg-section padding="lg" class="evg-theme-sand">
            <evg-wrapper gutter="lg">
              <span className="evg-text-size-heading-md evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                Take action
              </span>
            </evg-wrapper>
          </evg-section>
        </evg-grid-item>
        <evg-grid-item grow fill>
          <evg-section padding="lg">
            <evg-wrapper gutter="lg">
              <evg-grid gap="xl">
                <evg-grid-item>
                  {menu.map(({ id, title }) => (
                    <evg-menu-item key={id} active={active === id}>
                      <button
                        type="button"
                        aria-controls={id}
                        aria-expanded={active === id}
                        role="menuitem"
                        onClick={() => {
                          setActive(id);
                        }}
                      >
                        <evg-menu-item-content>{title}</evg-menu-item-content>
                        <evg-icon icon="arrow-right" />
                      </button>
                    </evg-menu-item>
                  ))}
                </evg-grid-item>
                <evg-grid-item>
                  <span className="evg-text-color-forest-75 evg-text-size-heading-xs evg-text-family-heading evg-text-transform-uppercase evg-text-weight-bold">
                    Initiatives
                  </span>
                  <evg-divider />

                  {menu.map(({ id, items }) => (
                    <evg-collapse key={id} id={id} open={active === id}>
                      {items.map((item) => (
                        <evg-menu-item key={item}>
                          <a href="https://wrap.ngo" role="menuitem">
                            {item}
                          </a>
                        </evg-menu-item>
                      ))}
                    </evg-collapse>
                  ))}
                </evg-grid-item>
              </evg-grid>
            </evg-wrapper>
          </evg-section>
        </evg-grid-item>
      </evg-grid>
    </evg-header-mega-menu>
  );
}
