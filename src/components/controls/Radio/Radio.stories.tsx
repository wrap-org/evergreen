import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Radio from "./Radio";

export default {
  title: "Controls/Radio",
  component: Radio,
} as Meta;

export function Default() {
  return (
    <Radio name="Radio" id="Radio">
      Radio label
    </Radio>
  );
}

Default.storyName = "Radio";
