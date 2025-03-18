import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingSpinner';

export default {
  title: 'Components/Content/Loading Spinner',
  parameters: {
    docs: {
      description: {
        component: `Used to communicate content is loading before the it is available. 
          Using a loading spinner should always be a last resort. The "spinning wheel of death"" is a known term in dictionary.com because of the dread it inspires in users who know that <code>loading spinner == slow.</code>.
          Instead of using a loading spinner, consider using skeleton screens made from <code><evg-loading-button></code>, <code><evg-loading-img></code> or <code><evg-loading-text></code>.`,
      },
    },
  },
} satisfies Meta;

export const Default = () => <evg-loading-spinner />;

Default.storyName = 'Loading Spinner';
