import React from "react";
import { Box, Card, List } from "guild-js-theme";

const items = new Array(10).fill(<Card variant="flat" pb="15%" />);

export default () => (
  <Box m={2}>
    <List itemWidth="20vw">{items}</List>
  </Box>
);
