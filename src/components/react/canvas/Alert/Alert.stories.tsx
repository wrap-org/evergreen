import { Meta } from '@storybook/react';
import React from 'react';

import Alert from './Alert';

export default {
  title: 'React/Components/Canvas/Alert',
  component: Alert,
  parameters: {
    docs: {
      theming: true,
    },
  },
} satisfies Meta;

export function Default() {
  return (
    <>
      {[1].map((theme) => (
        <Alert
          className={`evg-theme-${theme} evg-spacing-bottom-md`}
          key={theme}
        >
          <evg-grid wrap="wrap">
            <evg-grid-item grow shrink>
              <strong>Alert title</strong>
              <br />
              <p>
                Vivamus iaculis purus orci, ac mollis lectus porttitor et.
                Integer ac risus a orci pharetra suscipit.
              </p>
            </evg-grid-item>
            <evg-grid-item small-mobile="12" small-tablet="auto">
              <evg-button width="full-width-mobile">
                <button>Button text</button>
              </evg-button>
            </evg-grid-item>
          </evg-grid>
        </Alert>
      ))}
    </>
  );
}

Default.storyName = 'Alert';
