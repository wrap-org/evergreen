import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import FormGroup from './FormGroup';

import Alert from 'components/react/canvas/Alert/Alert';
import Icon from 'components/react/content/Icon/Icon';
import Checkbox from 'components/react/controls/Checkbox/Checkbox';
import Input from 'components/react/controls/Input/Input';
import Label from 'components/react/controls/Label/Label';
import Radio from 'components/react/controls/Radio/Radio';
import TextButton from 'components/react/controls/TextButton/TextButton';

export default {
  title: 'React/Components/Composition/Form group',
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
    <>
      <FormGroup horizontal className="m-spacing-bottom-lg">
        <FormGroup.Label>
          <Label htmlFor="my-input">Input label</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <Input id="my-input" name="my-input" />
        </FormGroup.Control>
      </FormGroup>

      <FormGroup horizontal>
        <FormGroup.Label>
          <Label id="my-input-two" as="span">
            Input label with a bigger list of form controls
          </Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <div role="radiogroup" aria-labelledby="my-input-two">
            <evg-grid wrap="wrap">
              {[1, 2, 3, 4].map((option) => (
                <evg-grid-item small-mobile="12" key={option}>
                  <Radio value={option} name="my-radio-input">
                    Option {option}
                  </Radio>
                </evg-grid-item>
              ))}
            </evg-grid>
          </div>
        </FormGroup.Control>
      </FormGroup>
    </>
  );
}

export function WithInfo() {
  const [infoOneOpen, setInfoOneOpen] = useState(false);
  const [infoTwoOpen, setInfoTwoOpen] = useState(true);

  return (
    <>
      <FormGroup className="m-spacing-bottom-lg">
        <FormGroup.Label>
          <Label htmlFor="my-input-one">Input label</Label>
          <TextButton
            onClick={() => setInfoOneOpen(!infoOneOpen)}
            aria-controls="form-group-info-one"
            aria-expanded={infoOneOpen}
          >
            <Icon icon="circle-information" title="Information" />
          </TextButton>
        </FormGroup.Label>
        <FormGroup.Control>
          <Input id="my-input-one" name="my-input" />
        </FormGroup.Control>
        <FormGroup.Info controlId="form-group-info-one" open={infoOneOpen}>
          <Alert className="m-theme-info">This is an info message</Alert>
        </FormGroup.Info>
      </FormGroup>

      <FormGroup horizontal>
        <FormGroup.Label>
          <Label htmlFor="my-input-two">Input label</Label>
          <TextButton
            onClick={() => setInfoTwoOpen(!infoTwoOpen)}
            aria-controls="form-group-info-two"
            aria-expanded={infoTwoOpen}
          >
            <Icon icon="circle-information" title="Information" />
          </TextButton>
        </FormGroup.Label>
        <FormGroup.Control>
          <Input id="my-input-two" name="my-input-two" />
        </FormGroup.Control>
        <FormGroup.Info controlId="form-group-info-two" open={infoTwoOpen}>
          <Alert className="m-theme-info">This is an info message</Alert>
        </FormGroup.Info>
      </FormGroup>
    </>
  );
}

export function AsFieldset() {
  return (
    <>
      <FormGroup as="fieldset" className="m-spacing-bottom-lg">
        <FormGroup.Label as="legend">
          <Label as="span">Legend</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <evg-grid wrap="wrap">
            {[1, 2, 3].map((option) => (
              <evg-grid-item small-mobile="12" key={option}>
                <Checkbox value={option} name="my-checkbox-input-1">
                  Option {option}
                </Checkbox>
              </evg-grid-item>
            ))}
          </evg-grid>
        </FormGroup.Control>
      </FormGroup>

      <FormGroup as="fieldset" horizontal>
        <FormGroup.Label as="legend">
          <Label as="span">Legend</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <evg-grid wrap="wrap">
            {[1, 2, 3].map((option) => (
              <evg-grid-item small-mobile="12" key={option}>
                <Checkbox value={option} name="my-checkbox-input-2">
                  Option {option}
                </Checkbox>
              </evg-grid-item>
            ))}
          </evg-grid>
        </FormGroup.Control>
      </FormGroup>
    </>
  );
}
