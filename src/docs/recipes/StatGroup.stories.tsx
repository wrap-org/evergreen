import React from 'react';

export default {
  title: 'Recipes/Stat group',
  parameters: {
    layout: 'fullscreen',
  },
};

export function StatGroup() {
  const stats = [
    {
      icon: 'impact',
      value: '56 Mt',
      content: 'HGHG emissions saved globally',
    },
    {
      icon: 'success-stories',
      value: '2nd',
      content: 'Helping Wales become 2nd best in the world at recycling',
    },
    {
      icon: 'globe',
      value: '600+',
      content: 'Organisations united',
    },
  ];
  return (
    <>
      <evg-section padding="fluid">
        <evg-wrap size="xxl">
          <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
            Our impact
          </h2>
          <evg-grid gap="lg" wrap="wrap">
            {stats.map((stat) => (
              <evg-grid-item small-mobile="12" tablet="4" key={stat.icon}>
                <evg-stat align="center">
                  <evg-stat-icon>
                    <evg-icon icon={stat.icon} set="functional" />
                  </evg-stat-icon>
                  <evg-stat-value>{stat.value}</evg-stat-value>
                  <evg-stat-content>{stat.content}</evg-stat-content>
                </evg-stat>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-forest">
        <evg-wrap size="xxl">
          <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
            Our impact
          </h2>
          <evg-grid gap="lg" wrap="wrap">
            {stats.map((stat) => (
              <evg-grid-item small-mobile="12" tablet="4" key={stat.icon}>
                <evg-stat>
                  <evg-stat-value>{stat.value}</evg-stat-value>
                  <evg-stat-content>{stat.content}</evg-stat-content>
                </evg-stat>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-default">
        <evg-wrap size="xxl">
          <evg-grid gap="lg" wrap="wrap">
            <evg-grid-item small-mobile="12" tablet="4">
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
                Our impact
              </h2>
              <p>
                Our members are united behind ambitious, science-based 2030
                targets, which progress measured annually using our exclusive
                Textiles 2030 Footprint Tool
              </p>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" tablet="8">
              {stats.map((stat) => (
                <evg-stat
                  class="evg-spacing-bottom-lg"
                  key={stat.icon}
                  layout="row"
                >
                  <evg-stat-value>{stat.value}</evg-stat-value>
                  <evg-stat-content>{stat.content}</evg-stat-content>
                </evg-stat>
              ))}
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrap size="xxl">
          <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
            Our impact
          </h2>
          <evg-grid gap="lg" wrap="wrap">
            {stats.map((stat) => (
              <evg-grid-item small-mobile="12" tablet="4" key={stat.icon}>
                <evg-stat align="center">
                  <evg-stat-icon>
                    <evg-icon icon={stat.icon} set="functional" />
                  </evg-stat-icon>
                  <evg-stat-value>{stat.value}</evg-stat-value>
                  <evg-stat-content>{stat.content}</evg-stat-content>
                </evg-stat>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-forest">
        <evg-wrap size="xxl">
          <evg-grid gap="lg" wrap="wrap">
            <evg-grid-item small-mobile="12" tablet="4">
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
                Our impact
              </h2>
              <p>
                Our members are united behind ambitious, science-based 2030
                targets, which progress measured annually using our exclusive
                Textiles 2030 Footprint Tool
              </p>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" tablet="8">
              {stats.map((stat) => (
                <evg-stat
                  class="evg-spacing-bottom-lg"
                  key={stat.icon}
                  layout="row"
                >
                  <evg-stat-icon>
                    <evg-icon icon={stat.icon} set="functional" />
                  </evg-stat-icon>
                  <evg-stat-value>{stat.value}</evg-stat-value>
                  <evg-stat-content>{stat.content}</evg-stat-content>
                </evg-stat>
              ))}
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
      <evg-section padding="fluid" class="evg-theme-earth-light">
        <evg-wrap size="xxl">
          <evg-grid gap="lg" wrap="wrap">
            <evg-grid-item small-mobile="12" tablet="4">
              <h2 className="evg-text-size-heading-lg evg-text-transform-uppercase evg-spacing-bottom-lg">
                Our impact
              </h2>
              <p>
                Our members are united behind ambitious, science-based 2030
                targets, which progress measured annually using our exclusive
                Textiles 2030 Footprint Tool
              </p>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" tablet="8">
              {stats.map((stat) => (
                <evg-stat
                  class="evg-spacing-bottom-lg"
                  key={stat.icon}
                  layout="row"
                >
                  <evg-stat-value>{stat.value}</evg-stat-value>
                  <evg-stat-content>{stat.content}</evg-stat-content>
                </evg-stat>
              ))}
            </evg-grid-item>
          </evg-grid>
        </evg-wrap>
      </evg-section>
    </>
  );
}
