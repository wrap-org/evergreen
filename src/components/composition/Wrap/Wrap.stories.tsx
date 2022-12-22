import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Wrap from "./Wrap";

import Card from "components/canvas/Card/Card";
import Spacing from "components/composition/Spacing/Spacing";
import TextAlign from "components/composition/TextAlign/TextAlign";

export default {
  title: "Composition/Wrap",
  component: Wrap,
} as Meta;

export function Default() {
  const sizes = ["sm", "md", "lg", "xl"];

  return (
    <>
      {sizes.map((size) => (
        <Spacing bottom="md" key={size}>
          <Wrap size={size}>
            <Card border>
              <Card.Body>
                <TextAlign align="center">Limit width of the content</TextAlign>
              </Card.Body>
            </Card>
          </Wrap>
        </Spacing>
      ))}
    </>
  );
}

Default.storyName = "Wrap";
