import React from "react";
import { storiesOf } from "@storybook/react";

import { Flex, Box, Heading } from "guild-js-theme";

import Colors from "./1.1.colors";
import Fonts from "./1.2.fonts";
import Space from "./1.3.space";

storiesOf("Theme", module)
  .addDecorator(story => <Box m={2}>{story()}</Box>)
  .add("Basics", () => (
    <Flex flexWrap="wrap">
      <Box flex="0 0 100%" mb={2}>
        <Heading mb={1}>Colors</Heading>
        <Colors />
      </Box>
      <Box flex="0 0 50%">
        <Heading mb={1}>Fonts</Heading>
        <Fonts />
      </Box>
      <Box flex="0 0 50%">
        <Heading mb={1}>Space</Heading>
        <Space />
      </Box>
    </Flex>
  ));
