import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Title from "./Title";

export default {
  title: "Content/Title",
  component: Title,
} as Meta;

export const Default = () => <Title>Title</Title>;

Default.storyName = "Title";
