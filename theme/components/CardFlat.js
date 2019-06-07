import React from "react";
import { Flex, Box, Card, Text, styled } from "guild-js-theme";
import { intrinsicRatio } from "guild-js-theme/styled-system-utils/intrinsicRatio";

const ImageWrapper = styled(Box)`
  ${intrinsicRatio};
`;

export default ({ image, title, subtitle, ...rest }) => {
  return (
    <Card
      as={Flex}
      justifyContent="flex-start"
      variant="flat"
      {...rest}
      style={{ overflow: "hidden" }}
    >
      {image && (
        <Card
          flex="0 1 30%"
          backgroundColor="greenWhite"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
        />
      )}
      <Box p={1}>
        <Text as="h2" fontSize={3} m={0} fontWeight="500">
          {title}
        </Text>
        {subtitle && (
          <Text
            as="h3"
            fontSize={2}
            mt="0.1em"
            fontWeight="400"
            color="burntSienna"
            m={0}
          >
            {subtitle}
          </Text>
        )}
      </Box>
    </Card>
  );
};
