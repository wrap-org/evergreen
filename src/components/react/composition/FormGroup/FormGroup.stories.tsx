import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import FormGroup from './FormGroup';

import Label from 'components/react/controls/Label/Label';
import TextButton from 'components/react/controls/TextButton/TextButton';
import 'components/control/RadioCheckbox/RadioCheckbox';

export default {
  title: 'React/Components/Composition/Form group',
  component: FormGroup,
} satisfies Meta;

export function Default() {
  return (
    <FormGroup>
      <Label htmlFor="my-input">Input label</Label>
      <evg-input>
        <input id="my-input" name="my-input" />
      </evg-input>
    </FormGroup>
  );
}

Default.storyName = 'Form group';

export function Horizontal() {
  return (
    <>
      <FormGroup horizontal className="evg-spacing-bottom-lg">
        <FormGroup.Label>
          <Label htmlFor="my-input">Input label</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <evg-input>
            <input id="my-input" name="my-input" />
          </evg-input>
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
                  <evg-radio-checkbox>
                    <label>
                      <input
                        type="radio"
                        value={option}
                        name="my-radio-input"
                      />
                      Option {option}
                    </label>
                  </evg-radio-checkbox>
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
      <FormGroup className="evg-spacing-bottom-lg">
        <FormGroup.Label>
          <Label htmlFor="my-input-one">Input label</Label>
          <TextButton
            onClick={() => setInfoOneOpen(!infoOneOpen)}
            aria-controls="form-group-info-one"
            aria-expanded={infoOneOpen}
          >
            <evg-icon icon="circle-information" label="Information" />
          </TextButton>
        </FormGroup.Label>
        <FormGroup.Control>
          <evg-input>
            <input id="my-input-one" name="my-input" />
          </evg-input>
        </FormGroup.Control>
        <FormGroup.Info controlId="form-group-info-one" open={infoOneOpen}>
          <evg-alert type="info">This is an info message</evg-alert>
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
            <evg-icon icon="circle-information" label="Information" />
          </TextButton>
        </FormGroup.Label>
        <FormGroup.Control>
          <evg-input>
            <input id="my-input-two" name="my-input-two" />
          </evg-input>
        </FormGroup.Control>
        <FormGroup.Info controlId="form-group-info-two" open={infoTwoOpen}>
          <evg-alert type="info">This is an info message</evg-alert>
        </FormGroup.Info>
      </FormGroup>
    </>
  );
}

export function AsFieldset() {
  return (
    <>
      <FormGroup as="fieldset" className="evg-spacing-bottom-lg">
        <FormGroup.Label as="legend">
          <Label as="span">Legend</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <evg-grid wrap="wrap">
            {[1, 2, 3].map((option) => (
              <evg-grid-item small-mobile="12" key={option}>
                <evg-radio-checkbox>
                  <label>
                    <input
                      type="checkbox"
                      value={option}
                      name="my-checkbox-input-1"
                    />
                    Option {option}
                  </label>
                </evg-radio-checkbox>
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
                <evg-radio-checkbox>
                  <label>
                    <input
                      type="checkbox"
                      value={option}
                      name="my-checkbox-input-2"
                    />
                    Option {option}
                  </label>
                </evg-radio-checkbox>
              </evg-grid-item>
            ))}
          </evg-grid>
        </FormGroup.Control>
      </FormGroup>
    </>
  );
}
