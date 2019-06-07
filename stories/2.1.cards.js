import React from "react";

import { Flex, Box, CardNormal, CardFlat, Heading } from "guild-js-theme";

export default () => (
  <Flex>
    <Box mr={2}>
      <Heading mb={1}>Normal</Heading>
      <CardNormal
        width="300px"
        image="http://lorempixel.com/300/170"
        title="asdf"
        subtitle="asdf"
      />
    </Box>
    <Box>
      <Heading mb={1}>Flat</Heading>
      <CardFlat
        width="300px"
        image="http://lorempixel.com/200/200/people"
        title="asdf"
        subtitle="asdf"
      />
    </Box>
  </Flex>
);
