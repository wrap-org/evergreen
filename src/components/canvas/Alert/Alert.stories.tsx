import { Meta } from '@storybook/react';
import React from 'react';

import Alert from './Alert';

import Grid from 'components/composition/Grid/Grid';
import Button from 'components/controls/Button/Button';
import { emphasis } from 'lib/theme';

export default {
  title: 'Components/Canvas/Alert',
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
          <Grid wrap>
            <Grid.Item grow shrink>
              <strong>Alert title</strong>
              <br />
              <p>
                Vivamus iaculis purus orci, ac mollis lectus porttitor et.
                Integer ac risus a orci pharetra suscipit.
              </p>
            </Grid.Item>
            <Grid.Item xs={12} md="auto">
              <Button block="mobile">Button text</Button>
            </Grid.Item>
          </Grid>
        </Alert>
      ))}
    </>
  );
}

Default.storyName = 'Alert';
