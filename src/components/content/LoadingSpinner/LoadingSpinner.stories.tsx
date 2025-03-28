import { Meta } from '@storybook/react';
import React from 'react';

import './LoadingSpinner';

const description = `
Loading Spinner provides clear visual feedback when content or processes are loading without revealing
structure details. This simplified animation should be used sparingly and only in situations where a
skeleton state cannot be implemented, as it lacks the structural context that Loading Skeletons offer.

Using a loading spinner should always be a last resort. The "spinning wheel of death" is a known term
in dictionary.com because of the dread it inspires in users who know that <code>loading spinner == slow.</code>.
Instead of using a loading spinner, consider using skeleton screens made from <code><evg-loading-button></code>,
<code><evg-loading-img></code> or <code><evg-loading-text></code>.
`;

export default {
  title: 'Components/Content/Loading Spinner',
  parameters: {
    docs: {
      subtitle:
        'A minimal animated indicator conveying that an operation is in progress.',
      description: { component: description },
    },
  },
} satisfies Meta;

export const Default = () => <evg-loading-spinner />;

Default.storyName = 'Loading Spinner';
