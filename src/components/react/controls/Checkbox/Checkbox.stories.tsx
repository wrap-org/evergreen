import { Meta } from '@storybook/react';
import React from 'react';

import Label from '../Label/Label';

import Checkbox from './Checkbox';

import FormGroup from 'components/react/composition/FormGroup/FormGroup';

export default {
  title: 'React/Components/Controls/Checkbox',
  component: Checkbox,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export function Default() {
  return (
    <Checkbox name="checkbox" id="checkbox">
      Checkbox label
    </Checkbox>
  );
}

Default.storyName = 'Checkbox';

export function Checked() {
  return (
    <FormGroup horizontal as="fieldset">
      <FormGroup.Label as="legend">
        <Label as="span">Label</Label>
      </FormGroup.Label>
      <FormGroup.Control>
        <evg-grid wrap="wrap">
          <evg-grid-item small-mobile="12">
            <Checkbox name="checkbox" forceChecked touched valid>
              Checkbox label
            </Checkbox>
          </evg-grid-item>
          <evg-grid-item small-mobile="12">
            <Checkbox name="checkbox" touched valid>
              A really long checkbox label that wraps onto another line if it
              needs to
            </Checkbox>
          </evg-grid-item>
        </evg-grid>
      </FormGroup.Control>
    </FormGroup>
  );
}

export function TypeInput() {
  return (
    <Checkbox name="checkbox" type="input">
      Checkbox label
    </Checkbox>
  );
}

export function TypeList() {
  return (
    <evg-grid wrap="wrap">
      <evg-grid-item small-mobile="12">
        <Checkbox name="checkbox" type="list">
          Checkbox label
        </Checkbox>
      </evg-grid-item>
      <evg-grid-item small-mobile="12">
        <Checkbox name="checkbox" type="list">
          Checkbox label
        </Checkbox>
      </evg-grid-item>
    </evg-grid>
  );
}
