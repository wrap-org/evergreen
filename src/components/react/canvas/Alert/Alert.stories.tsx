import { Meta } from '@storybook/react';
import React from 'react';

import Alert from './Alert';

import Button from 'components/react/controls/Button/Button';
import { emphasis } from 'lib/theme';

export default {
  title: 'React/Components/Canvas/Alert',
  component: Alert,
  parameters: {
    docs: {
      theming: true,
    },
  },
} as Meta;

export function Default() {
  return (
    <>
      {emphasis.map((theme) => (
        <Alert className={`m-theme-${theme} m-spacing-bottom-md`} key={theme}>
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
              <Button block="mobile">Button text</Button>
            </evg-grid-item>
          </evg-grid>
        </Alert>
      ))}
    </>
  );
}

Default.storyName = 'Alert';
