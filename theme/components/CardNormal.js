import React from "react";
import { Box, Card as _Card, Text, styled } from "guild-js-theme";
import { intrinsicRatio } from "guild-js-theme/styled-system-utils/intrinsicRatio";

const Card = styled(_Card)`
  overflow: hidden;
`;

const ImageWrapper = styled(Box)`
  ${intrinsicRatio};
`;

export default ({ image, title, subtitle, ...rest }) => {
  return (
    <Card variant="default" {...rest}>
      {image && (
        <ImageWrapper
          intrinsicRatio={{ width: 300, height: 170 }}
          backgroundColor="greenWhite"
        >
          <img src={image} />
        </ImageWrapper>
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
            color="breakerBay"
            m={0}
          >
            {subtitle}
          </Text>
        )}
      </Box>
    </Card>
  );
};
