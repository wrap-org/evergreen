import type { Preview } from '@storybook/react'
import { DocPage } from './DocPage';

// Load the actual web components
import '../src/components/composition/App/App';
import '../src/components/composition/Grid/Grid';
import '../src/components/composition/Grid/GridItem';
import '../src/components/content/Badge/Badge';
import '../src/components/content/Icon/Icon';
import '../src/components/content/Img/Img';
import '../src/components/control/Button/Button';
import '../src/components/control/RadioCheckbox/RadioCheckbox';

import '../src/docs/components/Placeholder/Placeholder.scss'
import './styles.scss';

const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    options: {
      storySort: {
        order: [
          'Getting started',
          'Migration',
          'Support',
          'Showroom',
          'Foundations',
          'Components',
          'Recipes',
        ],
      },
    },
    docs: {
      page: ({ of }: { of: any }) => DocPage({ of }),
    },
    backgrounds: {
      disable: true,
    },
    viewport: {
      viewports: {
        aaMinimum: {
          name: 'AA minimum small mobile',
          styles: {
            width: '320px',
            height: '480px',
          },
        },
        mobile: {
          name: 'Average mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        largeMobile: {
          name: 'Large mobile',
          styles: {
            width: '414px',
            height: '736px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
