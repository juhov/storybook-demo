import React from "react";

import { Flex, Box, Card, Heading, Text } from "guild-js-theme";
import variables from "guild-js-theme/variables";

const Swatch = ({ name = "", color = "" }) => (
  <Box fontSize={0} flex="0 0 14em" mr={1} mb={1}>
    <Card
      borderRadius="small"
      boxShadow="small"
      bg={`${color} !important`}
      py={"22%"}
    />
    <Text
      as={Flex}
      fontSize={"11px"}
      fontFamily="mono"
      justifyContent="space-between"
      mt="0.75em"
    >
      <span>{name}</span>
      <span>{color}</span>
    </Text>
  </Box>
);

export default () => (
  <Flex flexWrap="wrap">
    {Object.entries(variables.colors).map(([name, value]) =>
      typeof value === "string" ? (
        <Swatch key={name} name={name} color={value} />
      ) : (
        <Flex width={1} key={name} flexWrap="wrap" my={4}>
          <Heading width={1}>{name}</Heading>
          {Object.entries(value).map(([_name, _value]) => (
            <Swatch key={_name} name={`${name}.${_name}`} color={_value} />
          ))}
        </Flex>
      )
    )}
  </Flex>
);
