import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Lead from "./Lead";

export default {
  title: "Content/Lead",
  component: Lead,
} as Meta;

export const Default = () => (
  <>
    <h1>Page title</h1>
    <Lead>Lead text is a bit bigger.</Lead>
  </>
);

Default.storyName = "Lead";
