import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Label from '../Label/Label';

import Checkbox from './Checkbox';

import FormGroup from 'components/composition/FormGroup/FormGroup';
import Grid from 'components/composition/Grid/Grid';

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as Meta;

export function Default() {
  return (
    <Checkbox name="checkbox" id="checkbox">
      Checkbox label
    </Checkbox>
  );
}

export function Checked() {
  return (
    <fieldset>
      <FormGroup horizontal>
        <FormGroup.Label>
          <Label as="legend">Label</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <Grid wrap>
            <Grid.Item xs={12}>
              <Checkbox name="checkbox" forceChecked touched valid>
                Checkbox label
              </Checkbox>
            </Grid.Item>
            <Grid.Item xs={12}>
              <Checkbox name="checkbox" touched valid>
                A really long checkbox label that wraps onto another line if it
                needs to
              </Checkbox>
            </Grid.Item>
          </Grid>
        </FormGroup.Control>
      </FormGroup>
    </fieldset>
  );
}

export function TypeInput() {
  return (
    <Checkbox name="checkbox" id="checkbox" type="input">
      Checkbox label
    </Checkbox>
  );
}

export function TypeList() {
  return (
    <Grid wrap>
      <Grid.Item xs={12}>
        <Checkbox name="checkbox" id="checkbox" type="list">
          Checkbox label
        </Checkbox>
      </Grid.Item>
      <Grid.Item xs={12}>
        <Checkbox name="checkbox" id="checkbox" type="list">
          Checkbox label
        </Checkbox>
      </Grid.Item>
    </Grid>
  );
}

Default.storyName = 'Checkbox';
