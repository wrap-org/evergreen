import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Slider from './Slider';

export default {
  title: 'Controls/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider id="slider" name="slider" {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  labelLower: { text: 'Lower Label', showValue: true, asPercentage: true },
  labelUpper: { text: 'Upper Label', showValue: true, asPercentage: true },
};

/**
 * Slider is a controlled component must use `Controller` with react hook form
 * https://react-hook-form.com/get-started#IntegratingControlledInputs
 */
export const WithReactHookForm = () => {
  const { control, watch } = useForm<{ slider: number }>({
    mode: 'onBlur',
    defaultValues: {
      slider: 30,
    },
  });
  const sliderValue = watch('slider');

  return (
    <>
      <Controller
        control={control}
        name="slider"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Slider
            id="slider"
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
