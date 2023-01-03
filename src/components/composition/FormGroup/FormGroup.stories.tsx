import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import FormGroup from './FormGroup';

import Input from 'components/controls/Input/Input';
import Label from 'components/controls/Label/Label';

export default {
  title: 'Composition/Form group',
  component: FormGroup,
} as Meta;

export function Default() {
  return (
    <FormGroup>
      <Label htmlFor="my-input">Input label</Label>
      <Input id="my-input" name="my-input" />
    </FormGroup>
  );
}

Default.storyName = 'Form group';

export function Horizontal() {
  return (
    <FormGroup horizontal>
      <FormGroup.Label>
        <Label htmlFor="my-input">Input label</Label>
      </FormGroup.Label>
      <FormGroup.Control>
        <Input id="my-input" name="my-input" />
      </FormGroup.Control>
    </FormGroup>
  );
}
