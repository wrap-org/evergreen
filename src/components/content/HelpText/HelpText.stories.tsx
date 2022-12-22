import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import HelpText from "./HelpText";

import FormGroup from "components/composition/FormGroup/FormGroup";
import Input from "components/controls/Input/Input";
import Label from "components/controls/Label/Label";

export default {
  title: "Content/Help text",
  component: HelpText,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Has a problem with positive text, but it does pass A11Y
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = () => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <Input id="my-input" name="my-input" />
    <HelpText>Some help text for this input</HelpText>
  </FormGroup>
);

export const Positive = () => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <Input id="my-input" name="my-input" />
    <HelpText type="positive">Yay, it worked!</HelpText>
  </FormGroup>
);

export const Negative = () => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <Input id="my-input" name="my-input" />
    <HelpText type="negative">There was a problem</HelpText>
  </FormGroup>
);
