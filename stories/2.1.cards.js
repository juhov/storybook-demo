import React from "react";

import { Flex, Box, CardNormal, CardFlat, Heading } from "guild-js-theme";

export default () => (
  <Flex m={2}>
    <Box mr={2}>
      <Heading mb={1}>Normal</Heading>
      <CardNormal
        width="300px"
        image="http://lorempixel.com/300/170"
        title="Title"
        subtitle="Subtitle"
      />
    </Box>
    <Box>
      <Heading mb={1}>Flat</Heading>
      <CardFlat
        width="300px"
        image="http://lorempixel.com/200/200/people"
        title="Title"
        subtitle="Subtitle"
      />
    </Box>
  </Flex>
);
