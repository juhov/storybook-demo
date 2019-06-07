import React from "react";

import { Box, Text, styled } from "guild-js-theme";
import variables from "guild-js-theme/variables";

const Line = styled(Box)`
  border-bottom: 3px solid black;
`;

export default () => (
  <>
    {Object.entries(variables.space).map(([size, value]) => (
      <Box key={size} mb={1}>
        <Text
          fontFamily="mono"
          mb="0.25rem"
          fontSize={"11px"}
          color="breakerBay"
        >
          {size} — {value}
        </Text>
        <Line width={value} />
      </Box>
    ))}
  </>
);
