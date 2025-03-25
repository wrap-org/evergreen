import startCase from 'lodash/startCase';
import React from 'react';

import { themes } from '@/lib/theme';

const description = `
  Many components in the design system accept a theme context. The theme context
  enables a set of variables for display properties like background, text and border
  colours.

  Themes can be applied to components by setting a theme utility class (\`evg-theme-forest\`) on the
  component or one of the parent elements.

  Components that support theming have a 'theme support' badge at the top of their docs page.
`;

export default {
  title: 'Foundations/Utilities/Theme',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: description,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'color-contrast',
            enabled: false,
          },
          {
            id: 'link-in-text-block',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: themes,
    },
  },
};

const ThemedSection = ({ theme }) => (
  <evg-section class={`evg-theme-${theme}`} padding="fluid">
    <evg-wrap size="md">
      <h2 className="evg-spacing-bottom-sm">{startCase(theme)}</h2>
      <p className="evg-spacing-bottom-lg">
        Aliquam egestas mi quam, a tincidunt lectus{' '}
        <a href="https://wrap.ngo">faucibus euismod</a>. Pellentesque et metus
        nunc. Fusce ante arcu, mattis pretium semper ac, pretium vitae velit.
        Donec vitae eros et arcu accumsan auctor at id ipsum. Aliquam finibus,
        mi ac tincidunt blandit, purus elit ornare dui, nec dignissim mi ante
        sit amet mauris.
      </p>

      <evg-grid>
        <evg-grid-item small-mobile="12" mobile="auto">
          <evg-button
            variant={theme === 'lime' ? 'default' : 'primary'}
            width="full-width-mobile"
          >
            <button>Button text</button>
          </evg-button>
        </evg-grid-item>
        <evg-grid-item small-mobile="12" mobile="auto">
          <evg-button
            variant={theme === 'lime' ? 'secondary' : 'default'}
            width="full-width-mobile"
          >
            <button>Button text</button>
          </evg-button>
        </evg-grid-item>
      </evg-grid>
    </evg-wrap>
  </evg-section>
);

export const Theme = ({ theme }) => <ThemedSection theme={theme} />;

Theme.args = {
  theme: 'default',
};

export const Variations = () => (
  <>
    {themes.map((theme) => (
      <ThemedSection key={theme} theme={theme} />
    ))}
  </>
);
