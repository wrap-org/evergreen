import { Meta } from '@storybook/react';
import React from 'react';

import Label from '../Label/Label';

import Radio from './Radio';

import FormGroup from 'components/react/composition/FormGroup/FormGroup';

export default {
  title: 'React/Components/Controls/Radio',
  component: Radio,
} satisfies Meta;

export function Default() {
  return (
    <Radio name="Radio" id="Radio">
      Radio label
    </Radio>
  );
}

export function Checked() {
  return (
    <FormGroup horizontal>
      <FormGroup.Label>
        <Label id="a-label" as="span">
          Label
        </Label>
      </FormGroup.Label>
      <FormGroup.Control>
        <div role="radiogroup" aria-labelledby="a-label">
          <evg-grid wrap="wrap">
            <evg-grid-item small-mobile="12">
              <Radio name="Radio" checked touched valid>
                Radio label
              </Radio>
            </evg-grid-item>
            <evg-grid-item small-mobile="12">
              <Radio name="Radio" touched valid>
                A really long radio label that wraps onto another line if it
                needs to
              </Radio>
            </evg-grid-item>
          </evg-grid>
        </div>
      </FormGroup.Control>
    </FormGroup>
  );
}

Default.storyName = 'Radio';
