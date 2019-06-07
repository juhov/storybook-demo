import React from "react";

import { Box, Text, stripUnit } from "guild-js-theme";
import variables from "guild-js-theme/variables";

export default () => (
  <>
    {Object.entries(variables.fontSizes).map(([size, value]) => (
      <Box key={size} mb={1}>
        <Text
          fontFamily="mono"
          mb="0.25rem"
          fontSize={"11px"}
          color="breakerBay"
        >
          Size {size} — {value}, {stripUnit(value) * variables.baseFontSize}px
        </Text>
        <Text fontSize={value}>#guild-js-dev</Text>
      </Box>
    ))}
  </>
);
