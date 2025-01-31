import { Meta } from '@storybook/react';
import React from 'react';

import Section from './Section';

import Grid from 'components/react/composition/Grid/Grid';
import Button from 'components/react/controls/Button/Button';
import { base } from 'lib/theme';

export default {
  title: 'React/Components/Canvas/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      theming: true,
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
} as Meta;

export function Default() {
  return (
    <>
      {base.map((theme) => (
        <Section className={`m-theme-${theme}`} key={theme}>
          <evg-wrap
            size="lg"
            className="m-spacing-top-fluid m-spacing-bottom-fluid"
          >
            <h2>Section title</h2>
            <p>
              Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
              Pellentesque et metus nunc.{' '}
              <a href="#something">Fusce ante arcu</a>, mattis pretium semper
              ac, pretium vitae velit. Donec vitae eros et arcu accumsan auctor
              at id ipsum. Aliquam finibus, mi ac tincidunt blandit, purus elit
              ornare dui, nec dignissim mi ante sit amet mauris.
            </p>
            <Grid wrap>
              <Grid.Item xs={12} sm="auto">
                <Button block="mobile">Button text</Button>
              </Grid.Item>
              <Grid.Item xs={12} sm="auto">
                <Button type="primary" block="mobile">
                  Button text
                </Button>
              </Grid.Item>
            </Grid>
          </evg-wrap>
        </Section>
      ))}
    </>
  );
}

Default.storyName = 'Section';
