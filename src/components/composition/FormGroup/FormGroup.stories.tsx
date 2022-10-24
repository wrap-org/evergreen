import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Label from 'components/controls/Label/Label';
import Input from 'components/controls/Input/Input';

import FormGroup from './FormGroup';

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
