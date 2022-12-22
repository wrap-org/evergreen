import { Meta } from "@storybook/react/types-6-0";
import map from "lodash/map";
import React from "react";

import Card from "../components/canvas/Card/Card";
import Grid from "../components/composition/Grid/Grid";
import Text from "../components/content/Text/Text";

import colors from "./colors.module.scss";

export default {
  title: "Tokens/Colors",
} as Meta;

export const Colors = () => (
  <Grid wrap>
    {map(colors, (color, key) => (
      <Grid.Item key={key} xs={12} sm={6} md={4} lg={3}>
        <Card border>
          <div
            style={{
              height: "10rem",
              background: color,
            }}
          />
          <Card.Body>
            <Text as="div" align="center" size="h3" title={color}>
              <span title={color}>{key}</span>
            </Text>
          </Card.Body>
        </Card>
      </Grid.Item>
    ))}
  </Grid>
);
