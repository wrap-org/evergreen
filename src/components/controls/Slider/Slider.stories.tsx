import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Label from '../Label/Label';

import Slider from './Slider';

export default {
  title: 'Controls/Slider',
  component: Slider,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
          {
            id: 'aria-allowed-role',
            enabled: false,
          },
        ],
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <>
    <Label htmlFor={args.id}>Slider</Label>
    <Slider {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = { id: 'default', min: 0, max: 100, step: 1 };

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  disabled: true,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  id: 'withLabels',
  labelLower: { text: 'Lower Label', showValue: true, asPercentage: true },
  labelUpper: { text: 'Upper Label', showValue: true, asPercentage: true },
};

/**
 * Slider is a controlled component must use `Controller` with react hook form
 * https://react-hook-form.com/get-started#IntegratingControlledInputs
 */
export const WithReactHookForm = () => {
  const { control, watch } = useForm<{ ['form-slider']: number }>({
    mode: 'onBlur',
    defaultValues: {
      ['form-slider']: 30,
    },
  });
  const sliderValue = watch('form-slider');

  return (
    <>
      <Label htmlFor="form-slider">Please select a value</Label>
      <Controller
        control={control}
        name="form-slider"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Slider
            id="form-slider"
            touched={fieldState.isTouched}
            valid={!fieldState.error}
            {...field}
          />
        )}
      />
      <br />
      The selected value is: {sliderValue}
    </>
  );
};
